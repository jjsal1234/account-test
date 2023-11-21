const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    // Assuming you have a database to store user information
    // In a real application, use a proper database library and hashing for passwords

    const userData = req.body;
    console.log('Received sign-up request:', userData);

    // Dummy response for demonstration purposes
    res.json({ status: 'success', message: 'User signed up successfully' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
