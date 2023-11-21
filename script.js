// script.js
function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const account = accounts.find(acc => acc.username === usernameInput && acc.password === passwordInput);

    if (account) {
        if (account.verified) {
            alert('Login successful. Welcome!');
        } else {
            alert('Account not verified. Please contact support.');
        }
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
