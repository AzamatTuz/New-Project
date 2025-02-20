let gamesArr = JSON.parse(localStorage.getItem('likedGames'));
const cartNoText = document.getElementById('cartNoText');

let i = 0;

function displayCard() {

    gamesArr.forEach((game) => {

        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        const gameTitle = document.createElement('h1');
        const textCard = document.createElement('div');
        const stringText = document.createElement('p');
        let buttons = document.createElement('div');

        buttons.innerHTML = `<button class="removeBtn productBtn">X Remove</button>`;
        buttons.id = i
        i++;

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

        buttons.addEventListener('click', () => {
            removeCard(buttons.id);
            cardSection.removeChild(card);
            
            noText();
        })

    });

};

displayCard();

// function addToProductPage(gamesArr, gameArt) {
//     gamesArr.forEach((game) => {
//         if (game.articule == gameArt) {
//             productPage.push(game);
//             console.log(game);
//             location.href = 'main-products.html'
//             localStorage.setItem('gamePage', JSON.stringify(productPage));

//         }
//     })
// }

function removeCard(id) {
    gamesArr.splice(id, 1);
    
    localStorage.setItem('likedGames', JSON.stringify(gamesArr));
    console.log(gamesArr);
}

function noText() {
    if (gamesArr.length <= 0) {
        cartNoText.style.display = 'block'
    } else {
        cartNoText.style.display = 'none'
    }
}

noText();