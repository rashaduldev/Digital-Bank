const withdrawInput=document.getElementById('withdrawInput');
const withdrawButton=document.getElementById('withdrawButton');

withdrawButton.addEventListener('click',function () {
    const finalWipoInputAmount=inputTextElementById('withdrawInput');
    const finalwithdrawAmount=onlyTextElementById('withdrawAmount');
    const finalWithdrawTotalAmount=finalwithdrawAmount+finalWipoInputAmount;
    towElementThere('withdrawAmount',finalWithdrawTotalAmount);

    const finalAmount=onlyTextElementById('totalAmount');
    const finalTotalAmount=finalAmount-finalWipoInputAmount;
    towElementThere('totalAmount',finalTotalAmount);
    withdrawInput.value='';
})