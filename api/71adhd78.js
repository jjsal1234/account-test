function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username is already registered
        if (users.some(user => user.username === username)) {
            alert('Username is already taken. Please choose a different one.');
        } else {
            // Register the new user
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful. You can now login.');
        }
    } else {
        alert('Please enter both username and password.');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username and password match
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful. Welcome, ' + username + '!');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } else {
        alert('Please enter both username and password.');
    }
}
