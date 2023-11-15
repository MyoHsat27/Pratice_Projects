const input = document.getElementById("input");
const mainList = document.getElementById("list");

let id = 1;

window.addEventListener("load", () => {
   let storageId = Object.keys(localStorage);
   storageId.sort();
   storageId.map((index) => {
      createList(localStorage.getItem(index), index);
   });
   if (localStorage.length > 0) {
      id = Number(storageId[storageId.length - 1]) + 1;
   }
});

input.addEventListener("keyup", (event) => {
   if (event.keyCode === 13) {
      if (input.value !== "") {
         createList(input.value, id);
         localStorage.setItem(`${id}`, `${input.value}`);
         id++;
         input.value = "";
      }
   }
});

// function reCallStorage() {
//     for (let i = 0; i < localStorage.length; i++) {
//         let text = localStorage.getItem(i);
//         createList(text, id);
//         id++;
//     }
// }

function createList(text, index) {
   const list = document.createElement("li");
   list.id = index;
   const textContainer = document.createElement("div");
   const btnContainer = document.createElement("div");
   const delBtn = document.createElement("button");
   delBtn.classList.add("delBtn");
   delBtn.append("Delete");
   delBtn.setAttribute("onclick", `del(${index})`);
   const editBtn = document.createElement("button");
   editBtn.classList.add("editBtn");
   editBtn.append("Edit");

   btnContainer.append(editBtn, delBtn);
   textContainer.append(text);
   list.append(textContainer);
   list.append(btnContainer);
   mainList.append(list);
}

function del(index) {
   localStorage.removeItem(index);
   document.getElementById(index).remove();
}

mainList.addEventListener("click", (event) => {
   let liArray = [...mainList.childNodes];
   let liTag = event.target.parentElement.parentElement;
   if (liArray.includes(liTag)) {
      let inputValue = prompt("Edit:");
      liTag.childNodes[0].innerText = inputValue;
      localStorage.setItem(`${liTag.id}`, inputValue);
   }
});
