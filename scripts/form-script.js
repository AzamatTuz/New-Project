// ########## VAR ##########

const signUp = document.getElementById('signUp');
const logIn = document.getElementById('logIn');
const animatedPart = document.getElementById('animatedPart');
const welcomeText = document.getElementById('welcomeText');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const logEyeCont = document.querySelectorAll('.logEyeCont');
const logOnEye = document.querySelectorAll('.logOnEye');
const logOffEye = document.querySelectorAll('.logOffEye');
const logPasswordInput = document.querySelectorAll('.logPasswordInput');
let isLoged = false;
let isChecked = false;

// // ########## ARRAYS ##########

const users = [
    { name: 'Azamat', email: 'tuzelbajazamat361@gmail.com', password: 'pass0011' }
];

// // ########## EVENTS ##########

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let signUserName = document.getElementById('signInNameInput').value.trim();
    let signUserEmail = document.getElementById('signInEmailInput').value.trim();
    let signUserPassword = document.getElementById('signInPasswordInput').value.trim();
    let signUserSecPassword = document.getElementById('signInCorrectPasswordInput').value.trim();
    let signErrorMessage = document.getElementById('signErrorMessage');

    if (signUserName == '' && signUserEmail == '' && signUserPassword == '' && signUserSecPassword == '') {
        signErrorMessage.textContent = 'Все поля должны быть заполнены!!!';
        signErrorMessage.style.display = 'block';

        setTimeout(() => {
            signErrorMessage.style.display = 'none';
        }, 5000);


    } else {

        if (signUserPassword != signUserSecPassword) {

            signErrorMessage.textContent = 'Пороли не совпадают!!!';
            signErrorMessage.style.display = 'block';

            setTimeout(() => {
                signErrorMessage.style.display = 'none';
            }, 5000);

        } else if (signUserPassword.length < 8) {

            signErrorMessage.textContent = 'Пороль должен иметь более 8 символов!!!';
            signErrorMessage.style.display = 'block';

            setTimeout(() => {
                signErrorMessage.style.display = 'none';
            }, 5000);

        } else {

            let checkUser = JSON.parse(localStorage.getItem('users'));

            if (checkUser) {
                checkUser.forEach(check => {

                    if (check.email == signUserEmail) {

                        signErrorMessage.textContent = 'Такая почта уже существует';
                        signErrorMessage.style.display = 'block';

                        setTimeout(() => {
                            signErrorMessage.style.display = 'none';
                        }, 5000);

                    } else {
                        users.push({ name: signUserName, email: signUserEmail, password: signUserPassword });
                        localStorage.setItem('users', JSON.stringify(users));

                        isLoged = true;
                        localStorage.setItem('isLoged', isLoged);

                        location.href = 'index.html';
                    };

                });

            } else {
                users.push({ name: signUserName, email: signUserEmail, password: signUserPassword });
                localStorage.setItem('users', JSON.stringify(users));

                isLoged = true;
                localStorage.setItem('isLoged', isLoged);

                location.href = 'index.html'
            };

        };

    };

});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let logUserName = document.getElementById('logInNameInput').value.trim();
    let logUserEmail = document.getElementById('logInEmailInput').value.trim();
    let logUserPassword = document.getElementById('logInPasswordInput').value.trim();
    let logErrorMessage = document.getElementById('logErrorMessage');

    if (logUserEmail == '' && logUserName == '' && logUserPassword == '') {
        logErrorMessage.textContent = 'Все поля должны быть заполнены!!!';
        logErrorMessage.style.display = 'block';

        setTimeout(() => {
            logErrorMessage.style.display = 'none';
        }, 5000);
    } else {
        let checkUser = JSON.parse(localStorage.getItem('users'));

        checkUser.forEach((user) => {

            if (user.email == logUserEmail && user.name == logUserName && user.password == logUserPassword) {
                isLoged = true;
                localStorage.setItem('isLoged', isLoged);

                location.href = 'index.html';
            } else {
                logErrorMessage.textContent = 'Такого пользователя не существует!!!';
                logErrorMessage.style.display = 'block';

                setTimeout(() => {
                    logErrorMessage.style.display = 'none';
                }, 5000);
            }
        })
    }

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

logEyeCont.forEach((eyes) => {
    eyes.addEventListener('click', () => {
        logOnEye.forEach((eye) => {
            eye.classList.toggle('logOnEye-after');
        });
        
        logOffEye.forEach((eye) => {
            eye.classList.toggle("logOffEye-after");
        });

        showPassword();
    });
})

function showPassword() {
    if (isChecked) {
        logPasswordInput.forEach((p) => {
            p.type = 'password';
            isChecked = false;
        })
    } else {
        logPasswordInput.forEach((p) => {
            p.type = 'text';
            isChecked = true;
        })
    }
}