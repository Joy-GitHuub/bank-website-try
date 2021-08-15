// Deposit

// document.getElementById('submit-deposit').addEventListener('click', function () {
//      const depositMoney = document.getElementById('deposti-money');
//      const userDepositeMoney = depositMoney.value;
//      depositMoney.value = '';
//      console.log(userDepositeMoney);
//      const depositInput = document.getElementById('deposti-input');
//      const beforeAmountText = depositInput.innerText;
//      const beforeAmountMoney = parseFloat(beforeAmountText);
//      const userDepositeMoneyMy = parseFloat(userDepositeMoney)
//      const newDepositTotal = beforeAmountMoney + userDepositeMoneyMy;
//      depositInput.innerText = userDepositeMoney;
//      depositInput.innerText = newDepositTotal

// })


document.getElementById('submit-deposit').addEventListener('click', function () {


     // Deposit Money Input Button
     const depositMoney = document.getElementById('deposti-money');
     const userDepositeText = depositMoney.value;

     // H4 Tag inPut Maney SUM 
     const depositInput = document.getElementById('deposti-input');
     const beforeAmountText = depositInput.innerText;
     // String Convert to Numbers
     const userDepositeMoney = parseFloat(userDepositeText);
     const beforeAmountMoney = parseFloat(beforeAmountText);

     // Now SUM before and After Amount Numbers

     const totalDeposit = userDepositeMoney + beforeAmountMoney;

     // depositInput.innerText = userDepositeMoney;
     depositInput.innerText = totalDeposit;


     // update Balance 

     const totalBalance = document.getElementById('total-balance');
     const totalBalanceText = totalBalance.innerText;
     const totalBalanceMoney = parseFloat(totalBalanceText);
     const sumBalance = totalBalanceMoney + userDepositeMoney;
     totalBalance.innerText = sumBalance;

     depositMoney.value = '';
})


// Withdraw Money Input Button

// document.getElementById('withdraw-button').addEventListener('click', function () {
//      const withdrawInput = document.getElementById('withdraw-input');
//      const userWithdrawInputText = withdrawInput.value;
//      const userWithdrawInputMoney = parseFloat(userWithdrawInputText);
//      // h4 tag Input Withdraw
//      const totalWithdraw = document.getElementById('total-withdraw');
//      const totalWithdrawText = totalWithdraw.innerText;
//      const totalWithdrawMoney = parseFloat(totalWithdrawText);

//      const fullTotalWithdraw = userWithdrawInputMoney + totalWithdrawMoney;

//      // totalWithdraw.innerText = userWithdrawInputMoney;
//      totalWithdraw.innerText = fullTotalWithdraw;

//      // Cleaner Input Box...
//      withdrawInput.value = '';

//      const balanceTotal = document.getElementById('total-balance');
//      const previousBalanceText = balanceTotal.innerText;
//      const previousBalanceMoney = parseFloat(previousBalanceText);
//      const newBalanceTotal = previousBalanceMoney - userWithdrawInputMoney;

//      balanceTotal.innerText = newBalanceTotal;
// })

// Update balance My bank

document.getElementById('withdraw-button').addEventListener('click', function () {
     const withdrawInput = document.getElementById('withdraw-input');
     const withdrawInputText = withdrawInput.value;

     const withdrawInputMoney = parseFloat(withdrawInputText);

     const totalWithdraw = document.getElementById('total-withdraw');
     const previouswithdrawText = totalWithdraw.innerText;
     const previousewithdrawMoney = parseFloat(previouswithdrawText);

     const newWithdrawTotal = previousewithdrawMoney + withdrawInputMoney;

     totalWithdraw.innerText = newWithdrawTotal;


     const totalBalance = document.getElementById("total-balance");
     const totalBalanceText = totalBalance.innerText;
     const totalBalanceMoney = parseFloat(totalBalanceText);
     const newTotalBalance = totalBalanceMoney - withdrawInputMoney;
     totalBalance.innerText = newTotalBalance;
     withdrawInput.value = '';

})


