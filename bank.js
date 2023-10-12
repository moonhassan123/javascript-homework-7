function getInputValue(inputFieldID) {
    const inputField = document.getElementById(inputFieldID)
    const inputFieldString = inputField.value;
    // console.log(depositFieldString);

    const inputFieldNumber = parseInt(inputFieldString);
    inputField.value = ' ';
    return inputFieldNumber;

}
function getInnerText(textFieldID) {
    const textField = document.getElementById(textFieldID)
    const textFieldTotalNumber = parseInt(textField.innerText);
    return textFieldTotalNumber;

}


document.getElementById('btn-deposit').addEventListener('click', function () {
    //get input value 
    const depositFieldValue = getInputValue('deposit-field');

    // get InnerText value
    const getInnerTextValue = getInnerText('deposit-total')

    // add input value and innerText
    const totalValue = depositFieldValue + getInnerTextValue;

    // get the text field
    const InnerTextField = document.getElementById('deposit-total')
    // set the value 
    InnerTextField.innerText = totalValue;

    const balanceValue = getInnerText('balance-total')
    const totalBalance = balanceValue + depositFieldValue

    const balanceField = document.getElementById('balance-total')
    balanceField.innerText = totalBalance;


})

// withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //  withdrawal input value
    const withdrawFieldValue = getInputValue('withdraw-field');

    // balance value 
    const balanceValue = getInnerText('balance-total');

    

    //  balance thake withdrawal field value ta - kora hoise 
    const newBalanceTotal = balanceValue - withdrawFieldValue;

    //  balance total 
    const balanceField = document.getElementById('balance-total');
    balanceField.innerText = newBalanceTotal;

    //  withdrawal total kora hoise 
    const withdrawalTotal = getInnerText('withdraw-total');

    //  withdrawal total thake add korsi  withdrawal field value
    const newWithdrawTotal = parseFloat(withdrawalTotal) + withdrawFieldValue;

    
    const withdrawField = document.getElementById('withdraw-total');
    withdrawField.innerText = newWithdrawTotal;
});






