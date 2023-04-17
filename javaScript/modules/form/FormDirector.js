/**
 * This class uses The Builder pattern
 * learn more -> https://refactoring.guru/uk/design-patterns/builder
 */
import User from "../User.js";
import createHTMLElement from "../../functions/createHTMLElement.js";
import {arrForSearch, svgAddIcon} from "../../constants/const.js";

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
        ]);
        this.#builder.addSelect(['search__priority'], false, [
            {value: "All", textContent: "All"},
            {value: "High", textContent: "High"},
            {value: "Normal", textContent: "Normal"},
            {value: "Low", textContent: "Low"},
        ],);
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
        this.#builder.addSelect(['create-visit__doctor'], true, [
            {value: "", textContent: "Choose a doctor"},
            {value: "Cardiologist", textContent: "Cardiologist"},
            {value: "Dentist", textContent: "Dentist"},
            {value: "Therapist", textContent: "Therapist"},
        ]);
        this.#builder.addSelect(['create-visit__priority'], true, [
            {value: "", textContent: "Choose a priority"},
            {value: "High", textContent: "High"},
            {value: "Normal", textContent: "Normal"},
            {value: "Low", textContent: "Low"},
        ],);

        this.#builder.addInput(["create-visit__purpose"], "", "text", "", true, 'The purpose of the visit?');
        this.#builder.addTextarea(["create-visit__description"], "text", true, "Description");
        this.#builder.addInput(["create-visit__name"], "", "text", "", true, 'Enter full name:');
        this.#builder.addButton(["create-visit__submit"], "", "submit", svgAddIcon);
    }

    addCardiologistFields() {
        return [
            createHTMLElement("input", ["create-visit__pressure", "additional-fields"], {
                type: 'text',
                placeholder: 'Normal pressure:'
            }),
            createHTMLElement("input", ["create-visit__bmi", "additional-fields"], {
                type: 'number',
                placeholder: 'Body mass index:'
            }),
            createHTMLElement("input", ["create-visit__age", "additional-fields"], {
                type: 'number',
                placeholder: 'Age:'
            }),
            createHTMLElement("textarea", ["create-visit__diseases", "additional-fields"], {placeholder: 'Diseases:'}),
        ]
    }

    addDentistFields() {
        return createHTMLElement("input", ["create-visit__last-visit", "additional-fields"], {
            type: 'date',
            placeholder: 'Date of last visit:'
        });
    }

    addTherapistFields() {
        return createHTMLElement("input", ["create-visit__therapist-age-field", "additional-fields"], {
            type: 'number',
            placeholder: 'Age:'
        });
    }
}
