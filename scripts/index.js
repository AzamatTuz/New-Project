let randomImage = JSON.parse(localStorage.getItem('randomImage'));
let indexMain = document.querySelector('.animatedImages');
let randomProductImage = document.querySelectorAll('.randomProductImage');
let numPart = 0;

randomProductImage[0].src = randomImage[Math.floor(randomImage.length * Math.random())].image
randomProductImage[1].src = randomImage[Math.floor(randomImage.length * Math.random())].image
randomProductImage[2].src = randomImage[Math.floor(randomImage.length * Math.random())].image
randomProductImage[3].src = randomImage[Math.floor(randomImage.length * Math.random())].image

const int = setInterval(() => {
    if (numPart <= 1000*2) {
        numPart += 1000
        indexMain.scrollLeft += 1000
        
    } else {
        indexMain.scrollLeft -= 1000*4
        numPart = 0
    }
}, 5000);