const allWithdrawAmount=document.getElementById('withdrawAmount');

const withdrawInput = document.getElementById('withdrawInput');
const withdrawButton = document.getElementById('withdrawButton');

withdrawButton.addEventListener('click', function () {
    const oldinputValue = withdrawInput.value;
    const newInputValue = parseFloat(oldinputValue);
    if (isNaN(newInputValue) || newInputValue<0) {
        alert('Please providee a positive number');
    } else {
        alert('good');
    }
});
