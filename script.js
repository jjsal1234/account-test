document.getElementById('hackButton').addEventListener('click', function () {
    hack();
});

function hack() {
    const consoleElement = document.querySelector('.console');
    consoleElement.innerHTML = '';

    writeToConsole('Initiating hacking sequence...');

    // Simulate hacking process
    connectToServer()
        .then(() => gainAccessToDatabase())
        .then(() => extractSensitiveInformation())
        .then(() => hackFirewall())
        .then(() => writeToConsole('Hacking successful! Data acquired.'))
        .catch((error) => writeToConsole(`Error: ${error}`));
}

function connectToServer() {
    return new Promise((resolve, reject) => {
        writeToConsole('Connecting to the server...');
        setTimeout(() => {
            const success = Math.random() < 0.8; // 80% success rate
            if (success) {
                resolve();
            } else {
                reject('Connection failed. Retry.');
            }
        }, 2000);
    });
}

function gainAccessToDatabase() {
    return new Promise((resolve, reject) => {
        writeToConsole('Gaining access to the database...');
        setTimeout(() => {
            const success = Math.random() < 0.8; // 80% success rate
            if (success) {
                resolve();
            } else {
                reject('Access denied. Retry.');
            }
        }, 2000);
    });
}

function extractSensitiveInformation() {
    return new Promise((resolve) => {
        writeToConsole('Extracting sensitive information...');
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

function hackFirewall() {
    return new Promise((resolve, reject) => {
        writeToConsole('Attempting to bypass firewall...');
        setTimeout(() => {
            const success = Math.random() < 0.7; // 70% success rate
            if (success) {
                resolve();
            } else {
                reject('Firewall breach detected. Aborting mission.');
            }
        }, 2000);
    });
}

function writeToConsole(message) {
    const consoleElement = document.querySelector('.console');
    consoleElement.innerHTML += `<p>${message}</p>`;
    consoleElement.scrollTop = consoleElement.scrollHeight;
}
