import pytest
from rest_framework.exceptions import ValidationError
from datetime import date, time
from hospital.models import User, Role, Patient, Doctor, Appointment
from hospital.serializers import RegisterSerializerPatient, AppointmentSerializer

@pytest.mark.django_db  # Permission to use django database
def test_duplicate_email_is_rejected():

    role = Role.objects.create(
        name="Patient",
        code="PATIENT",
        description="Patient role"
    )

    User.objects.create_user(
        email="test@example.com",
        password="password123",
        role=role
    )

    serializer = RegisterSerializerPatient(data={
        "email": "test@example.com",
        "password": "password123",
        "full_name": "Test Patient",
        "phone": "9876543210",
        "date_of_birth": "2000-01-01",
        "gender": "Male"
    })

    assert serializer.is_valid() is False
    assert "email" in serializer.errors

@pytest.mark.django_db
def test_new_email_is_accepted():

    role = Role.objects.create(
        name="Patient",
        code="PATIENT",
        description="Patient role"
    )

    serializer = RegisterSerializerPatient(data={
        "email": "newpatient@example.com",
        "password": "password123",
        "full_name": "New Patient",
        "phone": "9876543210",
        "date_of_birth": "2000-01-01",
        "gender": "Male"
    })

    assert serializer.is_valid() is True

@pytest.mark.django_db
@pytest.mark.parametrize("phone", [
    "123",
    "123456",
    "abcdefghij",
    "98765abc10",
])
def test_invalid_phone_is_rejected(phone):

    serializer = RegisterSerializerPatient(data={
        "email": "phone_test@example.com",
        "password": "password123",
        "full_name": "Test Patient",
        "phone": phone,
        "date_of_birth": "2000-01-01",
        "gender": "Male"
    })

    assert serializer.is_valid() is False
    assert "phone" in serializer.errors  # Error should originate from phone

@pytest.mark.django_db
def test_doctor_cannot_have_duplicate_booked_slot():

    # Create roles
    doctor_role = Role.objects.create(
        name="Doctor",
        code="DOCTOR",
        description="Doctor role"
    )

    patient_role = Role.objects.create(
        name="Patient",
        code="PATIENT",
        description="Patient role"
    )

    # Create doctor user
    doctor_user = User.objects.create_user(
        email="doctor@test.com",
        password="password123",
        role=doctor_role
    )

    # Create doctor
    doctor = Doctor.objects.create(
        user=doctor_user,
        full_name="Test Doctor",
        specialty="Cardiology",
        qualification="MBBS",
        experience=5,
        bio="Test doctor",
        consultation_fee=500
    )

    # Create patient user
    patient_user = User.objects.create_user(
        email="patient@test.com",
        password="password123",
        role=patient_role
    )

    # Create patient
    patient = Patient.objects.create(
        user=patient_user,
        full_name="Test Patient",
        phone="9876543210",
        date_of_birth="2000-01-01",
        gender="Male"
    )

    # First appointment already exists
    Appointment.objects.create(
        patient=patient,
        doctor=doctor,
        appointment_date=date(2026, 10, 10),
        appointment_time=time(10, 0),
        reason="General consultation",
        status="booked"
    )

    # Try booking the SAME slot
    serializer = AppointmentSerializer(data={
        "patient": patient.id,
        "doctor": doctor.id,
        "appointment_date": date(2026, 10, 10),
        "appointment_time": time(10, 0),
        "reason": "Another consultation",
        "status": "booked"
    })

    # It should be rejected
    assert serializer.is_valid() is False
    assert "appointment slot" in str(serializer.errors).lower()

@pytest.mark.django_db
def test_cancelled_appointment_cannot_be_completed():

    doctor_role = Role.objects.create(
        name="Doctor",
        code="DOCTOR",
        description="Doctor role"
    )

    patient_role = Role.objects.create(
        name="Patient",
        code="PATIENT",
        description="Patient role"
    )

    doctor_user = User.objects.create_user(
        email="doctor2@test.com",
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
        email="patient2@test.com",
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
        appointment_date=date(2026, 10, 11),
        appointment_time=time(11, 0),
        reason="Follow-up",
        status="cancelled"
    )

    serializer = AppointmentSerializer(
        appointment,
        data={"status": "completed"},
        partial=True
    )

    assert serializer.is_valid() is False
    assert "cancelled appointment" in str(serializer.errors).lower()