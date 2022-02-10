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

// handle withdraw button event
document.getElementById('withdraw-submit').addEventListener('click', function(){
    //getting withdraw amount
    const withdrawInput = document.getElementById('withdraw-amount');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    // updating withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousDeposite = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousDeposite + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update current balance
    const currentBalanceAmount = document.getElementById('current-balance');
    const currentBalanceText = currentBalanceAmount.innerText;
    const previousCurrentBalance = parseFloat(currentBalanceText);
    const newCurrentBalance = previousCurrentBalance - newWithdrawAmount;
    currentBalanceAmount.innerText = newCurrentBalance;

    // clear deposite input field
    withdrawInput.value = '';
})