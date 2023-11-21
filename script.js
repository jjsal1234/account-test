document.addEventListener("DOMContentLoaded", function () {
    checkLoginStatus();
});

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // For simplicity, use a hardcoded username and password
    if (username === "user" && password === "pass") {
        // Store the username in local storage
        localStorage.setItem("loggedInUser", username);
        checkLoginStatus();
    } else {
        document.getElementById("error").innerText = "Invalid username or password";
    }
}

function logout() {
    // Remove the username from local storage
    localStorage.removeItem("loggedInUser");
    checkLoginStatus();
}

function checkLoginStatus() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const loginForm = document.getElementById("loginForm");
    const welcomeMessage = document.getElementById("welcomeMessage");

    if (loggedInUser) {
        // User is logged in
        loginForm.style.display = "none";
        welcomeMessage.style.display = "block";
        document.getElementById("loggedInUser").innerText = loggedInUser;
    } else {
        // User is not logged in
        loginForm.style.display = "block";
        welcomeMessage.style.display = "none";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("error").innerText = "";
    }
}
