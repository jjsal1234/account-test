// Function to open the sign-in popup
function openSignInPopup() {
    document.getElementById("signInPopup").style.display = "block";
}

// Function to close the sign-in popup
function closeSignInPopup() {
    document.getElementById("signInPopup").style.display = "none";
}

// Function to sign in
function signIn() {
    const username = document.getElementById("username").value;
    const password = prompt("Please enter your password"); // Simple password prompt (replace with more secure method)

    if (checkCredentials(username, password)) {
        alert("Sign-in successful!");
        closeSignInPopup();
        openProfilePopup(username);
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}

// Function to open the profile popup
function openProfilePopup(username) {
    const accountInfo = getAccountInfo(username);

    if (accountInfo) {
        document.getElementById("profileUsername").innerText = accountInfo.username;
        document.getElementById("profileVerified").innerText = accountInfo.verified ? "Yes" : "No";
        document.getElementById("profilePopup").style.display = "block";
    } else {
        alert("Account not found.");
    }
}

// Function to close the profile popup
function closeProfilePopup() {
    document.getElementById("profilePopup").style.display = "none";
}
