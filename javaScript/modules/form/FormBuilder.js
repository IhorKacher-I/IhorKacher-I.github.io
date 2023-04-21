/**
 * This class uses The Builder pattern
 * learn more -> https://refactoring.guru/uk/design-patterns/builder
 */
import Form from "./Form.js";
import createHTMLElement from "../../functions/createHTMLElement.js";

export default class FormBuilder {
    #form;

    constructor(className, id) {
        this.reset(className, id);
    }

    reset(className = "", id = "") {
        const instance = new Form(className, id);
        this.#form = instance.render();
    }

    addEventListener(event, handler) {
        this.#form.addEventListener(event, handler);
    }

    addTitle(classList = [], textContent = "", id = "") {
        const title = createHTMLElement("h3", classList, {textContent, id});
        this.#form.append(title);
    }


    addLabel(classList = [], target = "", textContent = "") {
        const label = createHTMLElement("label", classList, {textContent});
        label.setAttribute("for", target);
        this.#form.append(label);
    }

    addInput(classList = [], id = "", type = "", name = "", required = false, placeholder = '', autocomplete= "on", value = "") {
        const input = createHTMLElement("input", classList, {id, type, name, required, placeholder, autocomplete, value});
        this.#form.append(input);
    }
    addButton(classList = [], id = "", type = "", innerHTML = "") {
        const button = createHTMLElement("button", classList, {id, type, innerHTML});
        this.#form.append(button);
    }
    addSelect(classList = [], required = false, options = [], selectedValue = "", name = "", edit = false) {
        const select = createHTMLElement("select", classList, { name, required });

        let selectedOption;
        if(edit) {
            selectedOption = createHTMLElement("option", [], {
                value: selectedValue,
                textContent: selectedValue,
                selected: true,
            });
        } else {
            selectedOption = createHTMLElement("option", [], {
                value: "",
                textContent: selectedValue,
                selected: true,
                disabled: true,
                hidden: true
            });
        }

        select.append(selectedOption);
        for (const option of options) {
            const { value, textContent } = option;
            // const optionElement = createHTMLElement("option", [], { value, textContent });
            // select.append(optionElement);
            if (value !== selectedValue) {
                const optionElement = createHTMLElement("option", [], { value, textContent });
                select.append(optionElement);
            }
        }

        this.#form.append(select);
    }
    addTextarea(classList = [], type = "", required = false, placeholder = "", value = "", name = "" ) {
        const textarea = createHTMLElement("textarea", classList, {name, required, placeholder, value, });
        this.#form.append(textarea);
    }
    addSpan(classList = [], textContent = "", id = "", name = "") {
        const span = createHTMLElement("span", classList, {textContent, id, name});
        this.#form.append(span);
    }
    addElements(elements) {
        this.#form.append(...elements);
    }
    get form() {
        const form = this.#form;
        this.reset();
        return form;
    }
}