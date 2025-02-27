// ########## VAR ##########

const menuButton = document.getElementById('menuButton');
const hotbar = document.getElementById('hotbar');
const hotbarLinks = document.querySelectorAll('.hotbarLink');
const changeBtns = document.getElementById('changeBtns');
const profileBtns = document.getElementById('profileBtns');
let isLoged = localStorage.getItem('isLoged');

// // ########## EVENTS ##########

menuButton.addEventListener('click', () => {
    hotbar.classList.toggle('hotbar-after');

    hotbarLinks.forEach((hotbarLink) => {
        hotbarLink.classList.toggle('hotbarLink-after')
    })
});

window.addEventListener('scroll', () => {

    if (scrollY > 150) {
        if (window.innerWidth <= 428) {
            arrowUp.style.left = '88%';
            
        } else {
            arrowUp.style.left = '93%'
        }
        
    } else {
        arrowUp.style.left = '120%'
    }
})

// // ########## FUNCTIONS ##########

if (isLoged == 'true') {
    changeBtns.style.display = 'none';
    profileBtns.style.display = 'flex';
} else {
    changeBtns.style.display = 'flex';
    profileBtns.style.display = 'none';
}