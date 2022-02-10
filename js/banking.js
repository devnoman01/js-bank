// handle deposite button event
document.getElementById('deposite-submit').addEventListener('click', function(){
    //getting deposite amount
    const depositeInput = document.getElementById('deposite-amount');
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);

    // updating desposite amount
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeText = depositeTotal.innerText;
    const previousDeposite = parseFloat(previousDepositeText);
    const newDepositeTotal = previousDeposite + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal;

    // update current balance
    const currentBalanceAmount = document.getElementById('current-balance');
    const currentBalanceText = currentBalanceAmount.innerText;
    const previousCurrentBalance = parseFloat(currentBalanceText);
    const newCurrentBalance = previousCurrentBalance + newDepositeAmount;
    currentBalanceAmount.innerText = newCurrentBalance;

    // clear deposite input field
    depositeInput.value = '';
})