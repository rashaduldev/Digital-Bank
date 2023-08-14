const user_email=document.getElementById('user_email');
const user_password=document.getElementById('user_password');
const user_btn=document.getElementById('user_btn');


user_btn.addEventListener('click',function () {
    // console.log(user_btn);
    const em=user_email.value;
    // console.log(em);
    if (em==='r@g.com' && user_password==='abcd') {
        console.log('vallied input');
    } else {
        console.log("invallied input");
    }
})