function encryptData(data) {
    const key = 'DEVELOPMENT_ENCRYPTION_KEY'; // Change this to a secure secret key
    return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
}

function decryptData(encryptedData) {
    const key = 'DEVELOPMENT_ENCRYPTION_KEY'; // Change this to the same secret key used for encryption
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

function readUserData() {
    const encryptedData = localStorage.getItem('user_data');
    return encryptedData ? decryptData(encryptedData) : [];
}

function writeUserData(data) {
    const encryptedData = encryptData(data);
    localStorage.setItem('user_data', encryptedData);
}

// Example usage
const userData = readUserData();
console.log('Read user data:', userData);

// Add new user
const newUser = { username: 'newuser', password: 'newpassword' };
userData.push(newUser);
writeUserData(userData);
console.log('User added:', newUser);
