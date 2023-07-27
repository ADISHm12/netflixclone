var emailError =document.getElementById('email-error');


function validateEmail(){
    var email=document.getElementById('contact-email').value;

    if(email.length==0){
        emailError.innerHTML='Email is required'
        return false;

    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email invalid'
        return false;
    }
    
}
var emailError2 =document.getElementById('email-error2');


function ValidateEmal(){
    var email2=document.getElementById('contact-email2').value;

    if(email2.length==0){
        emailError2.innerHTML='Email is required'
        return false;

    }
    if(!email2.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError2.innerHTML='Email invalid'
        return false;
    }
    
}
function signIn(){
    alert("enter your email")
}