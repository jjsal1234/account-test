// script.js
function register() {
    // Get user input
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Specify the type of request and the URL
    xhr.open('POST', 'https://your-000webhost-url/accounts.php', true);

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
    // Similar logic for login as in the previous example
    // Implement this part based on your needs
}
