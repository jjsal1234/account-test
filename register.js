document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For simplicity, storing user data in localStorage (not secure for real-world applications)
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    userData.push({ username, password });
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Registration successful!');
    window.location.href = 'login.html';
});
