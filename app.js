const hamburger = document.querySelector(".fa-bars");
const menu = document.querySelector('.mobileMenu');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('open');
})