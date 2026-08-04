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
