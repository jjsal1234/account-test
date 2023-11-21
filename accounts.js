// Define user accounts
var accounts = [
    { username: "jjsal1234", password: "jacobsux1", verified: true, banned: false },
    { username: "Skeleton", password: "DfcKyt", verified: true, banned: false },
    // Add more accounts with the banned attribute
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
