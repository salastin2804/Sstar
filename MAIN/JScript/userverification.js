 const form = document.querySelector('.login-form');
const  phonenumber = document.querySelector('#phonenumber');

form.addEventListener('submit',(e)=> {
    if(!validateInputs()){
        e.preventDefault();
    }
});
function validateInputs(){
    const phonenumberValue = phonenumber.value.trim();
    if (phonenumberValue === ''){
        setError(phonenumber,'PhoneNumber is required');
    }else if (phonenumberValue.length < 10 || phonenumberValue.length > 10){
        setError(phonenumber,'PhoneNumber must be 10 digits');
    }else{
        setSuccess(phonenumber);
    }
    
    }
    function setError(element,message){
        const inputControl = element.parentElement;
        const errorelement= inputControl.querySelector('.error');
        errorelement.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
        
    }
    function setSuccess(element){
        const inputControl = element.parentElement;
        const errorelement= inputControl.querySelector('.error');
        errorelement.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    } 
 

