const cardSection = document.getElementById('cardSection');
const productsSearch = document.querySelector('.productsSearch');
const categorySection = document.querySelectorAll('.categorySection');
const cartNumber = document.getElementById('cartNumber');
let cartGame = JSON.parse(localStorage.getItem('cartGames'));
let backToPage = 'products.html'

let cart = 0;
let productPage = [];
let gamesArr = [];
let likedGames = [];
let cartGames = [];
let i = 0;
// Change
if (cartGame) {
    cartNumber.textContent = cartGame.length
} else {
    cartNumber.textContent = 0
}

async function getData() {
    try {
        const response = await fetch('./scripts/games.json');
        const data = await response.json();

        gamesArr = data.games;
        localStorage.setItem('randomImage', JSON.stringify(gamesArr));
        displayGames(gamesArr);

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
            <button class="productCartBtn productBtn"><img src="assets/images/cart.svg" alt=""> Cart</button>
            <button class="productLikeBtn productBtn"><img src="assets/images/like.svg" alt=""> Like</button>
            <button class="readMoreBtn productBtn">Read More</button>
        `;


        buttons.classList.add('prdctsBtns');
        description.textContent = game.minString;
        textCard.classList.add('textCard');
        card.classList.add('gameCard');
        gameTitle.textContent = game.title;
        cardImage.src = game.image;

        card.appendChild(cardImage);
        textCard.appendChild(gameTitle);
        textCard.appendChild(description);
        card.appendChild(textCard);
        card.appendChild(buttons);

        cardSection.appendChild(card);

        // ############# ADD TO CART FUNCTION #############

        buttons.querySelector('.productCartBtn').addEventListener('click', () => {
            let gameD = { title: game.title, price: game.price, image: game.image };
            let checkGame = JSON.parse(localStorage.getItem('cartGames'));
            console.log(gameD);

            if (checkGame) {
                checkGame.push(gameD);
                localStorage.setItem('cartGames', JSON.stringify(checkGame));
                console.log(!checkGame.includes(gameD));
                cartNumber.textContent = checkGame.length;
            } else {
                cartGames.push(gameD)
                localStorage.setItem('cartGames', JSON.stringify(cartGames));
            }
            
        });

        // ############# ADD TO FAVOURITES FUNCTION #############

        buttons.querySelector('.productLikeBtn').addEventListener('click', () => {
            let likeSet = JSON.parse(localStorage.getItem('likedGames'));

            if (likeSet) {
                likeSet.push(game);
                localStorage.setItem('likedGames', JSON.stringify(likeSet));
                console.log(!likeSet.includes(game));

            } else {
                likedGames.push(game)
                localStorage.setItem('likedGames', JSON.stringify(likedGames));
            }

        });

        // ############# GO TO THE GAME PAGE #############

        buttons.querySelector('.readMoreBtn').addEventListener('click', () => {
            productPage.push(game);
            console.log(game);
            location.href = 'main-products.html'
            localStorage.setItem('gamePage', JSON.stringify(productPage));
            localStorage.setItem('backToPage', backToPage);
        });

        // ############# SORT OF CATEGORY #############

        const categoryCard = document.createElement('div');
        const categoryImage = document.createElement('img');
        const categoryGameTitle = document.createElement('h1');
        const categoryTextCard = document.createElement('div');
        const categoryButtons = document.createElement('article');
                            
        categoryButtons.innerHTML = `<button class="readMoreBtn categoryProductBtn">Read More</button>`;

        categoryButtons.classList.add('prdctsBtns');
        categoryTextCard.classList.add('textCard');
        categoryCard.classList.add('categoryCard');

        categoryGameTitle.textContent = game.title;
        categoryImage.src = game.image;

        categoryCard.appendChild(categoryImage);
        categoryTextCard.appendChild(categoryGameTitle);
        categoryCard.appendChild(categoryTextCard);
        categoryCard.appendChild(categoryButtons);

        if (game.category == 'racing') {

            categorySection[0].appendChild(categoryCard);

        } else if (game.category == "indie") {

            categorySection[1].appendChild(categoryCard);

        } else if (game.category == "adventures") {

            categorySection[2].appendChild(categoryCard);

        } else if (game.category == "action") {

            categorySection[3].appendChild(categoryCard);
        }

        categoryButtons.querySelector('.readMoreBtn').addEventListener('click', () => {
            productPage.push(game);
            console.log(game);
            location.href = 'main-products.html'
            localStorage.setItem('gamePage', JSON.stringify(productPage));
            localStorage.setItem('backToPage', backToPage);
        });

        i++
    });

    const gameCards = document.querySelectorAll('.gameCard');

    productsSearch.addEventListener('input', () => {
        gameCards.forEach((card) => {
            const text = card.querySelector('h1');
            if (!text.textContent.toLowerCase().includes(productsSearch.value.toLowerCase())) {
                card.style.display = 'none';
            } else {
                card.style.display = 'flex';
            }
        });
    })

};