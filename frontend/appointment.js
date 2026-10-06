async function loadAppointments() {

    const patientId = localStorage.getItem("patient_id");

    const response = await fetch(
        "http://127.0.0.1:8000/api/appointments/"
    );

    const appointments = await response.json();

    const patientAppointments = appointments.filter(
        appointment => appointment.patient === Number(patientId)
    );

    const appointmentsList = document.getElementById("appointmentsList");

    if (patientAppointments.length === 0) {

        appointmentsList.innerHTML = `
            <p>You have no appointments.</p>
        `;

        return;
    }

    appointmentsList.innerHTML = "";

    for (const appointment of patientAppointments) {

        const doctorResponse = await fetch(
            `http://127.0.0.1:8000/api/doctors/${appointment.doctor}/`
        );

        const doctor = await doctorResponse.json();

        const appointmentHTML = `
            <article class="card article-card">

                <div class="appointment-info">

                    <h3>${doctor.full_name}</h3>

                    <p>${doctor.specialty}</p>

                    <p>
                        Date: ${appointment.appointment_date}
                    </p>

                    <p>
                        Time: ${appointment.appointment_time}
                    </p>

                    <p>
                        Status: ${appointment.status}
                    </p>

                    <p>
                        Reason: ${appointment.reason}
                    </p>

                </div>

                <div class="appointment-actions">

                    <button
                        class="btn btn-primary"
                        onclick="showRescheduleForm(${appointment.id})">
                        Reschedule
                    </button>

                    <button
                        class="btn btn-danger"
                        onclick="cancelAppointment(${appointment.id})">
                        Cancel
                    </button>

                </div>

            </article>
        `;

        appointmentsList.innerHTML += appointmentHTML;
    }
}



loadAppointments();

async function cancelAppointment(appointmentId) {
    console.log(appointmentId);
    const response = await fetch(
        `http://127.0.0.1:8000/api/appointments/${appointmentId}/`,
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                status: "cancelled"
            })
        }
    );

    const data = await response.json();

    if (response.ok) {

        alert("Appointment cancelled successfully.");

        loadAppointments();

    } else {

        console.log(data);
        alert("Failed to cancel appointment.");
    }
}

function showRescheduleForm(appointmentId) {

    const newDate = prompt("Enter new date (YYYY-MM-DD):");
    const newTime = prompt("Enter new time (HH:MM:SS):");

    if (!newDate || !newTime) {
        return;
    }

    rescheduleAppointment(appointmentId, newDate, newTime);
}

async function rescheduleAppointment(appointmentId, newDate, newTime) {

    const response = await fetch(
        `http://127.0.0.1:8000/api/appointments/${appointmentId}/`,
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                appointment_date: newDate,
                appointment_time: newTime
            })
        }
    );

    const data = await response.json();

    if (response.ok) {

        alert("Appointment rescheduled successfully.");

        loadAppointments();

    } else {

        console.log(data);

        alert("Failed to reschedule appointment.");
    }
}