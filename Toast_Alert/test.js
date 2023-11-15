const processBtn = document.querySelector("#processBtn");
const parent = document.querySelector(".parent");

const openToastAlert = () => {
  parent.innerHTML = "";
  const alertDiv = document.createElement("div");
  alertDiv.classList.add("alertDiv");
  alertDiv.append("Your file was successfully uploaded.");
  parent.append(alertDiv);
  alertDiv.style.bottom = `-${alertDiv.offsetHeight}px`;
  setTimeout(() => {
    alertDiv.style.bottom = `0px`;
  }, 100);

  setTimeout(() => {
    alertDiv.style.bottom = `-${alertDiv.offsetHeight}px`;
  }, 4000);
};

processBtn.addEventListener("click", () => {
  openToastAlert();
});
