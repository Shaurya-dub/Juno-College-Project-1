
// Variables
const itemClassName = ".carouselImage";
const items = document.querySelectorAll(".carouselImage");
const totalItems = items.length;
const slide = 0;
const moving = true;
const next = document.querySelector(".buttonNext");
const prev = document.querySelector(".buttonPrev");

// Functions

// for handling the "moving" variable

const disableInteraction = () => {
    moving = true;
    setTimeout(() => {
        moving = false
    },500);
}

// for assigning classes on the current/previous, and next images
const setClasses = () => {
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("active");
    items[2].classList.add("active");
    items[1].classList.add("next");
}

// for handling "next" image

const nextImage = () => {
    if (!moving) {
        if (slide === (totalItems - 1)) {
            slide = 0;
        } else {
            slide++;
        }
        moveCarouselTo(slide);
    }
}

// for handling "previous" image
const prevImage = () => {
    if (!moving) {
        if (slide === 0) {
            slide = (totalItems - 1);
        } else {
            slide--
        }
        moveCarouselTo(slide);
    }
}

// for moving the carousel

const moveCarouselTo = (slide) => {
if(!moving) {
disableInteraction();
const newPrev = slide - 1;
const newNext = slide + 1;
const oldPrev = slide - 2;
const oldNext = slide + 2;
if ((totalItems - 1) > 3) {
    if (newPrev <= 0) {
        oldPrev = (totalItems - 1);
    } else if (newNext >= (totalItems - 1)) {
        oldNext = 0;
    }
 if (slide === 0) {
    newPrev = (totalItems - 1);
    oldPrev = (totalItems - 2);
    oldNext = (slide + 1);
} else if (slide === (totalItems - 1)) {
    newPrev = (slide - 1);
    newNext = 0;
    oldNext = 1;

}
items[oldPrev].className = itemClassName;
items[oldNext].className = itemClassName;
items[newPrevious].className = itemClassName + " prev";
items[slide].className = itemClassName + " active";
items[newNext].className = itemClassName + " next";
}
}
}
const setEventListeners = () => {
next.addEventListener('click',nextImage);
prev.addEventListener('click',prevImage);
}
// init function
const initFunction = () => {
    setClasses();
    setEventListeners();
}
initFunction()
console.log('hi');