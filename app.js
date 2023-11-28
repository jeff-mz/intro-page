const links = document.querySelectorAll('.item');
const icons = document.querySelectorAll('.arrow-icon');
const submenus = document.querySelectorAll('.sub-items');
const closeMenu = document.querySelector('.close-btn');
const openMenu = document.querySelector('.open-btn');
const menuContainer = document.querySelector('.menu-items-container');
let flag = true;

// open and close hamburger menu
openMenu.addEventListener('click', () => {
    openMenu.style.display = 'none';
    menuContainer.style.display = 'flex';
});
closeMenu.addEventListener('click', () => {
    openMenu.style.display = 'block';
    menuContainer.style.display = 'none';
});

// display submenu
links.forEach(link => {
    link.addEventListener('click', (event) => {
        console.log(event.target);
        let index = event.target.dataset.index;
        event.target.classList.toggle('clicked');
        if (event.target.classList.contains('clicked')) {
            icons[index - 1].setAttribute('src', './images/icon-arrow-up.svg');
            submenus[index - 1].style.display = 'flex';
            console.log(submenus[index - 1]);
        } else {
            icons[index - 1].setAttribute('src', './images/icon-arrow-down.svg');
            submenus[index - 1].style.display = 'none';
        }
    })
});