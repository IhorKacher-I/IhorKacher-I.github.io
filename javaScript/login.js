import createLoginForm from "./functions/createLoginForm.js";

window.addEventListener("load", (e) => {
    const logInBtn = document.querySelector("#login-btn");
    const logInLink = document.querySelector("#login-link");

    const logIn = () => {
        document.querySelector("#login-container").style.display = "none";
        const loginForm = createLoginForm();
        document.querySelector("#body__wrap").append(loginForm);
    }

    logInBtn.addEventListener("click", logIn);
    logInLink.addEventListener("click", logIn);
})
