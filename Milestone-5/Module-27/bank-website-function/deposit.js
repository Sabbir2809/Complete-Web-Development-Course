// Step-1: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){

  // step-2: get the deposit amount from the deposit input field
  const depositField = document.getElementById('deposit-field');
  const newDepositAmount = parseFloat(depositField.value);

  // step-3: get the current deposit total
  const depositTotalElement = document.getElementById('total-deposit');
  const previousDepositTotal = parseFloat(depositTotalElement.innerText);
  
  // step-4: add numbers to the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  // set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  // Step-5: get balance current total
  const balanceTotalElement = document.getElementById('total-blance');
  const previousBlanceTotal = parseFloat(balanceTotalElement.innerText);

  // step-6: calculate current total blance
  const currentBlanceTotal = previousBlanceTotal + newDepositAmount;
  // set the blance total
  balanceTotalElement.innerText = currentBlanceTotal;
  
  // step-7: clear the deposit field
  depositField.value = '';

})