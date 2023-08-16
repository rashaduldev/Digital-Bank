const dipositAmount = document.getElementById('dipositAmount');
const withdrawAmount = document.getElementById('withdrawAmount');
const totalAmount = document.getElementById('totalAmount');


// diposit and Withdraw amount
const dipositInput = document.getElementById('dipositInput');
const dipositButton = document.getElementById('dipositButton');

function inputTextElementById(inputId) {
    const icCollect=document.getElementById(inputId);
    const preValue=icCollect.value;
    const newValue=parseFloat(preValue);
    icCollect.value='';
    return newValue;
}

function onlyTextElementById(textId) {
    const element=document.getElementById(textId);
    const preAmount=element.innerText;
    const newAmount=parseFloat(preAmount);
    return newAmount;
}

function towElementThere(params) {
    
}

dipositButton.addEventListener('click',function () {
   const inpoAmount=inputTextElementById('dipositInput');
   const dipoAmount=onlyTextElementById('dipositAmount');
   const totalinpoandDipoAmount=inpoAmount+dipoAmount;
   console.log(totalinpoandDipoAmount);
   dipositAmount.innerText=totalinpoandDipoAmount;
})