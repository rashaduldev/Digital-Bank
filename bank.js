// Bank.js javascript work

// diposit + withdraw + Amount=======All amount 
const dipositAmount=document.getElementById('dipositAmount');
const withdrawAmount=document.getElementById('withdrawAmount');
const totalAmount=document.getElementById('totalAmount');


// diposit and Withdraw amount
const dipositInput=document.getElementById('dipositInput');
const dipositButton=document.getElementById('dipositButton');

const withdrawInput=document.getElementById('withdrawInput');
const withdrawButton=document.getElementById('withdrawButton');

dipositButton.addEventListener('click',function () {  
    const dipoIn=dipositInput.innerText;
    dipositAmount.innerText=dipoIn;
    console.log(dipositAmount);
})
// console.log("ok");