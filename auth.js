// Check if the user is signed in
const isSignedIn = localStorage.getItem('isSignedIn') === 'true';

// Update the navigation bar based on the user's sign-in status
const navbar = document.getElementById('navbar');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');

if (isSignedIn) {
    // If signed in, hide the register and login buttons, show the logout button
    registerBtn.style.display = 'none';
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
    // Customize the navigation bar style
    navbar.style.backgroundColor = '#000'; // Black background color
} else {
    // If not signed in, show the register and login buttons, hide the logout button
    registerBtn.style.display = 'block';
    loginBtn.style.display = 'block';
    logoutBtn.style.display = 'none';
}
