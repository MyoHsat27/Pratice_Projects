const myInput = document.getElementById("myInput");
const myBtn = document.getElementById("myBtn");
const errorMessage = document.getElementById("errorMessage");
const productsLength = document.getElementById("productsLength");
const unorderList = document.getElementById("unorderList");
const deleteSpan = document.getElementById("deleteSpan");
let condition = true;
let productId = 0;

//<i class="fas fa-trash-alt"></i>

errorMessage.style.display = "none";
productsLength.style.display = "none";

const addingProduct = () => {
    const inputValue = myInput.value;
    const inputValueCounts = myInput.value.length;

    if (inputValueCounts <= 50) {
        if (inputValue == "" || inputValue == null) {
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
            productsLength.style.display = "none";

            var listText = document.createElement("span");
            var deleteIcon = document.createElement("i");
            var listItems = document.createElement("li");

            listItems.id = productId;
            deleteIcon.id = productId;

            listText.classList.add("me-auto");
            listItems.classList.add(
                "list-group-item",
                "list-group-item-action",
                "d-flex",
                "align-items-center",
                "user-select-none"
            );
            deleteIcon.classList.add("fas", "fa-trash-alt");

            listText.append(inputValue);
            listItems.append(listText);
            listItems.append(deleteIcon);
            unorderList.append(listItems);

            const tickProducts = () => {
                if (condition) {
                    listText.style.textDecoration = "line-through";
                    condition = false;
                } else {
                    listText.style.textDecoration = "none";
                    condition = true;
                }
            };

            const deleteProducts = () => {
                listItems.remove();
            };

            listItems.addEventListener("click", tickProducts);
            deleteIcon.addEventListener("click", deleteProducts);

            productId++;
        }
        myInput.value = "";
    } else {
        productsLength.style.display = "block";
        myInput.value = "";
    }
};

myBtn.addEventListener("click", addingProduct);
