document.getElementById('signupForm').onsubmit = e => {
    e.preventDefault();
    alert('Account successfully created!');
};
document.getElementById('loginForm').onsubmit = e => {
    e.preventDefault();
    alert('Successfully logged in!');
};