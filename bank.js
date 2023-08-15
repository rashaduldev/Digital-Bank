// Bank.js javascript work

// diposit + withdraw + Amount=======All amount 
const dipositAmount = document.getElementById('dipositAmount');
const withdrawAmount = document.getElementById('withdrawAmount');
const totalAmount = document.getElementById('totalAmount');


// diposit and Withdraw amount
const dipositInput = document.getElementById('dipositInput');
const dipositButton = document.getElementById('dipositButton');

// dipositButton.addEventListener('click',function () {
//     // console.log('ok');
//     const dipoinput=dipositInput.value;
//     console.log(dipoinput);
// })

dipositButton.addEventListener('click', function () {

    const newdipoInString = dipositInput.value;
    // console.log(newdipoInString);
    if (newdipoInString=='' || newdipoInString<'0') {
        alert('sorry');
    } else {

        const newDipoNum=parseFloat(newdipoInString);
        console.log(newDipoNum);
        if (!isNaN(newDipoNum)) {
            const preAmount = dipositAmount.innerText;
    
            const newAmount=parseFloat(preAmount);
            const newTotalAmount=newDipoNum+newAmount;
        
            dipositAmount.innerText = newTotalAmount;
        
            const preTotalAm=totalAmount.innerText;
            const newTotalAm=parseFloat(preTotalAm);
            // console.log(typeof newTotalAm);
            const currTotalAmount=newTotalAm+newDipoNum;
            totalAmount.innerText=currTotalAmount;
        
         
        
        
            
            dipositInput.value = '';
        }
        else{
            alert('string');
        }
        // console.log(newdipoInString);
       
    }
  

})
// console.log("ok");