const user_email=document.getElementById('user_email');
const user_password=document.getElementById('user_password');
const user_btn=document.getElementById('user_btn');


user_btn.addEventListener('click',function () {
    // console.log(user_btn);
    const em=user_email.value;
    const pass=user_password.value;
    // console.log(em);
    if (em==='r' && pass==='abcd') {
        window.location='bank.html';
    } else {
       alert('Wrong email or password');
    }
})




