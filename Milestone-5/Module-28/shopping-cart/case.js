function updateCaseNumber(isIncrease){
  // Step-2: get the value inside the case number field (input field)
  const caseNumberField = document.getElementById('case-number-field');
  const caseNumberString = caseNumberField.value;
  // Step-3: convert the number to an integer
  const previousCaseNumber = parseInt(caseNumberString);
  // Step-4: calculate the new case number

  let newCaseNumber;

  if(isIncrease){
   newCaseNumber = previousCaseNumber + 1;
  }
  else{
    newCaseNumber = previousCaseNumber - 1;
  }

  // Step-5: set the value to the case number field
  caseNumberField.value = newCaseNumber;
}

// Step-1: Add Event Listener to the Case Plus button
document.getElementById('btn-case-plus').addEventListener('click', function () {
  updateCaseNumber(true);
});


// Step-1: Add Event Listener to the Case Minus button
document.getElementById('btn-case-minus').addEventListener('click', function(){
  updateCaseNumber(false);
});

