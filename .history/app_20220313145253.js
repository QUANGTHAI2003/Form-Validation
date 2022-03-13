var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirmPassword');

function showError(input) {
    let parent = document.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerHTML = message;
}

showError(username, 'Loi');