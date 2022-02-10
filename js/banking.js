// common function for input value processing
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clearing input field
    inputField.value = '';
    return amountValue;
}

// common function to get current balance
function getCurrentBalance(){
    const currentBalanceAmount = document.getElementById('current-balance');
    const currentBalanceText = currentBalanceAmount.innerText;
    const previousCurrentBalance = parseFloat(currentBalanceText);
    return previousCurrentBalance;
}

// calculate and update total deposite and withdraw
function updateTotalField(totalField, inputAmount){
    const totalElement = document.getElementById(totalField);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const newTotal = previousTotal+inputAmount;
    const balanceAmount = document.getElementById(totalField);
    balanceAmount.innerText = newTotal;
}

//  set current balance after deposite and withdraw
function setBalance(amount){
    const balanceAmount = document.getElementById('current-balance');
    balanceAmount.innerText = amount;
}

// handle deposite button event
document.getElementById('deposite-submit').addEventListener('click', function(){
    //getting deposite amount
    const depositeInput = getInputValue('deposite-amount');

    // updating desposite amount
    updateTotalField('deposite-total', depositeInput);

    // update current balance
    const currentBalance = getCurrentBalance();
    const newCurrentBalance = currentBalance + depositeInput;
    setBalance(newCurrentBalance);

})

// handle withdraw button event
document.getElementById('withdraw-submit').addEventListener('click', function(){
    //getting withdraw amount
    const withdrawInput = getInputValue('withdraw-amount');

    // updating withdraw amount
    updateTotalField('withdraw-total', withdrawInput);

    // update current balance
    const currentBalance = getCurrentBalance();
    const newCurrentBalance = currentBalance - withdrawInput;
    setBalance(newCurrentBalance);

})

// logout function
document.getElementById('logout-button').addEventListener('click', function() {
    window.location.href = 'index.html';
})