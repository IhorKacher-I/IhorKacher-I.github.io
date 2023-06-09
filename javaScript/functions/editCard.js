import FormBuilder from "../modules/form/FormBuilder.js";
import FormDirector from "../modules/form/FormDirector.js";
import {Modal} from "../modules/Modal.js";
import Request from "../modules/Request.js";
import {arrForSearch, root} from "../constants/const.js";
import {removeModal} from "./removeModal.js";

export function editCard(fullInfoWindow) {
    if(fullInfoWindow.tagName) fullInfoWindow.remove();
    const formBuilder = new FormBuilder(["visit__form"], "visit-form");
    const formDirector = new FormDirector();
    formDirector.setBuilder(formBuilder);

    formDirector.buildEditVisitForm(this);
    const editForm = formBuilder.form;
    const editVisitWindow = new Modal('Edit visit form', editForm).render();

    editForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        formData.append("doctorName", this.doctorName);
        formData.append("id", this.id);

        new Request().put(this.id, Object.fromEntries(formData)).then(data => {
            const {
                priority,
                status,
                purposeVisit,
                description,
                patientName,
                age,
                lastVisit,
                normalPressure,
                bodyMassIndex,
                diseases,

            } = data;
            this.priority = priority;
            this.status = status;
            this.purposeVisit = purposeVisit;
            this.description = description;
            this.patientName = patientName;
            this.status = status;

            if (age || age === "") this.age = age === "" ? "-" : age;
            if (lastVisit || lastVisit === "") this.lastVisit = lastVisit === "" ? "-" : lastVisit;
            if (normalPressure || normalPressure === "") this.normalPressure = normalPressure === "" ? "-" : normalPressure;
            if (bodyMassIndex || bodyMassIndex === "") this.bodyMassIndex = bodyMassIndex === "" ? "-" : bodyMassIndex;
            if (diseases || diseases === "") this.diseases = diseases === "" ? "-" : diseases;

            const parentElement = document.getElementById(this.id);
            const shortCard = parentElement.querySelector('.card__info .card__name');

            shortCard.textContent = this.patientName;
            let index = arrForSearch.findIndex(el => el.id === this.id);
            arrForSearch.splice(index, 1, data);

            removeModal();
        })
            .catch((e) => alert(e.message));
    })
    root.append(editVisitWindow);
}