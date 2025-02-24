let gamesArr = JSON.parse(localStorage.getItem('cartGames'));
const cartNoText = document.getElementById('cartNoText');
let totalPrice = document.getElementById('totalPrice');
let buyButton = document.getElementById('buyButton');
let cartNumber = document.getElementById('cartNumber');
let cartGame = JSON.parse(localStorage.getItem('cartGames'));
let cart = cartGame;
console.log(cart);


cartNumber.textContent = cartGame.length
let total = 0;

function displayCard() {

    gamesArr.forEach((game) => {

        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        const gameTitle = document.createElement('h1');
        const textCard = document.createElement('div');
        const priceText = document.createElement('p');
        let buttons = document.createElement('div');

        buttons.innerHTML = `<button class="removeBtn productBtn">X Remove</button>`;

        buttons.classList.add('prdctsBtns');
        textCard.classList.add('textCard');
        card.classList.add('gameCard');

        priceText.textContent = game.price + ' KZT'

        gameTitle.textContent = game.title;
        cardImage.src = game.image

        card.appendChild(cardImage);
        textCard.appendChild(gameTitle);
        textCard.appendChild(priceText)
        card.appendChild(textCard);
        card.appendChild(buttons)

        cardSection.appendChild(card);

        buttons.querySelector('.removeBtn').addEventListener('click', () => {
            gamesArr.splice(gamesArr.indexOf(game), 1);
            total -= game.price;

            localStorage.setItem('cartGames', JSON.stringify(gamesArr));
            console.log(gamesArr);
            cardSection.removeChild(card);

            cartNumber.textContent = gamesArr.length
            noText();
            calcTotalPrice();
        })

    });

};

displayCard();

function noText() {
    if (gamesArr) {
        if (gamesArr.length <= 0) {
            cartNoText.style.display = 'block'
        } else {
            cartNoText.style.display = 'none'
        }
    }
}

if (gamesArr) {
    gamesArr.forEach((game) => {
        total += game.price
    })
}

function calcTotalPrice() {

    totalPrice.textContent = total + ' KZT'
}

buyButton.addEventListener('click', () => {
    if (cart.length > 0) {
        localStorage.setItem('orderName', `${gamesArr.length} игр`);
        localStorage.setItem('orderPrice', total + ' KZT');
        window.open('takeOrder.html')
    }
});

calcTotalPrice();
noText();
