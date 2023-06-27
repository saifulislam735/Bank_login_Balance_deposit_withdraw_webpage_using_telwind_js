document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-mail');
    const emailAddress = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (emailAddress === '123@gmail.com' && password === '12345') {
        window.location.href='bank.html'
    }
    else { 
        alert('Invalid Try.Enter your password or mail correctly')
    }


})