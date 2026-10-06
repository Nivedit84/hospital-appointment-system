// Get doctor ID from the URL
const params = new URLSearchParams(window.location.search);
const doctorId = Number(params.get("id"));

// Get elements from HTML
const doctorName = document.getElementById("doctorName");
const doctorSpecialty = document.getElementById("doctorSpecialty");
const doctorExperience = document.getElementById("doctorExperience");
const doctorBio = document.getElementById("doctorBio");
const doctorFee = document.getElementById("doctorFee");

const dateInput = document.getElementById("appointment-date");
const slotsContainer = document.getElementById("timeSlots");

// Load doctor details
async function loadDoctor() {

    const response = await fetch(
        `http://127.0.0.1:8000/api/doctors/${doctorId}/`
    );

    const doctor = await response.json();

    doctorName.textContent = doctor.full_name;
    doctorSpecialty.textContent = doctor.specialty;
    doctorExperience.textContent = `Experience: ${doctor.experience} years`;
    doctorBio.textContent = doctor.bio;
    doctorFee.textContent = `Consultation Fee: ₹${doctor.consultation_fee}`;
}


// Load available time slots
async function loadSlots() {

    const selectedDate = dateInput.value;

    if (!selectedDate) {
        slotsContainer.innerHTML = "";
        return;
    }


    // Convert selected date into JavaScript Date
    const date = new Date(selectedDate + "T00:00:00");


    // Get day name
    const dayName = date.toLocaleDateString("en-US", {
        weekday: "long"
    });


    // Get doctor's schedules
    const scheduleResponse = await fetch(
        "http://127.0.0.1:8000/api/schedules/"
    );

    const schedules = await scheduleResponse.json();


    // Find active schedule for this doctor and day
    const schedule = schedules.find(
        schedule =>
            schedule.doctor === doctorId &&
            schedule.day_of_week.toLowerCase() === dayName.toLowerCase() &&
            schedule.status === "active"
    );


    // No schedule available
    if (!schedule) {

        slotsContainer.innerHTML =
            "<p>No appointments available on this day.</p>";

        return;
    }


    // Get all appointments
    const appointmentResponse = await fetch(
        "http://127.0.0.1:8000/api/appointments/"
    );

    const appointments = await appointmentResponse.json();


    // Keep only booked appointments
    // for this doctor and selected date
    const bookedAppointments = appointments.filter(
        appointment =>
            appointment.doctor === doctorId &&
            appointment.appointment_date === selectedDate &&
            appointment.status === "booked"
    );


    // Convert schedule start/end time into minutes
    const [startHour, startMinute] =
        schedule.start_time.split(":").map(Number);

    const [endHour, endMinute] =
        schedule.end_time.split(":").map(Number);


    let currentMinutes = startHour * 60 + startMinute;
    const endMinutes = endHour * 60 + endMinute;


    // Remove old slots
    slotsContainer.innerHTML = "";


    // Generate 30-minute slots
    while (currentMinutes < endMinutes) {

        const hour = Math.floor(currentMinutes / 60);
        const minute = currentMinutes % 60;


        // Convert time to HH:MM:SS
        const slotTime =
            String(hour).padStart(2, "0") +
            ":" +
            String(minute).padStart(2, "0") +
            ":00";


        // Check if this slot is already booked
        const isBooked = bookedAppointments.some(
            appointment =>
                appointment.appointment_time === slotTime
        );


        // Create button
        const slotButton = document.createElement("button");

        slotButton.type = "button";

        slotButton.textContent =
            `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;


        if (isBooked) {

            // Slot is already booked
            slotButton.disabled = true;

            slotButton.textContent += " - Taken";

        } else {

            // Slot is available
            slotButton.addEventListener("click", function () {

                window.location.href =
                    `booking.html?doctor=${doctorId}&date=${selectedDate}&time=${slotTime}`;

            });
        }


        // Add button to page
        slotsContainer.appendChild(slotButton);


        // Move to next 30-minute slot
        currentMinutes += 30;
    }
}


// Load doctor details when page opens
loadDoctor();


// Generate slots whenever date changes
dateInput.addEventListener("change", loadSlots);