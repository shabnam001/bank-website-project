//step-1 add clicked event handler
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2 get email address in email input feild
    const emailFeild = document.getElementById('user-id');
    const email = emailFeild.value;
    //step-3:set password
    const passwordFeild = document.getElementById('user-password');
    const password = passwordFeild.value;
    console.log(email, password);
    
    if(email === 'abcd@gmail.com' && password ==='1234abcd'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
})