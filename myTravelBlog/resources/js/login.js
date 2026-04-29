const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    const authenticated = authenticateUser(username, password);

    if (authenticated) {
        localStorage.setItem('loggedIn', 'true')
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

function authenticateUser(username, password) {
    if (username === 'admin' && password === '123') {
        return true;
    } else {
        return false;
    }
}