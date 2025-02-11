// ########## VAR ##########

const menuButton = document.getElementById('menuButton');
const hotbar = document.getElementById('hotbar');
const hotbarLinks = document.querySelectorAll('.hotbarLink');

// // ########## EVENTS ##########

menuButton.addEventListener('click', () => {
    hotbar.classList.toggle('hotbar-after');

    hotbarLinks.forEach((hotbarLink) => {
        hotbarLink.classList.toggle('hotbarLink-after')
    })
});


