const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".mobileMenu");
const menuHolder = document.querySelector(".mobileMenuHolder");

// Defining functions to open/close menu
const toggleHamburgerOpen = (e) => {
  e.stopImmediatePropagation();
  menuBtn.classList.toggle("move");
  menu.classList.toggle("open");
};

const closeHamburgerMenu = () => {
  menuBtn.classList.remove("move");
  menu.classList.remove("open");
};

// To close the menu if page is resized
window.addEventListener("resize", closeHamburgerMenu);

window.addEventListener("click", function (e) {
  if (
    e.target.className !== "menuBtn" &&
    e.target.className !== "menuBtnBurger" &&
    menu.className !== "open"
  ) {
    closeHamburgerMenu();
  }
});

// Event Listeners for when hamburger is clicked/pressed enter upon
menuBtn.addEventListener("click", toggleHamburgerOpen);

menuBtn.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    toggleHamburgerOpen();
  }
});
