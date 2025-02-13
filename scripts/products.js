
async function getData() {
    try {
        const response = await fetch('./scripts/games.json');
        const data = await response.json();

        console.log(data);
        
    } catch (error) {
        console.error('Data is not working', error);
    }
}

getData();