// menu tag
const menuIcon = document.querySelector(".menu-icon");
const humburgerMenuContainer = document.querySelector(".humburger-container");
const menuBar1 = document.querySelector(".move-menu-bar1");
const menuBar2 = document.querySelector(".move-menu-bar2");
const menuBar3 = document.querySelector(".move-menu-bar3");

menuIcon.addEventListener("click", () => {
   humburgerMenuContainer.classList.toggle("open-humburger");
   menuIcon.classList.toggle("move-menu-container");
   menuBar1.classList.toggle("first-bar");
   menuBar2.classList.toggle("second-bar");
   menuBar3.classList.toggle("third-bar");
});
