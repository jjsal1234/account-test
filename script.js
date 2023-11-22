// Function to update the visibility of sign-in and profile buttons
function updateSignInStatus() {
    const signInButton = document.getElementById("signInButton");
    const profileButton = document.getElementById("profileButton");
    const profileInfoText = document.getElementById("profileInfoText");

    const signedInUser = localStorage.getItem("signedInUser");

    if (signedInUser) {
        const accountInfo = getAccountInfo(signedInUser);
        profileInfoText.textContent = `Account: ${accountInfo.username}`;
        profileButton.style.display = "inline-block";
    } else {
        profileInfoText.textContent = ""; // Clear the text when not signed in
        profileButton.style.display = "none";
    }

    if (isSignedIn()) {
        signInButton.style.display = "none";
    } else {
        signInButton.style.display = "inline-block";
    }
}

// Function to open the profile popup
function openProfilePopup() {
    const signedInUser = localStorage.getItem("signedInUser");

    if (signedInUser) {
        const accountInfo = getAccountInfo(signedInUser);
        const profileUsername = document.getElementById("profileUsername");
        const profileVerified = document.getElementById("profileVerified");

        profileUsername.textContent = `Username: ${accountInfo.username}`;

        if (accountInfo.verified) {
            const checkmarkImg = document.createElement("img");
            checkmarkImg.src = "https://cdn.discordapp.com/attachments/1061160749524860949/1176632201761271848/Untitled4_20231121141547.png?ex=656f9321&is=655d1e21&hm=b8f037c74b23f954c529858cb775a6a5b93cbe6bc7625a1e9714aac98f5a3402&";
            checkmarkImg.alt = "Verified";
            checkmarkImg.style.width = "20px";
            checkmarkImg.style.height = "20px";
            profileVerified.textContent = ""; // Clear previous content
            profileVerified.appendChild(checkmarkImg);
        } else {
            profileVerified.textContent = "Not Verified";
        }

        document.getElementById("profilePopup").style.display = "block";
    }
}
