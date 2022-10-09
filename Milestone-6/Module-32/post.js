function loadPosts(){
  const url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
  .then((res) => (res.json()))
  .then((data) => displayPosts(data))
}

function displayPosts(posts){
  const postContainer = document.getElementById('posts-container');
  posts.map(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add(('post'))
    console.log(post);
    postDiv.innerHTML = `
      <h5>${post.userId}</h5>
      <h5>Post: ${post.title}</h5>
      <p>Post Description: ${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  })
}

loadPosts();
