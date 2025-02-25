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

registerForm.addEventListener('submit', (e) => { // // ########## Register to login form ##########
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
        // // ########## Check passwords ##########
        if (signUserPassword != signUserSecPassword) {

            signErrorMessage.textContent = 'Пороли не совпадают!!!';
            signErrorMessage.style.display = 'block';

            setTimeout(() => {
                signErrorMessage.style.display = 'none';
            }, 5000);

        } else if (signUserPassword.length < 8) { // // ########## Check password length ##########

            signErrorMessage.textContent = 'Пороль должен иметь более 8 символов!!!';
            signErrorMessage.style.display = 'block';

            setTimeout(() => {
                signErrorMessage.style.display = 'none';
            }, 5000);

        } else {

            let checkUser = JSON.parse(localStorage.getItem('users'));

            if (checkUser) { // // ########## Check user ##########

                checkUsers(signUserEmail, signUserName, signUserPassword, signErrorMessage);

            } else {
                users.push({ name: signUserName, email: signUserEmail, password: signUserPassword });
                localStorage.setItem('users', JSON.stringify(users));

                isLoged = true;
                localStorage.setItem('isLoged', isLoged);

                localStorage.setItem('userName', signUserName);
                localStorage.setItem('userEmail', signUserEmail);

                location.href = 'index.html'
            };

        };

    };

});

function checkUsers(signUserEmail, signUserName, signUserPassword, signErrorMessage) {
    let checkUser = JSON.parse(localStorage.getItem('users'));

    if (checkUser) {
        for (let i = 0; i < checkUser.length; i++) {

            if (checkUser[i].email == signUserEmail) {

                signErrorMessage.textContent = 'Такая почта уже существует';
                signErrorMessage.style.display = 'block';

                setTimeout(() => {
                    signErrorMessage.style.display = 'none';
                }, 5000);

                return;

            }
        }


        checkUser.push({ name: signUserName, email: signUserEmail, password: signUserPassword });
        localStorage.setItem('users', JSON.stringify(checkUser));

        isLoged = true;
        localStorage.setItem('isLoged', isLoged);

        localStorage.setItem('userName', signUserName);
        localStorage.setItem('userEmail', signUserEmail);

        console.log(JSON.parse(localStorage.getItem('users')));

        location.href = 'index.html';

        return;
    }



}

loginForm.addEventListener('submit', (e) => { // // ########## Submit to login form ##########
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

        if (checkUser) {
            checkLogUser(checkUser, logUserEmail, logUserName, logUserPassword, logErrorMessage)
        } else {
            logErrorMessage.textContent = 'Такого пользователя не существует!!!';
            logErrorMessage.style.display = 'block';

            setTimeout(() => {
                logErrorMessage.style.display = 'none';
            }, 5000);
        }
    }

})

signUp.addEventListener('click', () => {
    if (window.innerWidth <= 428) {
        loginForm.style.opacity = 0;
        registerForm.style.opacity = 1;
        welcomeText.textContent = 'Welcome To!!'
        animatedPart.classList.toggle('animatedPart-after');
        setTimeout(() => {
            loginForm.style.display = 'none';
            registerForm.style.display = 'flex';
            animatedPart.classList.toggle('animatedPart-after');
        }, 1500);
    } else {
        animatedPart.classList.toggle('animatedPart-after');
        setTimeout(() => {
            loginForm.style.opacity = 0;
            registerForm.style.opacity = 1;
            welcomeText.textContent = 'Welcome To!!'
        }, 500);
    }
});

logIn.addEventListener('click', () => {
    if (window.innerWidth <= 428) {
        loginForm.style.opacity = 1;
        registerForm.style.opacity = 0;
        welcomeText.textContent = 'Welcome Back!!'
        animatedPart.classList.toggle('animatedPart-after');
        setTimeout(() => {
            loginForm.style.display = 'flex';
            registerForm.style.display = 'none';
            animatedPart.classList.toggle('animatedPart-after');
        }, 1500);
    } else {
        animatedPart.classList.toggle('animatedPart-after');
        setTimeout(() => {
            loginForm.style.opacity = 1;
            registerForm.style.opacity = 0;
            welcomeText.textContent = 'Welcome Back!!'
        }, 500);
    }
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

function checkLogUser(checkUser, logUserEmail, logUserName, logUserPassword, logErrorMessage) {
    
    for(let i = 0; i < checkUser.length; i++) {
        if (checkUser[i].email == logUserEmail && checkUser[i].name == logUserName) {
            if (checkUser[i].password == logUserPassword) {
                isLoged = true;
                localStorage.setItem('isLoged', isLoged);
    
                localStorage.setItem('userName', logUserName);
                localStorage.setItem('userEmail', logUserEmail);
    
                console.log('loged');
                location.href = 'index.html';
                return;
                
            } else {
                logErrorMessage.textContent = 'Неверный пороль!!!';
                logErrorMessage.style.display = 'block';
    
                setTimeout(() => {
                    logErrorMessage.style.display = 'none';
                }, 5000);

                return;
            }
        }
    }

    

    logErrorMessage.textContent = 'Такого пользователя не существует!!!';
    logErrorMessage.style.display = 'block';

    setTimeout(() => {
        logErrorMessage.style.display = 'none';
    }, 5000);

    console.log('tttt');
    
    return;
}