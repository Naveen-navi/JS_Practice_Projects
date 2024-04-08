const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const msgError = document.getElementById("msg-error");
const submitError = document.getElementById("submit-error");


function validateName(){
    const name = document.getElementById("conatct-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required"
        return false;
    }
    if(!name.match(/^[a-zA-Z]*\s{1}[a-zA-Z ]*$/)){
        nameError.innerHTML = "Full name is required";
        return false
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    const ph = document.getElementById("contact-phone").value;
    if(ph.innerHTML == 0){
        phoneError.innerHTML = 'Phone Number is required';
        return false;
    }
    if(ph.length !== 10){
        phoneError.innerHTML = "Enter 10 digit Number";
        return false
    }
    if(!ph.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Enter the digits only';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatemail(){
    const email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Check the email format";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    const message = document.getElementById("contact-message").value;
    const required = 30;
    let left = required - message.length;

    if(left > 0){
        msgError.innerHTML = left + ' more characters required';
        return false;
    }

    msgError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validatemail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please Check all the feilds again";
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    }
}