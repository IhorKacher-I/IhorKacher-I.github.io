import FormBuilder from "../modules/form/FormBuilder.js";
import FormDirector from "../modules/form/FormDirector.js";
export default function createLoginForm() {
    const formBuilder = new FormBuilder(["login-form"], "login-form");
    const formDirector = new FormDirector();
    formDirector.setBuilder(formBuilder);
    formDirector.buildLoginForm();

    return formBuilder.form;
}

