let gamePage = JSON.parse(localStorage.getItem('gamePage'));
let arrOfNum = gamePage.length - 1;
let productImage = document.querySelector('.productImage');
let productName = document.querySelector('.productName');
let productPrice = document.querySelector('.productPrice');
let productMinString = document.querySelector('.productMinString');
let productString = document.querySelector('.productString');
// productImage = 

productImage.src = gamePage[arrOfNum].image;
productName.textContent = gamePage[arrOfNum].title;
productPrice.textContent = gamePage[arrOfNum].price + ' KZT';
productMinString.textContent = gamePage[arrOfNum].minString;
productString.textContent = gamePage[arrOfNum].string;
