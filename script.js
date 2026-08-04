let lastScroll = 0;
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        hero.classList.add("hero-move");
    } 
    else {
        hero.classList.remove("hero-move");
    }

});
