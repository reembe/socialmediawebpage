const usernames = ['adakittyxoxo', 'tincanoftuna', 'etaclee'];
const profilePictures = [
  'ada.png', // adakittyxoxo
  'tina.jpg', // tincanoftuna
  'cate.png'  // ecatelee
];

const userIds = [1, 2, 3];

userIds.forEach((userId, index) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data for user ${userId}. Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const address = data.address;

      const addressHTML = `
        <div class="user-address">
          <img src="${profilePictures[index]}" alt="${usernames[index]}'s profile picture" class="profile-pic">
          <h2>${usernames[index]}</h2>
          <p><strong>Street:</strong> ${address.street}</p>
          <p><strong>Suite:</strong> ${address.suite}</p>
          <p><strong>City:</strong> ${address.city}</p>
          <p><strong>Zipcode:</strong> ${address.zipcode}</p>
          <p><strong>Latitude:</strong> ${address.geo.lat}</p>
          <p><strong>Longitude:</strong> ${address.geo.lng}</p>
          <hr>
        </div>
      `;

      document.getElementById('text').innerHTML += addressHTML;
    })
    .catch(error => console.error('Error:', error));
});
