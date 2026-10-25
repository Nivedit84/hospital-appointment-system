import pytest
from rest_framework.test import APIClient
from hospital.models import Role, User, Doctor, Patient, Appointment


@pytest.fixture  # Reusable test setup
def patient_role():
    return Role.objects.create(
        name="Patient",
        code="PATIENT",
        description="Patient role"
    )

@pytest.mark.django_db
def test_patient_registration(patient_role):

    client = APIClient()  # Acts like an actual HTTP client

    response = client.post(
        "/api/auth/register/patient/",
        {
            "email": "newpatient@test.com",
            "password": "password123",
            "full_name": "Test Patient",
            "phone": "9876543210",
            "date_of_birth": "2000-01-01",
            "gender": "Male"
        },
        format="json"
    )

    assert response.status_code == 201

@pytest.mark.django_db
def test_duplicate_email_registration(patient_role):

    client = APIClient()

    # First registration
    client.post(
        "/api/auth/register/patient/",
        {
            "email": "duplicate@test.com",
            "password": "password123",
            "full_name": "First Patient",
            "phone": "9876543210",
            "date_of_birth": "2000-01-01",
            "gender": "Male"
        },
        format="json"
    )

    # Second registration with same email
    response = client.post(
        "/api/auth/register/patient/",
        {
            "email": "duplicate@test.com",
            "password": "password123",
            "full_name": "Second Patient",
            "phone": "9876543211",
            "date_of_birth": "2000-01-01",
            "gender": "Male"
        },
        format="json"
    )

    assert response.status_code == 400
    assert "email" in response.data

@pytest.mark.django_db
def test_invalid_phone_registration(patient_role):

    client = APIClient()

    response = client.post(
        "/api/auth/register/patient/",
        {
            "email": "invalidphone@test.com",
            "password": "password123",
            "full_name": "Test Patient",
            "phone": "123",
            "date_of_birth": "2000-01-01",
            "gender": "Male"
        },
        format="json"
    )

    assert response.status_code == 400
    assert "phone" in response.data

@pytest.mark.django_db
def test_unauthenticated_user_cannot_access_appointments():

    client = APIClient()

    response = client.get("/api/appointments/")

    assert response.status_code in [401, 403]

@pytest.mark.django_db
def test_inactive_doctor_not_visible(patient_role):

    doctor_role = Role.objects.create(
        name="Doctor",
        code="DOCTOR",
        description="Doctor role"
    )

    active_user = User.objects.create_user(
        email="active@test.com",
        password="password123",
        role=doctor_role
    )

    inactive_user = User.objects.create_user(
        email="inactive@test.com",
        password="password123",
        role=doctor_role
    )

    Doctor.objects.create(
        user=active_user,
        full_name="Active Doctor",
        specialty="Cardiology",
        qualification="MBBS",
        experience=5,
        bio="Active doctor",
        consultation_fee=500,
        status="active"
    )

    Doctor.objects.create(
        user=inactive_user,
        full_name="Inactive Doctor",
        specialty="Dermatology",
        qualification="MBBS",
        experience=5,
        bio="Inactive doctor",
        consultation_fee=500,
        status="inactive"
    )

    client = APIClient()

    response = client.get("/api/doctors/")

    assert response.status_code == 200

    names = [doctor["full_name"] for doctor in response.data]

    assert "Active Doctor" in names 
    assert "Inactive Doctor" not in names


@pytest.mark.django_db
def test_cancelled_appointment_cannot_be_completed(patient_role):

    doctor_role = Role.objects.create(
        name="Doctor",
        code="DOCTOR",
        description="Doctor role"
    )

    doctor_user = User.objects.create_user(
        email="doctor@test.com",
        password="password123",
        role=doctor_role
    )

    doctor = Doctor.objects.create(
        user=doctor_user,
        full_name="Test Doctor",
        specialty="Cardiology",
        qualification="MBBS",
        experience=5,
        bio="Test doctor",
        consultation_fee=500
    )

    patient_user = User.objects.create_user(
        email="patient@test.com",
        password="password123",
        role=patient_role
    )

    patient = Patient.objects.create(
        user=patient_user,
        full_name="Test Patient",
        phone="9876543210",
        date_of_birth="2000-01-01",
        gender="Male"
    )

    appointment = Appointment.objects.create(
        patient=patient,
        doctor=doctor,
        appointment_date="2026-10-20",
        appointment_time="10:00",
        reason="Checkup",
        status="cancelled"
    )

    client = APIClient()

    # Pretend the doctor is authenticated
    client.force_authenticate(user=doctor_user)

    response = client.patch(
        f"/api/appointments/{appointment.id}/",
        {"status": "completed"},
        format="json"
    )

    assert response.status_code == 400