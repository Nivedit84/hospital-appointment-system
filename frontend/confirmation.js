async function loadConfirmation() {

    const params = new URLSearchParams(window.location.search);

    const appointmentId = params.get("appointment");


    const response = await fetch(
        `http://127.0.0.1:8000/api/appointments/${appointmentId}/`
    );

    const appointment = await response.json();


    const doctorResponse = await fetch(
        `http://127.0.0.1:8000/api/doctors/${appointment.doctor}/`
    );

    const doctor = await doctorResponse.json();


    document.getElementById("doctorName").textContent =
        `Doctor: ${doctor.full_name}`;

    document.getElementById("appointmentDate").textContent =
        `Date: ${appointment.appointment_date}`;

    document.getElementById("appointmentTime").textContent =
        `Time: ${appointment.appointment_time}`;

    document.getElementById("appointmentStatus").textContent =
        `Status: ${appointment.status}`;
}


loadConfirmation();