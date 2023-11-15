const menuBox = document.querySelector(".menu-box-container");
const menu = document.querySelectorAll(".menu");
const menuarr = [...menu];
const leftSlide = document.querySelector(".pieceContainer");

menuBox.addEventListener("click", (event) => {
    menuarr.map((el, index) => {
        el.classList.toggle(`menu${index}`);
    });

    leftSlide.classList.toggle("pieceContainerAnimate");
});
