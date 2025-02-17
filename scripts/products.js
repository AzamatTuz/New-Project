
const cardSection = document.getElementById('cardSection');
let gamesArr = [];

async function getData() {
    try {
        const response = await fetch('./scripts/games.json');
        const data = await response.json();
        
        gamesArr = data.games
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

        description.textContent = game.minString
        textCard.classList.add('textCard')
        card.classList.add('gameCard')
        gameTitle.textContent = game.title;
        cardImage.src = game.image

        card.appendChild(cardImage);
        textCard.appendChild(gameTitle);
        textCard.appendChild(description)
        card.appendChild(textCard);

        cardSection.appendChild(card);

        
    })
}
