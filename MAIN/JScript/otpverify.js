/* const form = document.getElementById('otp-form');
const otpInput = document.getElementById('otp-input');

form .addEventListener('submit',(e)=> {
    if (!validateotp()){
        e.preventDefault();
    }
})
function validateotp(){
    const otpvalue = otpInput.value.trim();
    if (otpvalue === ''){
        setError (otpInput,'OTP is required');
        return false;
    }
    else if (otpvalue.length !== 0){
        setError (otpInput,'OTP must be 6 digits');
        return false;
    }
    else{
        setSuccess(otpInput);
    }

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

const otp = generateOTP();
console.log("Generated OTP:", otp); */
const form = document.getElementById('otp-form');
const otpInput = document.getElementById('otp-input');
const otpDisplay = document.getElementById('otp-display');

// Generate OTP when page loads
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

const generatedOTP = generateOTP();
otpDisplay.innerText = generatedOTP; // Show OTP for testing

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateOTP()) {
        alert("OTP Verified Successfully ✅");
        // window.location.href = "newpassword.html";
    }
});

function validateOTP() {
    const otpvalue = otpInput.value.trim();

    if (otpvalue === '') {
        setError(otpInput, 'OTP is required');
        return false;
    }
    else if (otpvalue.length !== 6) {
        setError(otpInput, 'OTP must be 6 digits');
        return false;
    }
    else if (otpvalue !== generatedOTP.toString()) {
        setError(otpInput, 'Incorrect OTP');
        return false;
    }
    else {
        setSuccess(otpInput);
        return true;
    }
}

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorElement = inputControl.querySelector('.error');

    errorElement.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorElement = inputControl.querySelector('.error');

    errorElement.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}