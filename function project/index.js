const dipositAmount = document.getElementById('dipositAmount');
const withdrawAmount = document.getElementById('withdrawAmount');
const totalAmount = document.getElementById('totalAmount');


// diposit and Withdraw amount
const dipositInput = document.getElementById('dipositInput');
const dipositButton = document.getElementById('dipositButton');

function inputTextElementById(inputId) {
    const icCollect=document.getElementById(inputId);
    const preValue=icCollect.value;
    const newValue=parseFloat(preValue)
    return newValue;
}

dipositButton.addEventListener('click',function () {
   const dipoAmount=inputTextElementById('dipositInput');
   console.log(dipoAmount);
})