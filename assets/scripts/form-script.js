// ########## VAR ##########

const signUp = document.getElementById('signUp');
const logIn = document.getElementById('logIn');
const animatedPart = document.getElementById('animatedPart');
const welcomeText = document.getElementById('welcomeText');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// // ########## ARRAYS ##########

const users = [
    { name: 'Azamat', email: 'tuzelbajazamat@gmail.com', password: 'pass0011' }
];

// // ########## EVENTS ##########

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let signUserName = document.getElementById('signInNameInput');
    let signUserEmail = document.getElementById('signInEmailInput');
    let signUserPassword = document.getElementById('signInPasswordInput');
    let signUserSecPassword = document.getElementById('signInCorrectPasswordInput');
})

signUp.addEventListener('click', () => {
    animatedPart.classList.toggle('animatedPart-after');
    setTimeout(() => {
        loginForm.style.opacity = 0;
        registerForm.style.opacity = 1;
        welcomeText.textContent = 'Welcome To!!'
    }, 500);
});

logIn.addEventListener('click', () => {
    animatedPart.classList.toggle('animatedPart-after');
    setTimeout(() => {
        loginForm.style.opacity = 1;
        registerForm.style.opacity = 0;
        welcomeText.textContent = 'Welcome Back!!'
    }, 500);
});

// // ########## FUNCTIONS ##########