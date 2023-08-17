const dipositAmount = document.getElementById('dipositAmount');
const withdrawAmount = document.getElementById('withdrawAmount');
const totalAmount = document.getElementById('totalAmount');


// diposit and Withdraw amount
const dipositInput = document.getElementById('dipositInput');
const dipositButton = document.getElementById('dipositButton');


function inputTextElementById(inputId) {
    console.log(inputId);
    const icCollect=document.getElementById(inputId);
    const preValue=icCollect.value;
    const newValue=parseFloat(preValue);
   
    return newValue;
}

function onlyTextElementById(textId) {
    const element=document.getElementById(textId);
    const preAmount=element.innerText;
    const newAmount=parseFloat(preAmount);
    return newAmount;
}

function towElementThere(elementId,elementText) {
    const totatElement=document.getElementById(elementId);
    totatElement.innerText=elementText;
    return totatElement;
}

dipositButton.addEventListener('click',function () {
   const inpoAmount=inputTextElementById('dipositInput');
   const dipoAmount=onlyTextElementById('dipositAmount');
//    console.log(dipoAmount);
   const totalinpoandDipoAmount=inpoAmount+dipoAmount;

   towElementThere('dipositAmount',totalinpoandDipoAmount);

    const oldTotalAmount=onlyTextElementById('totalAmount');
    console.log(oldTotalAmount);
    const newTotalAmount=oldTotalAmount+dipoAmount;
    console.log(newTotalAmount);
    towElementThere('totalAmount',newTotalAmount);
})