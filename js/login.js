document.getElementById('login-submit').addEventListener('click',function (){

    //get user email

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    

    //get user password
     

    const passwordField = document.getElementById('user-password')

    const userPassword = passwordField.value;
    
   // check email & password
    if( userEmail == 'z@gmail.com' && userPassword == 'zz'){
        window.location.href ='banking.html'
    }

});

