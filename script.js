// script.js
function register() {
    // Get user input
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Specify the type of request and the URL
    xhr.open('POST', 'https://c00lsite.000webhostapp.com/accounts.php', true);

    // Set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Set up a function to handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Registration successful
                console.log(xhr.responseText);
            } else {
                // Registration failed
                console.error(xhr.responseText);
            }
        }
    };

    // Prepare the request parameters
    const params = `action=register&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

    // Send the request
    xhr.send(params);
}

function login() {
    // Get user input
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Specify the type of request and the URL
    xhr.open('POST', 'https://c00lsite.000webhostapp.com/accounts.php', true);

    // Set the request header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Set up a function to handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Check if the login was successful
                if (xhr.responseText === 'Login successful') {
                    // Redirect or perform any action for successful login
                    console.log('Login successful');
                } else {
                    // Login failed
                    console.error('Login failed');
                }
            } else {
                // Request failed
                console.error('Error during login request');
            }
        }
    };

    // Prepare the request parameters
    const params = `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

    // Send the request
    xhr.send(params);
}
