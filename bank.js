// Bank.js javascript work

// diposit + withdraw + Amount=======All amount 
const dipositAmount = document.getElementById('dipositAmount');
const withdrawAmount = document.getElementById('withdrawAmount');
const totalAmount = document.getElementById('totalAmount');


// diposit and Withdraw amount
const dipositInput = document.getElementById('dipositInput');
const dipositButton = document.getElementById('dipositButton');

const withdrawInput = document.getElementById('withdrawInput');
const withdrawButton = document.getElementById('withdrawButton');

// dipositButton.addEventListener('click',function () {
//     // console.log('ok');
//     const dipoinput=dipositInput.value;
//     console.log(dipoinput);
// })

dipositButton.addEventListener('click', function () {
    const newdipoInString = dipositInput.value;
    const newDipoNum=parseFloat(newdipoInString);
    const preAmount = dipositAmount.innerText;
    const newAmount=parseFloat(preAmount);
    const newTotalAmount=newDipoNum+newAmount;

    dipositAmount.innerText = newTotalAmount;

    const preTotalAm=totalAmount.innerText;
    const newTotalAm=parseFloat(preTotalAm);
    console.log(typeof newTotalAm);
    const currTotalAmount=newTotalAm+newDipoNum;
    totalAmount.innerText=currTotalAmount;
    
    // console.log(typeof newDipoNum);


    // console.log(dipositAmount);
    // if (dipositAmount == 'number') {
    //     dipositAmount.innerText = newdipoIn;
    // } else {
    //     // alert('sorry')
    // }


    // 
    dipositInput.value = '';

})
// console.log("ok");