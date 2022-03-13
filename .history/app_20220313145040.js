var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirmPassword');

function showError(input) {
    input.parentElement.querySelector('small').innerText = input.validationMessage;
}

showError(username);