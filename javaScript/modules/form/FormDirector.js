/**
 * This class uses The Builder pattern
 * learn more -> https://refactoring.guru/uk/design-patterns/builder
 */
import User from "../User.js";
import { arrForSearch, svgAddIcon } from "../../constants/const.js";
import {addCardiologistFields, addDentistFields, addTherapistFields} from "../../functions/additionalFormFields.js";

export default class FormDirector {
    #builder;

    setBuilder(builder) {
        this.#builder = builder;
    }
    buildFilterForm() {
        function submitHandler(e) {
            e.preventDefault();
            let formChildren = Array.from(e.target.children);
            const formData = {};
            formChildren.forEach(({className, value, tagName}) => {
                if (tagName !== "BUTTON") {
                    switch (className) {
                        case "filter__search": {
                            formData.text = value;
                            break;
                        }
                        case "search__status": {
                            formData.status = value === "All" ? "" : value;
                            break;
                        }
                        default: {
                            formData.priority = value === "All" ? "" : value;
                        }
                    }
                }
            })

            const needToHide = [];
            arrForSearch.forEach(({
                                      doctorName, priority, status = "Open", purposeVisit, description,
                                      patientName, age = '', normalPressure = '',
                                      bodyMassIndex = '', diseases = '',
                                      lastVisit = '', id
                                  }) => {
                const values = [doctorName, purposeVisit, description, patientName, age,
                    normalPressure, bodyMassIndex, diseases, lastVisit];
                const includes = values.some(value => value.toLowerCase().includes(formData.text.toLowerCase().trim()));

                if (!includes) {
                    needToHide.push(id);
                } else if (!priority.toLowerCase().includes(formData.priority.toLowerCase())) {
                    needToHide.push(id);
                } else if (!status.toLowerCase().includes(formData.status.toLowerCase())) {
                    needToHide.push(id);
                }
            });

            const needToShow = arrForSearch.filter(({id}) => !needToHide.includes(id));
            if (needToShow.length !== 0) {
                needToHide.forEach(cardID => {
                    document.getElementById(cardID.toString()).style.display = "none";
                })
                needToShow.forEach(({id}) => {
                    document.getElementById(id.toString()).style.display = "flex";
                })
            } else {
                alert("No visit match the filter. Try again!");
                formChildren.forEach(el => {
                    if (el.tagName !== "BUTTON") {
                        switch (el.className) {
                            case "filter__search": {
                                el.value = "";
                                break;
                            }
                            case "search__status": {
                                el.value = "All";
                                break;
                            }
                            default: {
                                el.value = "All";
                            }
                        }
                    }
                })
                arrForSearch.forEach(({id}) => {
                    document.getElementById(id.toString()).style.display = "flex";
                })
            }
        }

        this.#builder.addInput(["filter__search"], "search-input", "text", "searchFor", false, "Search ...", "off");
        this.#builder.addSelect(['search__status'], false, [
            {value: "All", textContent: "All"},
            {value: "Open", textContent: "Open"},
            {value: "Done", textContent: "Done"},
        ], "All");
        this.#builder.addSelect(['search__priority'], false, [
            {value: "All", textContent: "All"},
            {value: "High", textContent: "High"},
            {value: "Normal", textContent: "Normal"},
            {value: "Low", textContent: "Low"},
        ],"All");
        this.#builder.addButton(["button", "filter__button"], "search-btn", "submit", "Search");
        this.#builder.addEventListener("submit", submitHandler);
    }

    buildLoginForm() {
        function submitHandler(e) {
            e.preventDefault();
            const formData = new FormData(e.target);

            User.logIn(Object.fromEntries(formData)).then(data => {
                if (data) {
                    window.location.href = 'index.html';
                }
            });
        }

        this.#builder.addTitle(["login-form__title"], "Log In");
        this.#builder.addLabel(["login-form__label"], "login", "Login");
        this.#builder.addInput(["login-form__input"], "login", "text", "email", true);
        this.#builder.addLabel(["login-form__label"], "password", "Password");
        this.#builder.addInput(["login-form__input"], "password", "password", "password", true);
        this.#builder.addButton(["button", "login-form__button"], "login-btn", "submit", "Log In");
        this.#builder.addEventListener("submit", submitHandler);
    }

    buildCreateVisitForm() {
        this.#builder.addSelect(['visit__doctor'], true, [
            {value: "Cardiologist", textContent: "Cardiologist"},
            {value: "Dentist", textContent: "Dentist"},
            {value: "Therapist", textContent: "Therapist"},
        ], "Choose a doctor");
        this.#builder.addSelect(['visit__priority'], true, [
            {value: "High", textContent: "High"},
            {value: "Normal", textContent: "Normal"},
            {value: "Low", textContent: "Low"},
        ], "Choose a priority");

        this.#builder.addInput(["visit__purpose"], "", "text", "", true, 'The purpose of the visit?');
        this.#builder.addTextarea(["visit__description"], "text", true, "Description");
        this.#builder.addInput(["visit__name"], "", "text", "", true, 'Enter full name:');
        this.#builder.addButton(["visit__submit"], "", "submit", svgAddIcon);
    }


    buildEditVisitForm(visitDataObj) {
        this.#builder.addSpan(["visit__doctor"], visitDataObj.doctorName, "", "doctorName");
        this.#builder.addSelect(['visit__priority'], true, [
            { value: "High", textContent: "High" },
            { value: "Normal", textContent: "Normal" },
            { value: "Low", textContent: "Low" },
        ], visitDataObj.priority, "priority");
        this.#builder.addSelect(['visit__status'], true, [
            { value: "Open", textContent: "Open" },
            { value: "Done", textContent: "Done" },
        ], visitDataObj.status, "status");
        this.#builder.addInput(["visit__purpose"],"", "text", "purposeVisit", true, 'The purpose of the visit?', '', visitDataObj.purposeVisit);
        this.#builder.addTextarea(["visit__description"],"text",true, "Description", visitDataObj.description, "description");
        this.#builder.addInput(["visit__name"],"", "text", "patientName", true, 'Enter full name:', '', visitDataObj.patientName);
        switch (visitDataObj.doctorName) {
            case 'Cardiologist':
                this.#builder.addElements(addCardiologistFields(visitDataObj));
                break;
            case 'Dentist':
                this.#builder.addElements(addDentistFields(visitDataObj));
                break;
            case 'Therapist':
                this.#builder.addElements(addTherapistFields(visitDataObj));
                break;
        }

        this.#builder.addButton(["visit__submit"], "", "submit", svgAddIcon);
    }
}
