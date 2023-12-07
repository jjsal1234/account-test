document.getElementById('hackButton').addEventListener('click', function () {
    hack();
});

function hack() {
    const consoleElement = document.querySelector('.console');
    consoleElement.innerHTML = '';

    // Simulate password cracking
    crackPassword()
        .then(() => {
            writeToConsole('Connecting to the server...');
            setTimeout(() => {
                writeToConsole('Gaining access to the database...');
                setTimeout(() => {
                    writeToConsole('Extracting sensitive information...');
                    setTimeout(() => {
                        writeToConsole('Hacking successful! Data acquired.');
                    }, 2000);
                }, 2000);
            }, 2000);
        })
        .catch(() => {
            writeToConsole('Access denied. Incorrect password.');
        });
}

function crackPassword() {
    return new Promise((resolve, reject) => {
        const targetPassword = generateRandomPassword();
        const attempts = 3;

        // Prompt user for password input
        const enteredPassword = prompt('Enter the password:');

        // Simulate password checking
        setTimeout(() => {
            if (enteredPassword === targetPassword) {
                writeToConsole('Password accepted. Proceeding to the next step...');
                resolve();
            } else {
                writeToConsole(`Incorrect password. ${attempts} attempts remaining...`);
                if (attempts > 1) {
                    crackPassword().then(resolve).catch(reject);
                } else {
                    reject();
                }
            }
        }, 1000);
    });
}

function generateRandomPassword() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    return password;
}

function writeToConsole(message) {
    const consoleElement = document.querySelector('.console');
    consoleElement.innerHTML += `<p>${message}</p>`;
    consoleElement.scrollTop = consoleElement.scrollHeight;
}
