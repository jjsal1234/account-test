// script.js
function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const account = accounts.find(acc => acc.username === usernameInput && acc.password === passwordInput);

    if (account) {
        if (account.verified) {
            showUserInfo(account);
        } else {
            alert('Account not verified. Please contact support.');
        }
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function showUserInfo(account) {
    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('userUsername').textContent = account.username;
    document.getElementById('userVerified').textContent = account.verified ? 'Yes' : 'No';
}
