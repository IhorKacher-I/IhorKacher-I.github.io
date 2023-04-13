/**
 * This class uses The Builder pattern
 * learn more -> https://refactoring.guru/uk/design-patterns/builder
 */
import User from "../User.js";
import createHTMLElement from "../../functions/createHTMLElement.js";
export default class FormDirector {
    #builder;

    setBuilder(builder) {
        this.#builder = builder;
    }

    buildLoginForm() {
        function submitHandler(e) {
            e.preventDefault();
            const formData = new FormData(e.target);

            User.logIn(Object.fromEntries(formData)).then(data => {
                if(data) {
                    window.location.href = 'index.html';
                }
            });
        }

        this.#builder.addTitle(["login-form__title"], "Log In");
        this.#builder.addLabel(["login-form__label"], "login", "Login");
        this.#builder.addInput(["login-form__input"],"login", "text", "email", true);
        this.#builder.addLabel(["login-form__label"], "password", "Password");
        this.#builder.addInput(["login-form__input"],"password", "password", "password", true);
        this.#builder.addButton(["button", "login-form__button"], "login-btn", "submit", "Log In");
        this.#builder.addEventListener("submit", submitHandler);
    }

    buildCreateVisitForm() {


        this.#builder.addSelect(['doctor__select'], true, [
            { value: "", textContent: "Choose a doctor" },
            { value: "cardiologist", textContent: "Cardiologist" },
            { value: "dentist", textContent: "Dentist" },
            { value: "therapist", textContent: "Therapist" },
        ]);
        this.#builder.addSelect(['priority__select'], true, [
            { value: "", textContent: "Choose a priority" },
            { value: "1", textContent: "High" },
            { value: "2", textContent: "Medium" },
            { value: "3", textContent: "Low" },
        ], );
        this.#builder.addInput(["purpose__input"],"login", "", "", true, 'The purpose of the visit?');
        this.#builder.addTextarea(["description__textarea"],true, "Description");
        this.#builder.addInput(["name__input"],"login", "", "", true, 'Enter full name:');
        this.#builder.addButton(["create-visit-form__submit"], "login-btn", "submit", "+");

    }
    addCardiologistFields() {
        return [
            createHTMLElement("input", ["pressure__input", "additional-fields"], {placeholder:'Normal pressure:'}),
            createHTMLElement("input", ["bmi__input", "additional-fields"], {placeholder:'Body mass index:'}),
            createHTMLElement("input", ["age__input", "additional-fields"], {placeholder:'Age:'}),
            createHTMLElement("textarea", ["diseases__input", "additional-fields"], {placeholder:'Diseases:'}),
        ]


    }
    addDentistFields() {
        return createHTMLElement("input", ["last-visit__input", "additional-fields"], {placeholder:'Date of last visit:'});
    }
    addTherapistFields() {
        return createHTMLElement("input", ["therapist-age-field__input", "additional-fields"], {placeholder:'Age:'});
    }
}
