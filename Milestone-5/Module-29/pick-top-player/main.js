// Select Player Name for Button Click
function selectPlayerName(player) {
  let playerName = document.getElementById(player);
  let name = playerName.innerText;
  
  let li = document.createElement('li');
  let ul = document.getElementById('list-item');

  ul.appendChild(li);
  li.innerText = name;
}

document.getElementById('select-btn1').addEventListener('click', function () {
  selectPlayerName('neymar');
  
});
document.getElementById('select-btn2').addEventListener('click', function () {
  selectPlayerName('messi');
});
document.getElementById('select-btn3').addEventListener('click', function () {
  selectPlayerName('mbappe');
});
document.getElementById('select-btn4').addEventListener('click', function () {
  selectPlayerName('vitor');
});
document.getElementById('select-btn5').addEventListener('click', function () {
  selectPlayerName('ramos');
});
document.getElementById('select-btn6').addEventListener('click', function () {
  selectPlayerName('renato');
});

// Per Player Budget Function
function playerBudget() {
  let input = document.getElementById('per-player');
  let inputValue = input.value;

  let playerExpenses = inputValue * 5;
  let expenses = document.getElementById('player-expenses');

  return (expenses.innerText = playerExpenses);
}

// Player Budget Return
document.getElementById('calculate-player-budget').addEventListener('click', function () {
  let budget = playerBudget();
  console.log(budget);
});

// Coach & Manager Budget Function
function coachManagerBudget() {
  let manager = document.getElementById('manager');
  let managerBudgetString = manager.value;
  let managerBudget = parseInt(managerBudgetString);

  let coach = document.getElementById('coach');
  let coachBudgetString = coach.value;
  let coachBudget = parseInt(coachBudgetString);

  let coachManagerBudget = managerBudget + coachBudget;

  return coachManagerBudget;
}

// Final Budget Return
document.getElementById('calculate-final-budget').addEventListener('click', function () {
  let playerBudgetTotal = playerBudget();
  let couachManagerBudgetTotal = coachManagerBudget();

  let finalBudget = document.getElementById('final-budget');
  finalBudget.innerText = playerBudgetTotal + couachManagerBudgetTotal;
});
