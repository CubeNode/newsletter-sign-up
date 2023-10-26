
let form = document.forms[0];
let validEmail = document.getElementById('confirmation-email');

let email = document.forms[0].email.value = "";
let emailInput = document.getElementById('email');
let errorMessage = document.getElementById('error-message');

const subscribeContainer = document.getElementById('container');
const successMessage = document.getElementById('success');

let onValid = () => {
    console.log('success');
    validEmail.textContent = form.email.value;
    subscribeContainer.style.display = "none";
    successMessage.style.display = "block";
    return true
}

let onInvalid = () => {
    console.log(email);
    console.log("false");
    emailInput.style.backgroundColor = "#ffe8e6";
    emailInput.style.color = "#ff527b"
    errorMessage.style.display = "inline";
    return false;
}

let dismiss = () => {
    subscribeContainer.style.display = "flex";
    successMessage.style.display = "none";
    form.email.value = ""
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form.email.value)
    if(form.email.value != "") {
        onValid()
    } else {
        return
    }
    
});
