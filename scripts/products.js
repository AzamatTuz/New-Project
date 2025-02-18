const cartNum = document.getElementById('cartNum');
const cardSection = document.getElementById('cardSection');
let gamesArr = [];
let likedGames = [];
let cartGames = [];
let cart = localStorage.getItem('cartNum');
let like = 0;
let i = 0;

async function getData() {
    try {
        const response = await fetch('./scripts/games.json');
        const data = await response.json();

        gamesArr = data.games
        localStorage.setItem('randomImage', JSON.stringify(gamesArr));
        displayGames(gamesArr)

    } catch (error) {
        console.error('Data is not working', error);
    }
}

getData();


function displayGames(gamesArr) {

    gamesArr.forEach((game) => {

        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        const gameTitle = document.createElement('h1');
        const textCard = document.createElement('div');
        const description = document.createElement('p');
        const buttons = document.createElement('article');

        buttons.innerHTML = `
            <button data-value="gspa${i}" class="productCartBtn productBtn"><img src="assets/images/cart.svg" alt=""> Cart</button>
            <button data-value="gspa${i}" class="productLikeBtn productBtn"><img src="assets/images/like.svg" alt=""> Like</button>
        `

        buttons.classList.add('prdctsBtns')
        description.textContent = game.minString
        textCard.classList.add('textCard')
        card.classList.add('gameCard')
        gameTitle.textContent = game.title;
        cardImage.src = game.image

        card.appendChild(cardImage);
        textCard.appendChild(gameTitle);
        textCard.appendChild(description)
        card.appendChild(textCard);
        card.appendChild(buttons)

        cardSection.appendChild(card);

        i++


    });

    const productCartBtns = document.querySelectorAll('.productCartBtn');

    productCartBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            addToCart(gamesArr, e.target.dataset.value);
        })
    })
};


function addToCart(gamesArr, gameArt) {
    cart++;
    localStorage.setItem('cartNum', cart);
    cartNum.textContent = localStorage.getItem('cartNum');

    let cartSet = JSON.parse(localStorage.getItem('cartGames'));

    gamesArr.forEach((game) => {
        if (game.articule == gameArt) {

            if (cartSet) {
                cartSet.push(game);
                localStorage.setItem('cartGames', JSON.stringify(cartSet));
            } else {

                cartGames.push(game);
                localStorage.setItem('cartGames', JSON.stringify(cartGames));

            }
        }
    });
}
cartNum.textContent = localStorage.getItem('cartNum');
// var cash = Number(money.match(/\d+/g));
