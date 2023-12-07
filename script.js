document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginModal = document.getElementById("loginModal");

    loginBtn.addEventListener("click", openLoginModal);
    logoutBtn.addEventListener("click", logout);

    if (isLoggedIn()) {
        showLogout();
    }

    function openLoginModal() {
        loginModal.style.display = "block";
    }

    function closeLoginModal() {
        loginModal.style.display = "none";
    }

    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulate authentication (in a real system, you would validate credentials on a server)
        if (username === "demo" && password === "password") {
            closeLoginModal();
            setLoggedInUser(username);
            showLogout();
        } else {
            alert("Invalid credentials. Please try again.");
        }
    }

    function logout() {
        clearLoggedInUser();
        showLogin();
    }

    function isLoggedIn() {
        return localStorage.getItem("loggedInUser") !== null;
    }

    function setLoggedInUser(username) {
        localStorage.setItem("loggedInUser", username);
    }

    function clearLoggedInUser() {
        localStorage.removeItem("loggedInUser");
    }

    function showLogin() {
        loginBtn.style.display = "inline";
        logoutBtn.style.display = "none";
    }

    function showLogout() {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline";
    }
});
