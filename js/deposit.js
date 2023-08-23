//step-1:
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2:
    const depositeField = document.getElementById('deposite-field');
    const newDepositAmountString = depositeField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //step-3:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //step-4:
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    //step-5:balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //step-6: adding current balance total and new deposit amount
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-7:clear deposit field 
    depositeField.value = '';
})