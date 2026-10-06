const signupForm = document.getElementById("signupForm");
// Finds our signup form
signupForm.addEventListener("submit", async function(event) {
    // Runs when the user submits the form
    const fullName = document.getElementById("full-name").value;
    // Gets the patient's name

    const email = document.getElementById("email").value;
    // Gets the email

    const phone = document.getElementById("phone").value;
    // Gets the phone number

    const dateOfBirth = document.getElementById("dob").value;
    // Gets the date of birth

    const gender = document.querySelector('input[name="gender"]:checked').value;
    // Gets the gender

    const password = document.getElementById("password").value;
    // Gets the password

    const confirmPassword = document.getElementById("confirm-password").value;
    // Gets the confirmation password

    if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
    }

    event.preventDefault();
    // Stops the browser from reloading the page

    const response = await fetch("http://127.0.0.1:8000/api/auth/register/patient/", {
        method: "POST",
        headers:{
            "content-Type": "application/json"
        },

        body: JSON.stringify({
                email: email,
                password: password,
                full_name: fullName,
                phone: phone,
                date_of_birth: dateOfBirth,
                gender: gender
        })
    })

    const result = await response.json();
    if (result.ok){
            window.location.href = "login.html";
    }
});