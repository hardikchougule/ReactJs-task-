window.onload = () => {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", validateLogin);
};

function validateLogin(event) {
    event.preventDefault();

    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");

    const email = emailField.value.trim();
    const password = passwordField.value.trim();

    if (!validateEmail(email)) {
        showError("Please enter a valid email address.");
        return;
    }

    if (password.length < 8) {
        showError("Password must be at least 8 characters long.");
        return;
    }

    errorMessage.style.display = "none";
    alert("Login successful!");
    // Add further logic here (e.g., send data to the server).
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function showError(message) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}
