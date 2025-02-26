let gamePage = JSON.parse(localStorage.getItem('gamePage'));
let arrOfNum = gamePage.length - 1;
let productImage = document.querySelector('.productImage');
let productSecImage = document.querySelector('.productSecImage');
let productName = document.querySelector('.productName');
let productPrice = document.querySelector('.productPrice');
let productMinString = document.querySelector('.productMinString');
let productString = document.querySelector('.productString');
let siteTitle = document.getElementById('siteTitle');
let buyButton = document.querySelector('#buyButton');
let cartGame = JSON.parse(localStorage.getItem('cartGames'));
let cartNumber = document.getElementById('cartNumber');
let backToPage = document.getElementById('backToPage');
let errorGameMessage = document.getElementById('errorGameMessage');
let isLog = localStorage.getItem('isLoged');

if (cartGame) {
    cartNumber.textContent = cartGame.length
} else {
    cartNumber.textContent = 0
}

siteTitle.textContent = `Game / ${gamePage[arrOfNum].title}`
productImage.src = gamePage[arrOfNum].image;
productName.textContent = gamePage[arrOfNum].title;
productPrice.textContent = gamePage[arrOfNum].price + ' KZT';
productMinString.textContent = gamePage[arrOfNum].minString;
productString.textContent = gamePage[arrOfNum].string;
productSecImage.src = gamePage[arrOfNum].secondImage

backToPage.addEventListener('click', () => {
    location.href = localStorage.getItem('backToPage')
});

buyButton.addEventListener('click', () => {


    if (isLog == 'true') {
        localStorage.setItem('orderName', gamePage[arrOfNum].title);
        localStorage.setItem('orderPrice', gamePage[arrOfNum].price + ' KZT');
        window.open('takeOrder.html')
    } else {
        errorGameMessage.textContent = 'С начало авторизуйтесь';
        errorGameMessage.style.top = '20%';
        setTimeout(() => {
            errorGameMessage.style.top = '-20%';
        }, 3000)
    }


});