<<<<<<< HEAD
export function removeElementCollection(className) {
  document.querySelectorAll(className).forEach((field) => {
    field.remove();
  });
}
export function changeDoctorFields(formWindow, form, select) {
  select.addEventListener("change", () => {
    switch (event.target.value) {
      case "cardiologist":
        {
          removeElementCollection(".additional-fields");
          formWindow.lastChild.append(...form.addCardiologistFields());
        }
        break;
      case "dentist":
        {
          removeElementCollection(".additional-fields");
          formWindow.lastChild.append(form.addDentistFields());
        }
        break;
      case "therapist":
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
    ["status", document.querySelector(".create-visit__status").value],

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
=======
import Request from "../modules/Request.js";
import {Modal} from "../modules/Modal.js";
import { root } from "../constants/const.js";
import FormBuilder from "../modules/form/FormBuilder.js";
import { Visit } from "../modules/Visit.js";
import FormDirector from "../modules/form/FormDirector.js";




export function removeElementCollection(className) {
    document.querySelectorAll(className).forEach(field => {
        field.remove();
    })
}
export function changeDoctorFields(formWindow, form, select) {
    select.addEventListener('change', () => {
        switch (event.target.value) {
            case 'cardiologist': {
                removeElementCollection('.additional-fields');
                formWindow.lastChild.append(...form.addCardiologistFields());
            }
                break;
            case 'dentist': {
                removeElementCollection('.additional-fields');
                formWindow.lastChild.append(form.addDentistFields());
            }
                break;
            case 'therapist': {
                removeElementCollection('.additional-fields');
                formWindow.lastChild.append(form.addTherapistFields());
            }
                break;
            default:
                removeElementCollection('.additional-fields');
        }
    })
}
export function createVisitObj() {
    const objEntries = [
        ['doctorName',      document.querySelector('.create-visit__doctor').value],
        ['priority',        document.querySelector('.create-visit__priority').value],
        ['purposeVisit',    document.querySelector('.create-visit__purpose').value],
        ['description',     document.querySelector('.create-visit__description').value],
        ['patientName',     document.querySelector('.create-visit__name').value],
        ['status',          document.querySelector('.create-visit__status').value],

        ['normalPressure',  document.querySelector('.create-visit__pressure')?.value],
        ['bodyMassIndex',   document.querySelector('.create-visit__bmi')?.value],
        ['age',             document.querySelector('.create-visit__age')?.value],
        ['diseases',        document.querySelector('.create-visit__diseases')?.value],
        ['lastVisit',       document.querySelector('.create-visit__last-visit')?.value],
        ['age',             document.querySelector('.create-visit__therapist-age-field')?.value],
    ];

    const validObjEntries = objEntries.filter(([key, value]) => value !== undefined);

    return Object.fromEntries(validObjEntries);
}
export function handleFormSubmit(event, createVisit) {
    event.preventDefault();
    const promiseObj = new Request().post("", createVisitObj());
    promiseObj.then(obj => {
        new Visit(obj).renderShortCard();
        document.querySelector('.modal-window').remove();
        const sectionCards = document.querySelector(".cards-list");
        sectionCards.prepend(new Visit(obj).renderShortCard());
    });
}

export function setupFormEventListeners(createVisit, formDirector) {
    let doctorSelect = document.querySelector('.create-visit__doctor');
    changeDoctorFields(createVisit, formDirector, doctorSelect);

    createVisit.lastChild.addEventListener('submit', (event) => {
        handleFormSubmit(event, createVisit);
    });
}

export function addVisit() {
    //todo scroll, blur background та закриття по кліку поза вікном
    const createVisitForm = new FormBuilder(["create-visit__form"], "create-visit__form");
    const formDirector = new FormDirector();
    formDirector.setBuilder(createVisitForm);
    formDirector.buildCreateVisitForm();

    const createVisit = new Modal('Create visit', createVisitForm.form).render();
    root.append(createVisit);

    setupFormEventListeners(createVisit, formDirector);
}














>>>>>>> dev
