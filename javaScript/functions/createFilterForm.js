import FormBuilder from "../modules/form/FormBuilder.js";
import FormDirector from "../modules/form/FormDirector.js";

export function createFilterForm(classList, id) {
    const builder = new FormBuilder(classList, id);
    const director = new FormDirector();
    director.setBuilder(builder);
    director.buildFilterForm();

    return builder.form;
}
