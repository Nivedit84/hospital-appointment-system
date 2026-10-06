const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
loginForm.addEventListener("submit", async function(event) {   // Listens for events like clicks
    event.preventDefault();  // removes default browser behaviour
    loginError.textContent = ""; //clear the old error when user tries to login again
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {   // Response object
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }
    )

    const data = await response.json();

    if (response.ok) {
        if (data.role == "PATIENT") {
            console.log("Login successful");
            localStorage.setItem("patient_id", data.patient_id);
            window.location.href = "patient-dashboard.html";  // Current browser window, current page, nav link to new page
        }
        else if (data.role == "DOCTOR"){
            localStorage.setItem("doctor_id", data.doctor_id);
            window.location.href = "doctor-dashboard.html";
        }
    }else {
        console.log("Login failed");
        loginError.textContent = "Invalid email or username";
    }
});