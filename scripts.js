document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.querySelector('.container');

    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

    document.getElementById('signUpForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('signUpUsername').value;
        const email = document.getElementById('signUpEmail').value;
        const password = document.getElementById('signUpPassword').value;

        try {
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Sign Up Successful:', data);
                alert('Sign Up Successful');
            } else {
                console.error('Sign Up Failed:', data);
                alert('Sign Up Failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    document.getElementById('signInForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('signInEmail').value;
        const password = document.getElementById('signInPassword').value;

        try {
            const response = await fetch('http://localhost:5000/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Sign In Successful:', data);
                alert('Sign In Successful');
            } else {
                console.error('Sign In Failed:', data);
                alert('Sign In Failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});