async function loadDoctors() {

    const response = await fetch(
        "http://127.0.0.1:8000/api/doctors/"
    );

    const doctors = await response.json();

    const doctorsList = document.getElementById("doctorsList");

    doctorsList.innerHTML = "";

    for (const doctor of doctors) {

        const doctorHTML = `
            <article class="card doctor-card">

                <h3>${doctor.full_name}</h3>

                <p>Specialty: ${doctor.specialty}</p>

                <p>Experience: ${doctor.experience} years</p>

                <p>Consultation Fee: ₹${doctor.consultation_fee}</p>

                <a
                    href="doctor-profile.html?id=${doctor.id}"
                    class="btn btn-primary">
                    View Profile
                </a>

            </article>
        `;

        doctorsList.innerHTML += doctorHTML;
    }
}

loadDoctors();