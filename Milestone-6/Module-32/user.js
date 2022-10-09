function loadUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  const ul = document.getElementById('users-list');
  for(const user of data){
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
  }

}
