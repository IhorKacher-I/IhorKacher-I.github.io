import createLoginForm from "./functions/createLoginForm.js";

window.addEventListener("load", (e) => {
    const loginForm = createLoginForm();
    document.querySelector("#body__wrap").append(loginForm);
})
