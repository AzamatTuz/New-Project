let gamePage = JSON.parse(localStorage.getItem('gamePage'));
let arrOfNum = gamePage.length - 1;
let productImage = document.querySelector('.productImage');
let productName = document.querySelector('.productName');
let productPrice = document.querySelector('.productPrice');
let productMinString = document.querySelector('.productMinString');
let productString = document.querySelector('.productString');
let siteTitle = document.getElementById('siteTitle');
let buyButton = document.querySelector('#buyButton');
let cartGame = JSON.parse(localStorage.getItem('cartGames'));
let cartNumber = document.getElementById('cartNumber');
let backToPage = document.getElementById('backToPage');
cartNumber.textContent = cartGame.length

siteTitle.textContent = `Game / ${gamePage[arrOfNum].title}`
productImage.src = gamePage[arrOfNum].image;
productName.textContent = gamePage[arrOfNum].title;
productPrice.textContent = gamePage[arrOfNum].price + ' KZT';
productMinString.textContent = gamePage[arrOfNum].minString;
productString.textContent = gamePage[arrOfNum].string;

buyButton.addEventListener('click', () => {
    localStorage.setItem('orderName', gamePage[arrOfNum].title);
    localStorage.setItem('orderPrice', gamePage[arrOfNum].price + ' KZT');
});

backToPage.addEventListener('click', () => {
    location.href = localStorage.getItem('backToPage')
})