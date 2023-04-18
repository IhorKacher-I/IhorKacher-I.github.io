import Request from "../modules/Request.js";
import {Modal} from "../modules/Modal.js";
import { root, arrForSearch} from "../constants/const.js";
import FormBuilder from "../modules/form/FormBuilder.js";
import FormDirector from "../modules/form/FormDirector.js";
import {VisitDentist} from "../modules/visit/VisitDentist.js";
import {VisitCardiologist} from "../modules/visit/VisitCardiologist.js";
import {VisitTherapist} from "../modules/visit/VisitTherapist.js";
import {createVisitObj} from "./createVisitObj.js";
import {changeDoctorFields} from "./changeDoctorFields.js";
import {removeModal} from "./removeModal.js";

function handleFormSubmit(event) {
    event.preventDefault();
    const promiseObj = new Request().post("", createVisitObj())
        .catch((e) => alert(e.message));

    promiseObj.then(obj => {
        arrForSearch.push(obj);

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
        removeModal();

        const sectionCards = document.querySelector(".cards-list");
        sectionCards.prepend(visitCard);
    });

  const noItemsDiv = document.querySelector("#no-items");
  if (noItemsDiv) {
    noItemsDiv.remove();
  }
}

function setupFormEventListeners(createVisit) {
  let doctorSelect = document.querySelector(".visit__doctor");
  changeDoctorFields(createVisit, doctorSelect);

  createVisit.lastChild.addEventListener("submit", (event) => {
    handleFormSubmit(event, createVisit);
  });
}

export function addVisit() {
    const createVisitForm = new FormBuilder(["visit__form"], "visit__form");
    const formDirector = new FormDirector();
    formDirector.setBuilder(createVisitForm);
    formDirector.buildCreateVisitForm();

    const createVisit = new Modal('Create visit', createVisitForm.form).render();
    root.append(createVisit);

    setupFormEventListeners(createVisit);
}
