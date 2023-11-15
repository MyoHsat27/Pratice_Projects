const url = "https://fakestoreapi.com/products";

let products;

// fetch(url)
//     .then((response) => {
//         const responseData = response.json();
//         return responseData;
//     })
//     .then((jsonResponse) => {
//         products = jsonResponse;
//         console.log(products);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const dataCall = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    products = responseJson;
};

dataCall().catch((error) => {
    console.log(error);
});

const inputBox = document.getElementById("inputBox");
const outputContainer = document.getElementById("outputContainer");
outputContainer.style.display = "none";

let indexToSelect = -1;
let filterArray = [];
inputBox.addEventListener("keyup", (event) => {
    if (
        event.key === "ArrowDown" ||
        event.key === "ArrowUp" ||
        event.key === "Enter"
    ) {
        navigateAndSelectProduct(event.key);
        return;
    };
    outputContainer.innerHTML = "";
    outputContainer.style.display = "inline";   
    const clientSearch = event.target.value.toLowerCase();
    if (clientSearch.length === 0) {
        outputContainer.style.display = "none";
        return;
    };
    filterArray = products.filter((item) => {
        return item.title.toLowerCase().includes(clientSearch);
    });

    const hasProductToShow = filterArray.length > 0;
    if (hasProductToShow) {
        for (let i = 0; i < filterArray.length; i++) {
            const productItemShowCaseDiv = document.createElement("div");
            productItemShowCaseDiv.id = filterArray[i].id;
            productItemShowCaseDiv.classList.add("productItemContainers");

            const productName = document.createElement("div");
            productName.classList.add("productName");
            productName.append(filterArray[i].title);

            const productImage = document.createElement("img");
            productImage.classList.add("productImage");
            productImage.src = filterArray[i].image;

            productItemShowCaseDiv.append(productName, productImage);
            outputContainer.append(productItemShowCaseDiv);
        };
    };
});

const selectRemove = () => {
    let productItemToDeselect = document.getElementsByClassName("selected")[0];
    productItemToDeselect.style.backgroundColor = "white";
    productItemToDeselect.firstChild.style.color = "black";
    productItemToDeselect.classList.remove("selected");
};

const selectApply = (a) => {
    const productIdToSelect = filterArray[a].id.toString();
    const productItemContainersToSelect = document.getElementById(productIdToSelect);
    productItemContainersToSelect.style.backgroundColor = "lightgray";
    productItemContainersToSelect.firstChild.style.color = "white";
    productItemContainersToSelect.classList.add("selected");
    return productItemContainersToSelect;
};

const navigateAndSelectProduct = (key) => {

    if (key === "ArrowDown") {
        if (indexToSelect === filterArray.length - 1) {
            indexToSelect = -1;
            selectRemove();
            return;
        };
        indexToSelect++;
        selectApply(indexToSelect);
        if (indexToSelect > 0) {
            selectRemove();
        };

    } else if (key === "ArrowUp") {
        if (indexToSelect === -1) {
            indexToSelect = filterArray.length -1;
            selectApply(indexToSelect);
            return;
        };
        if (indexToSelect === 0) {
            selectRemove();
            indexToSelect = -1;
            return;
        };
        indexToSelect--;
        selectRemove();
        selectApply(indexToSelect);

    } else if (key === "Enter") {
        const makeEnterDivContainer = document.createElement("div");
    };
};