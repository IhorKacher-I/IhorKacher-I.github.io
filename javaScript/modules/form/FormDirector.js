/**
 * This class uses The Builder pattern
 * learn more -> https://refactoring.guru/uk/design-patterns/builder
 */
import User from "../User.js";

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

    buildCreateVisitForm() {}
}