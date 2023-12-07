function register(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // You can use a simple text file to store user data
    // In a real-world scenario, use a server and database
    // Here, we'll just simulate storing data in a text file
    localStorage.setItem(username, password);
    alert('Registration successful!');

    // Clear the form
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function login(event) {
    event.preventDefault();
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Check if the username exists in localStorage
    if (localStorage.getItem(loginUsername) === loginPassword) {
        alert('Login successful!');
    } else {
        alert('Login failed. Please check your username and password.');
    }

    // Clear the form
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}
