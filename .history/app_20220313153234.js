var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    listInput.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} required`);
        } else {
            showSuccess(input);
        }
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkEmptyError([username, email, password, confirmPassword]);
})
