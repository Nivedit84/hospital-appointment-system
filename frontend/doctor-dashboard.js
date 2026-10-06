const doctorId = localStorage.getItem("doctor_id");

async function getDoctor(){
    const response = await fetch(`http://127.0.0.1:8000/api/doctors/${doctorId}/`);
    const data = await response.json();

    const doctorName = document.getElementById("doctorName");
    doctorName.textContent = `Welcome, ${data.full_name}`;
}

async function appointments() {

    const response = await fetch(
        "http://127.0.0.1:8000/api/appointments/"
    );

    const appointments = await response.json();

    const doctorAppointments = appointments.filter(
        appointment => appointment.doctor === Number(doctorId)
    );

    const appointmentCard = document.getElementById("appointmentCard");

    if (doctorAppointments.length === 0) {

        appointmentCard.innerHTML = `
            <p>No upcoming appointments.</p>
        `;

        return;
    }

    appointmentCard.innerHTML = "";

    for (const appointment of doctorAppointments) {
        const patientResponse = await fetch(`http://127.0.0.1:8000/api/patients/${appointment.patient}/`);
        const patient = await patientResponse.json();
        const appointmentHTML = `
            <article class="card article-card">

                <div class="appointment-info">

                    <p>
                        Patient ID: ${patient.full_name}
                    </p>

                    <p>
                        Date: ${appointment.appointment_date}
                    </p>

                    <p>
                        Time: ${appointment.appointment_time}
                    </p>

                    <p>
                        Status: ${appointment.status}
                    </p>

                </div>

                <a
                    href="doctor-appointment.html?id=${appointment.id}"
                    class="btn btn-primary">
                    View Appointment
                </a>

            </article>
        `;

        appointmentCard.innerHTML += appointmentHTML;
    }
}

getDoctor();
appointments();