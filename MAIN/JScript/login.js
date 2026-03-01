const form =document.querySelector('#form');
const username =document.querySelector('#username');
const password =document.querySelector('#password');

form.addEventListener('submit',(e)=>{
    if(!validateinput()){
        e.preventDefault();
    }
})
const form = document.querySelector('.login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop default submit

    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();

    if (usernameVal === "salastin" && passwordVal === "salas@1234") {
        alert("Login Successful 🎉");
        
        // Redirect to another page
        window.location.href = "home.html"; 
    } 
    else {
        alert("Invalid Username or Password ❌");
    }
});
/* function validateinput(){
    const usernameval = username.ariaValueMax.trim();
    const passwordval = password.ariaValueMax.trim();
    let success = true
    if(usernameval === ''){
        success = false;
        setError(username,'Username is required');
       
    }
    else{
        setSucces(username);
    }
    if(passwordval === ''){
        success = false;
        setError(password,'Password is required');
    }
    else if(passwordval.length < 8){
        success = false;
        setError(password,'Password must be at least 8 characters');
    }
    else{
        setSucces(password);
    }
    return success;

} */
function setError(element,message){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');

    errorElement.innertext= message;
    inputgroup.classlist.add('error');
    inputgroup.classlist.remove('success');
}
function setSucces(element){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');

    errorElement.innertext= message;
    inputgroup.classlist.add('success');
    inputgroup.classlist.remove('error');
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/;
        );
};


