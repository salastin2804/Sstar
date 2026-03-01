const form = document.getElementById('update-password-form');
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = firstnameInput.value.trim();
    const lastname = lastnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!firstname || !lastname || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }
    else if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }
    else if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return;
    }
    else {
        errorMessage.textContent = '';
        alert('Signup successful!');
        window.location.href = '../index.html';
    }
});
