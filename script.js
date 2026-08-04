window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (window.scrollY > 50) {
        hero.classList.add("hero-move");
    } else {
        hero.classList.remove("hero-move");
    }

});
