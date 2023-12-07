document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = JSON.parse(localStorage.getItem('userData')) || [];

    // For simplicity, checking the login credentials in localStorage (not secure for real-world applications)
    const user = userData.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect to the home page or another page after successful login
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
});
