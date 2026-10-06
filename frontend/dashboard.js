
async function loadPatient() {

    const patientId = localStorage.getItem("patient_id");
    // Get the logged-in patient's ID

    const response = await fetch(
        `http://127.0.0.1:8000/api/patients/${patientId}/`
    );
    // Request that patient's data from Django

    const patient = await response.json();
    // Convert the response into a JavaScript object

    console.log(patient);
    // Check the returned patient data
        document.getElementById("patientName").textContent =
        `Welcome, ${patient.full_name}!`;
}



async function appointments() {
    const patientId = localStorage.getItem("patient_id");
    const response = await fetch("http://127.0.0.1:8000/api/appointments/");
    const appointments = await response.json();
    console.log(appointments);
    console.log(Array.isArray(appointments));
    const patientAppointments = appointments.filter(
        appointment => appointment.patient === Number(patientId)
    );
    console.log(patientAppointments);

    const appointmentCard = document.getElementById("appointmentCard");


    if (patientAppointments.length === 0) {
        appointmentCard.innerHTML = `
            <p>No upcoming appointments.</p>
        `;
        return;
    }
    appointmentCard.innerHTML = "";

    for (const appointment of patientAppointments){
        const doctorResponse = await fetch(`http://127.0.0.1:8000/api/doctors/${appointment.doctor}/`);
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
                </div>
                <a href="appointments.html" class="btn btn-primary">
                    View Appointment
                </a>
            </article>
        `;

        appointmentCard.innerHTML += appointmentHTML;
    }
    }
    




loadPatient();
// Run the function
appointments();