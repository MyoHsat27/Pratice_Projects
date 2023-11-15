const parent = document.querySelector(".parent");

const openToastAlert = () => {
    const toastAlertContainerTag = document.createElement("div");
    toastAlertContainerTag.classList.add("toastAlertContainerTag");

    const toastAlertTextTag = document.createElement("div");
    toastAlertTextTag.classList.add("toastAlertTextTag");
    toastAlertTextTag.append(`We use cookies. Your continued use of our site implies you agress to this. See details.`);

    const toastAlertCloseBtn = document.createElement("button");
    toastAlertCloseBtn.classList.add("btn", "btn-light");
    toastAlertCloseBtn.append("close");

    toastAlertContainerTag.append(toastAlertTextTag, toastAlertCloseBtn);

    parent.append(toastAlertContainerTag);
    parent.style.bottom = `-${parent.offsetHeight}px`;
    setTimeout(() => {
        parent.style.bottom = `0px`;
    }, 100);

    toastAlertCloseBtn.addEventListener("click", () => {
        parent.style.bottom = `-${parent.offsetHeight}px`;
        localStorage.setItem("accepted", "1");
    });

};

window.addEventListener("load", () => {
    const accepted = localStorage.getItem("accepted");
    if (accepted === null) {
        openToastAlert();
    };
})