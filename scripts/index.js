let cartGame = JSON.parse(localStorage.getItem('cartGames'));
let cartNumber = document.getElementById('cartNumber');

if (cartGame) {
    cartNumber.textContent = cartGame.length;
} else {
    cartNumber.textContent = 0;
}
