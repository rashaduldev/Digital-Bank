const allWithdrawAmount=document.getElementById('withdrawAmount');
const allTotalAmount = document.getElementById('totalAmount');

const withdrawInput = document.getElementById('withdrawInput');
const withdrawButton = document.getElementById('withdrawButton');

withdrawButton.addEventListener('click', function () {
    const oldinputValue = withdrawInput.value;
    const newInputValue = parseFloat(oldinputValue);
    if (isNaN(newInputValue) || newInputValue<0) {
        alert('Please providee a positive number');
    } else {
       const withdrawAmount=allWithdrawAmount.innerText;
    //  allWithdrawAmount.innerText=newInputValue;

    //  withdraw amonunt parse float
    const oldWithdrawAmount=allWithdrawAmount.innerText;
    const newWithdrawAmount=parseFloat(oldWithdrawAmount);
    // console.log(newWithdrawAmount);
    // console.log(newInputValue);
     const newpOld= newWithdrawAmount+newInputValue;
     allWithdrawAmount.innerText=newpOld;

     const preTotalAm=allTotalAmount.innerText;
     const newTotalAm=parseFloat(preTotalAm);
     // console.log(typeof newTotalAm);

     const currallTotalAmount=newTotalAm-newInputValue;
    //  const zeroLesAmount=currallTotalAmount;
     if (currallTotalAmount<0) {
        alert('Please select Balance Amount');
     } else {
        allTotalAmount.innerText=currallTotalAmount;
     }
     

   withdrawInput.value='';
    }
});
