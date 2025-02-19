const cardSection = document.getElementById('cardSection');
const productsSearch = document.querySelector('.productsSearch');
const categorySection = document.querySelectorAll('.categorySection');
let productPage = [];
let gamesArr = [];
let likedGames = [];
let cartGames = [];
let like = 0;
let i = 0;

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
            <button data-value="gspa${i}" class="productCartBtn productBtn"><img src="assets/images/cart.svg" alt=""> Cart</button>
            <button data-value="gspa${i}" class="productLikeBtn productBtn"><img src="assets/images/like.svg" alt=""> Like</button>
            <button data-value="gspa${i}" class="readMoreBtn productBtn">Read More</button>
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

        

        const categoryCard = document.createElement('div');
        const categoryImage = document.createElement('img');
        const categoryGameTitle = document.createElement('h1');
        const categoryTextCard = document.createElement('div');
        const categoryButtons = document.createElement('article');

        categoryButtons.innerHTML = `<button data-value="gspa${i}" class="readMoreBtn categoryProductBtn">Read More</button>`;

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

        }  else if (game.category == "action") {

            categorySection[3].appendChild(categoryCard);
        }


        i++
    });

    const productCartBtns = document.querySelectorAll('.productCartBtn');
    const readMoreBtn = document.querySelectorAll('.readMoreBtn');
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



    productCartBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            addToCart(gamesArr, e.target.dataset.value);
        })
    });

    readMoreBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            addToProductPage(gamesArr, e.target.dataset.value);
        })
    })

};

function addToProductPage(gamesArr, gameArt) {
    gamesArr.forEach((game) => {
        if (game.articule == gameArt) {
            productPage.push(game);
            console.log(game);
            location.href = 'main-products.html'
            localStorage.setItem('gamePage', JSON.stringify(productPage));

        }
    })
}

function addToCart(gamesArr, gameArt) {

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

// var cash = Number(money.match(/\d+/g));
