document.getElementById('deposit-btn').addEventListener('click', function () {
    //step1:getting the deposit value
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);

    //getting the previous deposit value
    const depositSection = document.getElementById('deposit-section');
    const previousDepositString = depositSection.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    //summing the previous and new deposit
    const currentTotalDeposit = previousDeposit + newDeposit;

    //here setting the deposit amount in showing deposit section as inner text
    depositSection.innerText = currentTotalDeposit;

    //getting previous Balance
    const previousBalanceField = document.getElementById('balance-section');
    const previousBalanceString = previousBalanceField.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    //summing previous balance and new deposit 
    const TotalBalance = previousBalance + newDeposit;

    //setting the total balance to showing it the balance section
    previousBalanceField.innerText = TotalBalance;

    //Now clearing the deposit field
    depositField.value = ' ';


})