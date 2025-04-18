let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.querySelector('button');
let form = document.querySelector('form')

function displayError(input, message){
    let formElement = input.parentElement;
    formElement.className = 'form-element error';
    let errorMessage = formElement.querySelector('h4');
    errorMessage.innerText = message;
}
function displaySuccess(input){
    let formElement = input.parentElement;
    formElement.className = 'form-element success';
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
form.addEventListener('submit', function (e){
    e.preventDefault();
    if (firstName.value === ''){
        displayError(firstName, 'First Name cannot be empty');
    }
    else{
        displaySuccess(firstName);
    }
    if (lastName.value === ''){
        displayError(lastName, 'Last Name cannot be empty');
    }
    else{
        displaySuccess(lastName);
    }
    if (email.value === ''){
        displayError(email, 'Email cannot be empty');
    }
    else if(!validateEmail(email.value)){
        email.value === '';
        displayError(email, 'Looks like this is not an email');
        let emailBox = email.parentElement;
        let emailInput = emailBox.querySelector('input');
        emailInput.placeholder = 'example@gmail.com';
        emailBox.id = 'emailBox';
    }
    else{
        displaySuccess(email);
    }
    if (password.value === ''){
        displayError(password, 'Password cannot be empty');
    }
    else{
        displaySuccess(password);
    }
})