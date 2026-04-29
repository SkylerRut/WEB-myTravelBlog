//import './bootstrap';


/*
    TODO:
    - rn login and logout are client side only, i need to make it more save and make it server side
        session based authentication,

*/

const header = document.getElementById('header');
if (header) fetch('../views/header.html')
    .then(res => res.text())
    .then(data => header.innerHTML = data);

const navbar = document.getElementById('navbar');
if (navbar) fetch('../views/navbar.html')
    .then(res => res.text())
    .then(data => {
        navbar.innerHTML = data;

        const logos = document.querySelectorAll('.logo-inject');
        if (logos.length > 0) fetch('../views/logo.html')
            .then(res => res.text())
            .then(data => logos.forEach(el => el.innerHTML = data));

        const loggedIn = localStorage.getItem('loggedIn');
        if (loggedIn === 'true') {
            document.getElementById('homeLink').style.display = 'flex';
            document.getElementById('aboutLink').style.display = 'flex';
            document.getElementById('editorLink').style.display = 'flex';
            document.getElementById('albumGalleryLink').style.display = 'flex';
            document.getElementById('photoGalleryLink').style.display = 'flex';
            document.getElementById('logoutBtn').style.display = 'flex';
            document.getElementById('loginBtn').style.display = 'none';
            document.getElementById('registerBtn').style.display = 'none';
        } else {
            document.getElementById('homeLink').style.display = 'flex';
            document.getElementById('aboutLink').style.display = 'flex';
            document.getElementById('editorLink').style.display = 'none';
            document.getElementById('albumGalleryLink').style.display = 'none';
            document.getElementById('photoGalleryLink').style.display = 'none';
            document.getElementById('logoutBtn').style.display = 'none';
            document.getElementById('loginBtn').style.display = 'flex';
            document.getElementById('registerBtn').style.display = 'flex';
        }

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('loggedIn');
                window.location.href = '../views/index.html';
            });
    }
});

const footer = document.getElementById('footer');
if (footer) fetch('../views/footer.html')
    .then(res => res.text())
    .then(data => { 
      footer.innerHTML = data;
      const logos = document.querySelectorAll('.logo-inject');
        if (logos.length > 0) fetch('../views/logo.html')
            .then(res => res.text())
            .then(data => logos.forEach(el => el.innerHTML = data));
    });