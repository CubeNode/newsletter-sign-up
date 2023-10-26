//let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//let regex2 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let form = document.forms[0];
let validEmail = document.getElementById('confirmation-email');

let email = document.forms[0].email.value = "";
let emailInput = document.getElementById('email');
let errorMessage = document.getElementById('error-message');

const subscribeContainer = document.getElementById('container');
const successMessage = document.getElementById('success');

//console.log(email);

/*let emailValidation = () => {
    let email = document.forms[0].email.value;
    let emailInput = document.getElementById('email');
    let errorMessage = document.getElementById('error-message');

    if(regex.test(email)) {
        console.log(email);
        console.log("true");
        return true;
    } else {
        /*console.log(email);
        console.log("false");
        emailInput.style.backgroundColor = "#ffe8e6";
        emailInput.style.color = "#ff527b"
        errorMessage.style.display = "inline";
        return false;
    }
}*/



let onValid = () => {
    //let subscribeContainer = document.getElementById('container');
    //let successMessage = document.getElementById('success');

    console.log('success');
    validEmail.textContent = form.email.value;
    subscribeContainer.style.display = "none";
    successMessage.style.display = "block";
    return true
}

let onInvalid = () => {
    
    //let email = document.forms[0].email.value;
    //let emailInput = document.getElementById('email');
    //let errorMessage = document.getElementById('error-message');

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

/*let emailValidation = () => {
    let email = document.forms[0].email.value;
    let emailInput = document.getElementById('email');
    let errorMessage = document.getElementById('error-message');

    if(email.toLowerCase().match(regex2)) {
        console.log(email);
        console.log("true");
        return true;
    } else {
        console.log(email);
        console.log("false");
        emailInput.style.backgroundColor = "#ffe8e6";
        emailInput.style.color = "#ff527b"
        errorMessage.style.display = "inline";
        return false;
    }
}*/

//emailValidation(email)