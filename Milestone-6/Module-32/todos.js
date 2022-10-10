function loeadTodos(){
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => (res.json()))
  .then((data) => displayTodos(data))
}

function displayTodos(todos){
  // get the container
  const todoContainer = document.getElementById('todo-container');

  for(const todo of todos){
    // create the child element
    const todoDiv = document.createElement('div');
    // set innerText or innerHTML
    todoDiv.innerHTML = `
      <p>User ID: ${todo.userId}</p>
      <h3>Title: ${todo.title}</h3>
      <p>Is Completed:  ${todo.completed === true ? 'Complete' : 'Not Complete'}</p>
    `;
    // appendChild
    todoContainer.appendChild(todoDiv);
  }
}

loeadTodos();