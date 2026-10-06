const params = new URLSearchParams(window.location.search);

const appointmentId = params.get("id");

console.log("Appointment ID:", appointmentId);

async function loadAppointment() {

    const response = await fetch(
        `http://127.0.0.1:8000/api/appointments/${appointmentId}/`
    );

    const appointment = await response.json();


    const patientResponse = await fetch(
        `http://127.0.0.1:8000/api/patients/${appointment.patient}/`
    );

    const patient = await patientResponse.json();


    document.getElementById("appointmentId").textContent =
        `Appointment ID: ${appointment.id}`;

    document.getElementById("patientName").textContent =
        `Patient: ${patient.full_name}`;

    document.getElementById("patientPhone").textContent =
        `Phone: ${patient.phone}`;

    document.getElementById("patientDOB").textContent =
        `Date of Birth: ${patient.date_of_birth}`;

    document.getElementById("patientGender").textContent =
        `Gender: ${patient.gender}`;

    document.getElementById("appointmentDate").textContent =
        `Date: ${appointment.appointment_date}`;

    document.getElementById("appointmentTime").textContent =
        `Time: ${appointment.appointment_time}`;

    document.getElementById("appointmentReason").textContent =
        `Reason: ${appointment.reason}`;

    document.getElementById("appointmentStatus").textContent =
        `Status: ${appointment.status}`;
}


async function updateAppointment(status) {

    const response = await fetch(
        `http://127.0.0.1:8000/api/appointments/${appointmentId}/`,
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                status: status
            })
        }
    );

    if (response.ok) {

        alert(`Appointment ${status} successfully.`);

        loadAppointment();

    } else {

        alert("Failed to update appointment.");

    }
}

document
    .getElementById("completeButton")
    .addEventListener("click", function () {

        updateAppointment("completed");

    });


document
    .getElementById("cancelButton")
    .addEventListener("click", function () {

        updateAppointment("cancelled");

    });


loadAppointment();