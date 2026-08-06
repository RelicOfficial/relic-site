const hero = document.querySelector(".hero");
const heroShadow = document.querySelector(".hero-shadow");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        hero.classList.add("hero-move");
        heroShadow.classList.add("hero-shadow-move");
    } else {
        hero.classList.remove("hero-move");
        heroShadow.classList.remove("hero-shadow-move");
    }

});

const universBoxes = document.querySelectorAll(".univers-box");

window.addEventListener("scroll", () => {

    universBoxes.forEach(box => {

        const position = box.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }

    });

});

const cards = document.querySelectorAll(".card");

let currentIndex = 2;

function moveCards() {

    let left = (currentIndex - 1 + cards.length) % cards.length;
    let center = currentIndex;
    let right = (currentIndex + 1) % cards.length;

    cards.forEach((card, index) => {

        if (index === left) {
            card.className = "card card-left";
        }

        else if (index === center) {
            card.className = "card card-center";
        }

        else if (index === right) {
            card.className = "card card-right";
        }

        else {
            card.className = "card hidden";
        }

    });

    currentIndex = (currentIndex + 1) % cards.length;
}

moveCards();

setInterval(moveCards, 5000);

