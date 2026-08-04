window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (window.scrollY > 100) {
        hero.classList.add("hero-move");
    } else {
        hero.classList.remove("hero-move");
    }

});
