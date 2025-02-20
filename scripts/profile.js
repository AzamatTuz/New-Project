let userName = localStorage.getItem('userName');
let userEmail = localStorage.getItem('userEmail');
let userDisplayName = document.getElementById('userDisplayName');
let userDisplayEmail = document.getElementById('userDisplayEmail');
let Loged = localStorage.getItem('isLoged');
let logOutProfile = document.getElementById('logOutProfile');

userDisplayName.textContent = userName;
userDisplayEmail.textContent = userEmail;

logOutProfile.addEventListener('click', () => {
    Loged = false;
    localStorage.setItem('isLoged', Loged);

    location.href = 'index.html'
})