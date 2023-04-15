// Custom element-----------------
const btnSelectStatus = document.querySelector(".filter__select--status");
const btnSelectUrgency = document.querySelector(".filter__select--urgency");
const listSelectStatus = document.querySelector(".select__list--status");
const listSelectUrgency = document.querySelector(".select__list--urgency");
const selectList = document.querySelector(".select__list");
const selectItemsStatus = document.querySelectorAll(".select__item--status");
const selectItemsUrgency = document.querySelectorAll(".select__item--urgency");
const filterBtn = document.querySelector(".filter__button");

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

filterBtn.addEventListener("click", (event) => {
  event.preventDefault();
});

// // section - filter
// property filter
// let filterTabWrap = document.querySelector(".select__list--urgency");

// function filter(event) {
//   let filterTab = document.querySelectorAll(".select__item--urgency");

//   const fil = event.target.dataset.priority;

//   if (fil) {
//     filterTab.forEach((title) => {
//       title.classList.remove("active");
//     });

//     event.target.classList.add("active");
//   }
//   filderByData(event.target.dataset.priority);
// }
// filterTabWrap.addEventListener("click", filter);

// function filderByData(data) {
//   let galleryItems = document.querySelectorAll(".card");

//   const fil = data;

//   if (fil === "All") {
//     galleryItems.forEach((item) => {
//       item.classList.remove("hide");
//     });
//   } else {
//     galleryItems.forEach((item) => {
//       item.classList.add("hide");
//       if (item.dataset.priority === fil) {
//         item.classList.remove("hide");
//       }
//     });
//   }
// }
// //  status filter
// // let filterTabWrap = document.querySelector(".select__list--urgency");
// let filterTabWrap2 = document.querySelector(".select__list--status");

// function filter2(event) {
//   //   let filterTab = document.querySelectorAll(".select__item--urgency");
//   let filterTab2 = document.querySelectorAll(".select__item--status");
//   //   const fil = event.target.dataset.priority;
//   const fil2 = event.target.dataset.status;
//   if (fil2) {
//     //  filterTab.forEach((title) => {
//     //    title.classList.remove("active");
//     //  });
//     filterTab2.forEach((title) => {
//       title.classList.remove("active");
//     });
//     event.target.classList.add("active");
//   }
//   //   filderByData(event.target.dataset.priority);
//   filderByData2(event.target.dataset.status);
// }
// // filterTabWrap.addEventListener("click", filter);
// filterTabWrap2.addEventListener("click", filter2);

// function filderByData2(data) {
//   let galleryItems = document.querySelectorAll(".card");

//   const fil = data;

//   if (fil === "All") {
//     galleryItems.forEach((item) => {
//       item.classList.remove("hide");
//     });
//   } else {
//     galleryItems.forEach((item) => {
//       item.classList.add("hide");
//       if (item.dataset.status === fil) {
//         item.classList.remove("hide");
//       }
//     });
//   }
// }

// const searchInput = document.querySelector(".filter__search");
// const searchButton = document.querySelector(".filter__button");
// const cards = document.querySelectorAll(".card"); // вибираємо всі елементи з класом "card"

// searchButton.addEventListener("click", function () {
//   const searchTerm = searchInput.value.toLowerCase(); // отримуємо введений текст та перетворюємо його в нижній регістр
//   cards.forEach(function (card) {
//     const title = card.querySelector("h4").innerText.toLowerCase(); // отримуємо текст заголовку карти та перетворюємо його в нижній регістр
//     const description = card.querySelector("p").innerText.toLowerCase(); // отримуємо текст опису карти та перетворюємо його в нижній регістр
//     if (title.includes(searchTerm) || description.includes(searchTerm)) {
//       card.style.display = ""; // якщо заголовок або опис містять введений текст, показуємо карту
//     } else {
//       card.style.display = "none"; // якщо заголовок та опис не містять введений текст, приховуємо карту
//     }
//   });
// });
let filterTabWrap = document.querySelector(".select__list--urgency");
let statusFilterTabWrap = document.querySelector(".select__list--status");

function filter(event) {
  let filterTab = document.querySelectorAll(".select__item--urgency");
  let statusFilterTab = document.querySelectorAll(".select__item--status");

  const priority = event.target.dataset.priority;
  const status = event.target.dataset.status;

  if (priority) {
    filterTab.forEach((title) => {
      title.classList.remove("active");
    });
    event.target.classList.add("active");
  } else if (status) {
    statusFilterTab.forEach((title) => {
      title.classList.remove("active");
    });
    event.target.classList.add("active");
  }

  filterByData(priority, status);
}

filterTabWrap.addEventListener("click", filter);
statusFilterTabWrap.addEventListener("click", filter);

function filterByData(priority, status) {
  let galleryItems = document.querySelectorAll(".card");

  if (!priority && !status) {
    galleryItems.forEach((item) => {
      item.classList.remove("hide");
    });
  } else {
    galleryItems.forEach((item) => {
      item.classList.add("hide");
      if (
        (priority && item.dataset.priority === priority) ||
        (status && item.dataset.status === status)
      ) {
        item.classList.remove("hide");
      }
    });
  }
}
