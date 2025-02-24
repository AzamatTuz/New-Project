let userName = localStorage.getItem('userName');
let userEmail = localStorage.getItem('userEmail');
let userDisplayName = document.getElementById('userDisplayName');
let userDisplayEmail = document.getElementById('userDisplayEmail');
let Loged = localStorage.getItem('isLoged');
let logOutProfile = document.getElementById('logOutProfile');
let cartGame = JSON.parse(localStorage.getItem('cartGames'));
let cartNumber = document.getElementById('cartNumber');
cartNumber.textContent = cartGame.length

userDisplayName.textContent = userName;
userDisplayEmail.textContent = userEmail;

logOutProfile.addEventListener('click', () => {
    Loged = false;
    localStorage.setItem('isLoged', Loged);

    location.href = 'index.html'
})