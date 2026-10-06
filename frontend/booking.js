async function loadAppointmentDetails() {

    const params = new URLSearchParams(window.location.search);

    const doctorId = params.get("doctor");
    const appointmentDate = params.get("date");
    const appointmentTime = params.get("time");

    const response = await fetch(
        `http://127.0.0.1:8000/api/doctors/${doctorId}/`
    );

    const doctor = await response.json();

    document.getElementById("doctorName").textContent =
        `Doctor: ${doctor.full_name}`;

    document.getElementById("doctorSpecialty").textContent =
        `Specialty: ${doctor.specialty}`;

    document.getElementById("appointmentDate").textContent =
        `Date: ${appointmentDate}`;

    document.getElementById("appointmentTime").textContent =
        `Time: ${appointmentTime}`;

    document.getElementById("consultationFee").textContent =
        `Consultation Fee: ₹${doctor.consultation_fee}`;
}


const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const params = new URLSearchParams(window.location.search);

    const doctorId = params.get("doctor");
    const appointmentDate = params.get("date");
    const appointmentTime = params.get("time");

    const patientId = localStorage.getItem("patient_id");

    const reason = document.getElementById("reason").value;

    const data = {
        patient: Number(patientId),
        doctor: Number(doctorId),
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
        status: "booked",
        reason: reason
    };

    const response = await fetch(
        "http://127.0.0.1:8000/api/appointments/",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        }
    );

    const result = await response.json();

    if (response.ok) {

        window.location.href =
            `confirmation.html?appointment=${result.id}`;

    } else {

        console.log(result);

        document.getElementById("bookingMessage").textContent =
            "Failed to book appointment.";
    }
});


loadAppointmentDetails();