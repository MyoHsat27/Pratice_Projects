const hambergerMenuContainer = document.querySelector("#hambergerMenuContainer");
const overlayMenuContainer = document.querySelector(".overlayMenu");
const menuStateMentChange = document.getElementsByClassName("menuStateMent");
const line1Animation = document.querySelector(".line1");
const line2Animation = document.querySelector(".line2");
const line3Animation = document.querySelector(".line3");

hambergerMenuContainer.addEventListener("click", () => {
    if (line2Animation.classList.contains("hideLine2")) {
        line2Animation.classList.remove("hideLine2");
        line1Animation.classList.remove("crossLine1");
        line3Animation.classList.remove("crossLine3");
        overlayMenuContainer.classList.remove("overLayMenuOpacityHigh");

        for (let i = 0; i < menuStateMentChange.length; i++) {
            menuStateMentChange[i].classList.remove("moveMenuStateMent");
        };
    } else {
        line2Animation.classList.add("hideLine2");
        line1Animation.classList.add("crossLine1");
        line3Animation.classList.add("crossLine3");
        overlayMenuContainer.classList.add("overLayMenuOpacityHigh");

        for (let i = 0; i < menuStateMentChange.length; i++) {
            menuStateMentChange[i].classList.add("moveMenuStateMent");
        };
    };
});