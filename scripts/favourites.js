let gamesArr = JSON.parse(localStorage.getItem('likedGames'));
let cartNoText = document.getElementById('cartNoText');
let cartGame = JSON.parse(localStorage.getItem('cartGames'));
let cartNumber = document.getElementById('cartNumber');
let backToPage = 'liked.html'
let productPage = [];


if (cartGame) {
    cartNumber.textContent = cartGame.length
} else {
    cartNumber.textContent = 0;
}

let i = 0;

function displayCard() {

    gamesArr.forEach((game) => {

        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        const gameTitle = document.createElement('h1');
        const textCard = document.createElement('div');
        const stringText = document.createElement('p');
        let buttons = document.createElement('div');

        buttons.innerHTML = `
        <button class="readMoreBtn productBtn">Read More</button>
        <button class="removeBtn productBtn">X Remove</button>
        `;
        buttons.id = i
        i++;

        buttons.style.justifyContent = 'space-around';

        buttons.classList.add('prdctsBtns');
        textCard.classList.add('textCard');
        card.classList.add('gameCard');

        stringText.textContent = game.minString

        gameTitle.textContent = game.title;
        cardImage.src = game.image

        card.appendChild(cardImage);
        textCard.appendChild(gameTitle);
        textCard.appendChild(stringText)
        card.appendChild(textCard);
        card.appendChild(buttons)

        cardSection.appendChild(card);

        buttons.querySelector('.removeBtn').addEventListener('click', () => {
            gamesArr.splice(gamesArr.indexOf(game), 1);

            localStorage.setItem('likedGames', JSON.stringify(gamesArr));
            console.log(gamesArr);
            cardSection.removeChild(card);

            noText();
        });

        buttons.querySelector('.readMoreBtn').addEventListener('click', () => {
            productPage.push(game);
            localStorage.setItem('gamePage', JSON.stringify(productPage));
            localStorage.setItem('backToPage', backToPage);
            location.href = 'main-products.html';
        })

    });

};

displayCard();

function noText() {
    if (gamesArr.length <= 0) {
        cartNoText.style.display = 'block'
    } else {
        cartNoText.style.display = 'none'
    }
}

noText();