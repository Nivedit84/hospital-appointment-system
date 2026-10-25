
async function loadConfirmation() {
    const params = new URLSearchParams(window.location.search);
    const appointmentId = params.get("appointment");
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(
            `http://127.0.0.1:8000/api/appointments/${appointmentId}/`,
            {
                headers: {
                    "Authorization": `Token ${token}`
                }
            }
        );

        if (!response.ok) {
            throw new Error(`Appointment request failed: ${response.status}`);
        }

        const appointment = await response.json();

        const doctorResponse = await fetch(
            `http://127.0.0.1:8000/api/doctors/${appointment.doctor}/`,
            {
                headers: {
                    "Authorization": `Token ${token}`
                }
            }
        );

        if (!doctorResponse.ok) {
            throw new Error(`Doctor request failed: ${doctorResponse.status}`);
        }

        const doctor = await doctorResponse.json();

        document.getElementById("doctorName").textContent =
            `Doctor: ${doctor.full_name}`;

        document.getElementById("appointmentDate").textContent =
            `Date: ${appointment.appointment_date}`;

        document.getElementById("appointmentTime").textContent =
            `Time: ${appointment.appointment_time}`;

        document.getElementById("appointmentStatus").textContent =
            `Status: ${appointment.status}`;

    } catch (error) {
        console.error("Failed to load confirmation:", error);
    }
}

loadConfirmation();
