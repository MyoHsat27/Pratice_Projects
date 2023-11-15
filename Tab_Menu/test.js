const tabMenusContainer = document.querySelector(".tabMenusContainer");
const menuSlider = document.querySelector(".menuSlider");
const ulTag = document.getElementsByTagName("ul")[0];

const tabs = ["home", "services", "about us", "contact us", "login"];

const handelTabChange = (event) => {
    const clickLiTagOffsetWidth = event.target.offsetWidth;
    menuSlider.style.width = clickLiTagOffsetWidth + "px";
    const clickLiTagOffsetLeft = event.target.offsetLeft;
    menuSlider.style.transform = `translateX(${clickLiTagOffsetLeft}px)`;
};

for (let i = 0; i < tabs.length; i++) {
    const liTags = document.createElement("li");
    liTags.append(tabs[i].toUpperCase());
    liTags.id = i;
    liTags.addEventListener("click", handelTabChange);

    if (i === 0) {
        menuSlider.style.width = liTags.offsetWidth + "px";
    };

    ulTag.append(liTags);
};