// login function
document.getElementById('login-button').addEventListener('click', function() {
    
    // collecting user email
    const userEmail = document.getElementById('user-email').value;
    // collecting user password
    const userPassword = document.getElementById('user-password').value;
    
    // validating input
    if(userEmail == 'admin@gmail.com' && userPassword == '1234'){
        window.location.href = 'banking.html';
    }
})
