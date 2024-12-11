const usersContainer = document.getElementById('users');
const postsContainer = document.getElementById('posts');
const todosContainer = document.getElementById('todos');

const usernames = ['adakittyxoxo', 'tincanoftuna', 'etaclee'];
const profilePictures = ['ada.png', 'tina.jpg', 'cate.png'];
const userIds = [1, 2, 3];

userIds.forEach((userId, index) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      const userCard = `
        <div class="user-card">
          <img src="${profilePictures[index]}" alt="${usernames[index]}'s profile picture">
          <h2>${usernames[index]}</h2>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>City:</strong> ${user.address.city}</p>
        </div>
      `;
      usersContainer.innerHTML += userCard;
    });

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        const postCard = `
          <div class="post-card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <p><strong>Posted by:</strong> ${usernames[index]}</p>
          </div>
        `;
        postsContainer.innerHTML += postCard;
      });
    });

  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(response => response.json())
    .then(todos => {
      todos.forEach(todo => {
        const todoCard = `
          <div class="todo-card">
            <h3>${todo.title}</h3>
            <p><strong>Status:</strong> ${todo.completed ? 'Completed' : 'Incomplete'}</p>
          </div>
        `;
        todosContainer.innerHTML += todoCard;
      });
    });
});
