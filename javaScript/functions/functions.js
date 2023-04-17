import Request from "../modules/Request.js";
import { Modal } from "../modules/Modal.js";
import { root, body } from "../constants/const.js";
import FormBuilder from "../modules/form/FormBuilder.js";
import FormDirector from "../modules/form/FormDirector.js";
import { VisitDentist } from "../modules/visit/VisitDentist.js";
import { VisitCardiologist } from "../modules/visit/VisitCardiologist.js";
import { VisitTherapist } from "../modules/visit/VisitTherapist.js";

export function removeElementCollection(className) {
  document.querySelectorAll(className).forEach((field) => {
    field.remove();
  });
}
export function changeDoctorFields(modalWindow, form, select) {
  let formWindow = modalWindow.firstChild;
  select.addEventListener("change", (event) => {
    switch (event.target.value) {
      case "Cardiologist":
        {
          removeElementCollection(".additional-fields");
          formWindow.lastChild.append(...form.addCardiologistFields());
        }
        break;
      case "Dentist":
        {
          removeElementCollection(".additional-fields");
          formWindow.lastChild.append(form.addDentistFields());
        }
        break;
      case "Therapist":
        {
          removeElementCollection(".additional-fields");
          formWindow.lastChild.append(form.addTherapistFields());
        }
        break;
      default:
        removeElementCollection(".additional-fields");
    }
  });
}
export function createVisitObj() {
  const objEntries = [
    ["doctorName", document.querySelector(".create-visit__doctor").value],
    ["priority", document.querySelector(".create-visit__priority").value],
    ["purposeVisit", document.querySelector(".create-visit__purpose").value],
    ["description", document.querySelector(".create-visit__description").value],
    ["patientName", document.querySelector(".create-visit__name").value],
    // ['status',          document.querySelector('.create-visit__status').value],

    [
      "normalPressure",
      document.querySelector(".create-visit__pressure")?.value,
    ],
    ["bodyMassIndex", document.querySelector(".create-visit__bmi")?.value],
    ["age", document.querySelector(".create-visit__age")?.value],
    ["diseases", document.querySelector(".create-visit__diseases")?.value],
    ["lastVisit", document.querySelector(".create-visit__last-visit")?.value],
    [
      "age",
      document.querySelector(".create-visit__therapist-age-field")?.value,
    ],
  ];

  const validObjEntries = objEntries.filter(
    ([key, value]) => value !== undefined
  );

  return Object.fromEntries(validObjEntries);
}
export function handleFormSubmit(event, createVisit) {
  event.preventDefault();
  const promiseObj = new Request().post("", createVisitObj());

  promiseObj.then((obj) => {
    let visitCard;
    switch (obj.doctorName) {
      case "Dentist":
        visitCard = new VisitDentist(obj).renderShortCard();
        break;
      case "Cardiologist":
        visitCard = new VisitCardiologist(obj).renderShortCard();
        break;
      default:
        visitCard = new VisitTherapist(obj).renderShortCard();
    }
    document.querySelector("#modal").remove();
    body.style["overflow-y"] = "";

    const sectionCards = document.querySelector(".cards-list");
    sectionCards.prepend(visitCard);
  });

  const noItemsDiv = document.querySelector("#no-items");
  if (noItemsDiv) {
    noItemsDiv.remove();
  }
}

export function setupFormEventListeners(createVisit, formDirector) {
  let doctorSelect = document.querySelector(".create-visit__doctor");
  changeDoctorFields(createVisit, formDirector, doctorSelect);

  createVisit.lastChild.addEventListener("submit", (event) => {
    handleFormSubmit(event, createVisit);
  });
}

export function addVisit() {
  const createVisitForm = new FormBuilder(
    ["create-visit__form"],
    "create-visit__form"
  );
  const formDirector = new FormDirector();
  formDirector.setBuilder(createVisitForm);
  formDirector.buildCreateVisitForm();

  const createVisit = new Modal("Create visit", createVisitForm.form).render();
  root.append(createVisit);

  setupFormEventListeners(createVisit, formDirector);
}
