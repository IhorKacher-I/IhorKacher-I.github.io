// // ? куди тицьнув
// document.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// // ? куди тицьнув

// static post(url) {
// 	return fetch(url, {
// 	  method: "POST",
// 	  headers: {
// 		 "Content-Type": "application/json",
// 	  },
// 	  body: JSON.stringify({
// 		 email: "snizhanakonopatska@email.com",
// 		 password: "Dan2023",
// 	  }),
// 	})
// 	  .then((response) => response.text()) //промис резолвится с помощью метода .text(), а не .json(), так как ответ от сервера содержит строку, а не объект в формате JSON.
// 	  .then((token) => console.log(token));
//  }

class Request {
  static get(url) {
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

  static post(url, data) {
    return fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: "Визит к кардиологу",
        description: "Плановый визит",
        doctor: "Cardiologist",
        bp: "24",
        age: 23,
        weight: 70,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  static put(url, data) {
    return fetch("https://ajax.test-danit.com/api/v2/cards/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: 1,
        title: "Визит к кардиологу",
        description: "Новое описание визита",
        doctor: "Cardiologist",
        bp: "24",
        age: 23,
        weight: 70,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  static delete(url) {
    return fetch("https://ajax.test-danit.com/api/v2/cards/1", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}

// ----Class Visit
class VisitCards {
  constructor() {
    this.objectInfo = data;

    //  this.doctorName = doctorName;
    //  this.priority = priority;
    //  this.purposeVisit = purposeVisit;
    //  this.description = description;
    //  this.patientName = patientName;
  }
  renderShortCard() {
    const card = document.createElement("article");
    card.classList.add("card");
    card.innerHTML = `
			  <div class="card__info">
				 <h4 class="card__name">
					 
				 </h4>
				 <h5 class="card__doctor"></h5>
				 <p class="card__more">Показати більше</p>
			 </div>
 
			 <div class="card__navigation card__button">
			 <button class="button__trash">
				 <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					 <path
						 d="M7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5V17.5C8 17.7761 7.77614 18 7.5 18C7.22386 18 7 17.7761 7 17.5V7.5Z"
						 fill="#3B3F61" />
					 <path
						 d="M12 7.5C12 7.22386 12.2239 7 12.5 7C12.7761 7 13 7.22386 13 7.5V17.5C13 17.7761 12.7761 18 12.5 18C12.2239 18 12 17.7761 12 17.5V7.5Z"
						 fill="#3B3F61" />
					 <path fill-rule="evenodd" clip-rule="evenodd"
						 d="M7 3V2C7 0.895431 7.89543 0 9 0H11C12.1046 0 13 0.895431 13 2V3H19.5C19.7761 3 20 3.22386 20 3.5C20 3.77614 19.7761 4 19.5 4H18V18C18 20.2091 16.2091 22 14 22H6C3.79086 22 2 20.2091 2 18V4H0.5C0.223857 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3H7ZM9 1H11C11.5523 1 12 1.44772 12 2V3H8V2C8 1.44772 8.44772 1 9 1ZM3 4V18C3 19.6569 4.34315 21 6 21H14C15.6569 21 17 19.6569 17 18V4H3Z"
						 fill="#3B3F61" />
				 </svg>
			 </button>
			 
			 <button class="button__edit">
				 <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
					 <path
						 d="M16 1L9 13M6 17H11M15.3453 7.40486L11.0721 3.52012C10.704 3.18544 10.2243 3 9.72679 3H3.82843C3.29799 3 2.78929 3.21071 2.41421 3.58579L1.58579 4.41421C1.21071 4.78929 1 5.29799 1 5.82843V19.1716C1 19.702 1.21071 20.2107 1.58579 20.5858L2.41421 21.4142C2.78929 21.7893 3.29799 22 3.82843 22H13.3676C14.0701 22 14.7212 21.6314 15.0826 21.029L15.715 19.975C15.9015 19.6642 16 19.3085 16 18.946V8.88474C16 8.32125 15.7623 7.7839 15.3453 7.40486Z"
						 stroke="#3B3F61" stroke-linecap="round" />
				 </svg>
			 </button>
		 </div>`;

    //  document
    //    .querySelector(".button__trash")
    //    .addEventListener("click", (event) => {
    //      console.log(event.target.closest("button__trash"));
    //      this.delete();
    //    });
    const btnMore = document.querySelectorAll(".card__more");
    btnMore.forEach((btn) => {
      btn.addEventListener("click", this.renderFullInfo); //некоректно викликається не працює на клік
    });

    return card;
  }
  //   renderFullInfo() {
  //     const modalFullInfo = document.querySelector(".modal");
  //     modalFullInfo.innerHTML = `<div class="cards__full-visit-information">

  // 			<div class="full-visit-information__header">
  // 				<h2 class="full-visit-information__title">Information about the visit</h2>
  // 				<span class="header__close-button">
  // 					<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  // 						<path
  // 							d="M12.7279 1.41421L11.3137 0L6.36396 4.94975L1.41421 0L0 1.41421L4.94975 6.36396L0 11.3137L1.41421 12.7279L6.36396 7.77817L11.3137 12.7279L12.7279 11.3137L7.77817 6.36396L12.7279 1.41421Z"
  // 							fill="#541A81" />
  // 					</svg>
  // 				</span>
  // 			</div>

  // 			<div class="full-visit-information__body">

  // 				<div class="full-visit-information__doctor">
  // 					<span class="doctor__label">Doctor:</span>
  // 					<span class="doctor__name"> </span>
  // 				</div>

  // 				<div class="full-visit-information__priority">
  // 					<span class="priority__label">Priority:</span>
  // 					<span class="priority__name"></span>
  // 				</div>

  // 				<div class="full-visit-information__patient-name">
  // 					<span class="patient-name__label">Full name:</span>
  // 					<span class="patient-name__value"> </span>
  // 				</div>

  // 				<div class="full-visit-information__visit-purpose">
  // 					<span class="visit-purpose__label">Purpose of the visit:</span>
  // 					<span class="visit-purpose__value"> </span>
  // 				</div>

  // 				<div class="full-visit-information__visit-description">
  // 					<span class="visit-description__label">Brief description<br>of the visit:</span>
  // 					<span class="visit-description__value"> </span>
  // 				</div>

  // 				<div class="full-visit-information__buttons">
  // 					<span class="buttons__edit-button">
  // 						<svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  // 							<path
  // 								d="M16 1L9 13M6 17H11M15.3453 7.40486L11.0721 3.52012C10.704 3.18544 10.2243 3 9.72679 3H3.82843C3.29799 3 2.78929 3.21071 2.41421 3.58579L1.58579 4.41421C1.21071 4.78929 1 5.29799 1 5.82843V19.1716C1 19.702 1.21071 20.2107 1.58579 20.5858L2.41421 21.4142C2.78929 21.7893 3.29799 22 3.82843 22H13.3676C14.0701 22 14.7212 21.6314 15.0826 21.029L15.715 19.975C15.9015 19.6642 16 19.3085 16 18.946V8.88474C16 8.32125 15.7623 7.7839 15.3453 7.40486Z"
  // 								stroke="#3B3F61" stroke-linecap="round" />
  // 						</svg>
  // 					</span>
  // 					<span class="buttons__delete-button">
  // 						<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  // 							<path
  // 								d="M7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5V17.5C8 17.7761 7.77614 18 7.5 18C7.22386 18 7 17.7761 7 17.5V7.5Z"
  // 								fill="#3B3F61" />
  // 							<path
  // 								d="M12 7.5C12 7.22386 12.2239 7 12.5 7C12.7761 7 13 7.22386 13 7.5V17.5C13 17.7761 12.7761 18 12.5 18C12.2239 18 12 17.7761 12 17.5V7.5Z"
  // 								fill="#3B3F61" />
  // 							<path fill-rule="evenodd" clip-rule="evenodd"
  // 								d="M7 3V2C7 0.895431 7.89543 0 9 0H11C12.1046 0 13 0.895431 13 2V3H19.5C19.7761 3 20 3.22386 20 3.5C20 3.77614 19.7761 4 19.5 4H18V18C18 20.2091 16.2091 22 14 22H6C3.79086 22 2 20.2091 2 18V4H0.5C0.223857 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3H7ZM9 1H11C11.5523 1 12 1.44772 12 2V3H8V2C8 1.44772 8.44772 1 9 1ZM3 4V18C3 19.6569 4.34315 21 6 21H14C15.6569 21 17 19.6569 17 18V4H3Z"
  // 								fill="#3B3F61" />
  // 						</svg>
  // 					</span>
  // 				</div>
  // 			</div>
  // 		</div>`;
  //   }
  static put(url, data) {
    return fetch("https://ajax.test-danit.com/api/v2/cards/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: 1,
        title: "Визит к кардиологу",
        description: "Новое описание визита",
        doctor: "Cardiologist",
        bp: "24",
        age: 23,
        weight: 70,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  static delete(url) {
    return fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}
const data = [
  {
    doctorName: "Стоматолог",
    priority: "Low",
    purposeVisit: "Заміна зуба",
    description: "Карієс, заміна пломби",
    patientName: "Сидоренко Сидор Сидорович",
    lastVisit: "10.04.2023",
    id: 1,
  },
  {
    doctorName: "Терапевт",
    priority: "High",
    purposeVisit: "Заміна зуба",
    description: "Карієс, заміна пломби",
    patientName: "Давиденко Давид Давидович",
    age: 25,
    id: 2,
  },
  {
    doctorName: "Кардіолог",
    priority: "Normal",
    purposeVisit: "Біль в серці",
    description: "Зробити кардіограму",
    patientName: "Анапрієнко Анатолій Анатолійович",
    age: 65,
    normalPressure: 12,
    bodyMassIndex: 6,
    diseases: "не було",
    id: 3,
  },
  {
    doctorName: "Стоматолог",
    priority: "Low",
    purposeVisit: "Заміна зуба",
    description: "Карієс, заміна пломби",
    patientName: "Сидоренко Сидор Сидорович",
    lastVisit: "10.04.2023",
    id: 4,
  },
  {
    doctorName: "Терапевт",
    priority: "High",
    purposeVisit: "Заміна зуба",
    description: "Карієс, заміна пломби",
    patientName: "Давиденко Давид Давидович",
    age: 25,
    id: 5,
  },
  {
    doctorName: "Кардіолог",
    priority: "Normal",
    purposeVisit: "Біль в серці",
    description: "Зробити кардіограму",
    patientName: "Анапрієнко Анатолій Анатолійович",
    age: 65,
    normalPressure: 12,
    bodyMassIndex: 6,
    diseases: "не було",
    id: 6,
  },
];

console.log(data);

const newCardList = new VisitCards(data);
const sectionCards = document.querySelector(".cards__container");
// sectionCards.prepend(newCardList.renderShortCard);

// const sectionCards2 = document.querySelector(".cards__container");
// sectionCards.prepend(newCardList.renderShortCard());
// sectionCards.prepend(newCardList.renderShortCard());

// -----------------
class Visit {
  constructor(doctorName, priority, purposeVisit, description, patientName) {
    this.doctorName = doctorName;
    this.priority = priority;
    this.purposeVisit = purposeVisit;
    this.description = description;
    this.patientName = patientName;
  }
}
class VisitDentist extends Visit {
  constructor(
    doctorName,
    priority,
    purposeVisit,
    description,
    patientName,
    lastVisit
  ) {
    super(doctorName, priority, purposeVisit, description, patientName);
    this.lastVisit = lastVisit;
  }
}
class VisitTherapist extends Visit {
  constructor(
    doctorName,
    priority,
    purposeVisit,
    description,
    patientName,
    age
  ) {
    super(doctorName, priority, purposeVisit, description, patientName);
    this.age = age;
  }
}
class VisitCardiologist extends Visit {
  constructor(
    doctorName,
    priority,
    purposeVisit,
    description,
    patientName,
    age,
    normalPressure,
    bodyMassIndex,
    diseases
  ) {
    super(doctorName, priority, purposeVisit, description, patientName);
    this.age = age;
    this.normalPressure = normalPressure;
    this.bodyMassIndex = bodyMassIndex;
    this.diseases = diseases;
  }
}