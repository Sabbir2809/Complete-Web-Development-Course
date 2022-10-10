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


function deletePosts(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}


function patchPost(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}


function createPost(){
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}