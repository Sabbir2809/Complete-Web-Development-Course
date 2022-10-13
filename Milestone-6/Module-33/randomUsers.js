const loadUsers = () => {
  fetch('https://randomuser.me/api/?results=10')
  .then(res => res.json())
  .then(data => displayUsers(data.results))
}

const displayUsers = (users) => {
  const usersContainer = document.getElementById('users-container');
  for(const user of users){
    console.log(user)
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML = `
      <img src='${user.picture.large}'>
      <h3>Name: ${user['name']['first']}</h3>
      <p>Email: ${user.email}</p>
      <p>Gender: ${user.gender}</p>
    `;
    usersContainer.appendChild(userDiv);
  }
}

loadUsers();