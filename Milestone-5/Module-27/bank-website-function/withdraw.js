// step-1: add event hanler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
  // Step-2: get the withdraw amount from the withdraw input field
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmount = parseFloat(withdrawField.value);

  // Step-7: clear the input filed
  withdrawField.value = '';

  if(isNaN(newWithdrawAmount)){
    alert("Please Provie a Valid Number");
    return;
  }

  // Step-3: 
  const withdrawTotalElement = document.getElementById('total-withdraw');
  const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);


  // Step-5:
  const blanceTotalElement = document.getElementById('total-blance');
  const previousBlanceTotal = parseFloat(blanceTotalElement.innerText);


  if(newWithdrawAmount > previousBlanceTotal){
    alert("Bapp er bank e Taka nei");
    return;
  }

  // Step-4: Calculate total withdraw amount
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // Step-6:
  const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
  blanceTotalElement.innerText = newBlanceTotal;

})