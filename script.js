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
        // Set a cookie or use localStorage to persist the sign-in state
        localStorage.setItem("signedInUser", username);
        updateSignInStatus();
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}

// Function to check if a user is signed in
function isSignedIn() {
    return localStorage.getItem("signedInUser") !== null;
}

// Function to update the visibility of sign-in and profile buttons
function updateSignInStatus() {
    const signInButton = document.getElementById("signInButton");
    const profileButton = document.getElementById("profileButton");

    if (isSignedIn()) {
        signInButton.style.display = "none";
        profileButton.style.display = "inline-block";
    } else {
        signInButton.style.display = "inline-block";
        profileButton.style.display = "none";
    }
}

// Function to open the profile popup
function openProfilePopup() {
    const signedInUser = localStorage.getItem("signedInUser");
    
    if (signedInUser) {
        const accountInfo = getAccountInfo(signedInUser);
        document.getElementById("profileUsername").innerText = accountInfo.username;
        document.getElementById("profileVerified").innerText = accountInfo.verified ? "Yes" : "No";
        document.getElementById("profilePopup").style.display = "block";
    }
}

// Function to close the profile popup
function closeProfilePopup() {
    document.getElementById("profilePopup").style.display = "none";
}

// Function to sign out
function signOut() {
    localStorage.removeItem("signedInUser");
    closeProfilePopup();
    updateSignInStatus();
}
