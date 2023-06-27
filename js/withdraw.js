document.getElementById('withdraw-btn').addEventListener('click', function () {
    //step1:getting the deposit value//Input Withdraw
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);

    //setting the withdraw amount to the withdraw section//Get The Display Withdraw
    const withdrawSection = document.getElementById('withdraw-section');
    const withdrawSectionValue = withdrawSection.innerText;
    const previousWithdrawAmount = parseFloat(withdrawSectionValue);

    //summing previous withdraw with new withdraw//Withdraw calculation
    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    
    //setting the total withdraw amount//Display Withdraw Amount
    withdrawSection.innerText = totalWithdrawAmount;

    //getting the previous balance
    const previousBalanceField = document.getElementById('balance-section');
    const previousBalanceString = previousBalanceField.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    //calculating new balance; previous balance - new withdraw amount
    const TotalBalance = previousBalance - newWithdrawAmount;

    //setting the total balance //Display the total balance
    previousBalanceField.innerText = TotalBalance;

    withdrawField.value = ' ';
})