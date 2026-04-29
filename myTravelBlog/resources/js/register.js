/*TODO: 
- check if username exists in db
- check if email exists in db
- save user to db here
- add password requirements (length, special characters, etc.)
- add email format validation
- add username format validation (no special characters, etc.)
*/

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const email = document.querySelector('#email').value;

    registerUser(username, password, email);
});

function registerUser(username, password, email) {
    if (checkEmailExists(email)) {
        alert('Account with this email already exists. Please use a different email.');
        return;
    }

    if (checkUsernameExists(username)) {
        alert('Account with this username already exists. Please use a different username.');
        return;
    }

    alert('Register successful!');
    window.location.href = 'index.html';
}

function checkEmailExists(email) {
    if (email === 'existing@example.com') return true;
    return false;
}

function checkUsernameExists(username) {
    if (username === 'admin') return true;
    return false;
}