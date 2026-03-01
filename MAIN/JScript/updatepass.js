/* const form = document.getElementById('update-password-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        e.preventDefault();
        alert('Passwords do not match. Please try again.');
    }
    else if (passwordInput.value.length < 8) {
        e.preventDefault();
        alert('Password must be at least 8 characters long. Please try again.');
    }
    else {
        return true;
    }
       */
    const form = document.getElementById('update-password-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default form submission first

    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long. Please try again.');
        return;
    }

    // If validation passes, redirect to login page
    alert('Password updated successfully!');
    window.location.href = "../index.html";
});