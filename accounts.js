// Define user accounts
const accounts = [
    { username: "user1", password: "pass1", verified: true },
    { username: "user2", password: "pass2", verified: false },
    // Add more accounts as needed
];

// Function to find an account by username
function findAccount(username) {
    return accounts.find(account => account.username === username);
}

// Function to check if the provided username and password match an account
function checkCredentials(username, password) {
    const account = findAccount(username);
    return account && account.password === password;
}

// Function to get account information
function getAccountInfo(username) {
    const account = findAccount(username);
    return account ? { username: account.username, verified: account.verified } : null;
}
