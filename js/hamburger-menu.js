var hamburgerMenuLink = document.querySelector('#hamburger-menu-link');
var hamburgerMenu = document.querySelector('#hamburger-menu');
var closeMenu = document.querySelector('#close-menu');

hamburgerMenuLink.addEventListener('click', function () {
    hamburgerMenu.style.display = 'block';
})

closeMenu.addEventListener('click', function () {
    hamburgerMenu.style.display = 'none';
})