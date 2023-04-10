// Custom element-----------------
const btnSelectStatus = document.querySelector(".filter__select--status");
const btnSelectUrgency = document.querySelector(".filter__select--urgency");
const listSelectStatus = document.querySelector(".select__list--status");
const listSelectUrgency = document.querySelector(".select__list--urgency");
const selectList = document.querySelector(".select__list");
const selectItemsStatus = document.querySelectorAll(".select__item--status");
const selectItemsUrgency = document.querySelectorAll(".select__item--urgency");

btnSelectStatus.addEventListener("click", () => {
  listSelectStatus.classList.toggle("active");
  btnSelectStatus.classList.toggle("active__select");
});

selectItemsStatus.forEach(function (item) {
  item.addEventListener("click", function () {
    btnSelectStatus.textContent = item.textContent;
    selectList.classList.remove("active");
  });
});

btnSelectUrgency.addEventListener("click", () => {
  listSelectUrgency.classList.toggle("active");
  btnSelectUrgency.classList.toggle("active__select");
});

selectItemsUrgency.forEach(function (item) {
  item.addEventListener("click", function () {
    btnSelectUrgency.textContent = item.textContent;
    selectList.classList.remove("active");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".filter__select--status")) {
    listSelectStatus.classList.remove("active");
    btnSelectStatus.classList.remove("active__select");
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".filter__select--urgency")) {
    listSelectUrgency.classList.remove("active");
    btnSelectUrgency.classList.remove("active__select");
  }
});
