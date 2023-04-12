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

    addInput(classList = [], id = "", type = "", name = "", required = false ) {
        const input = createHTMLElement("input", classList, {id, type, name, required});
        this.#form.append(input);
    }
    addButton(classList = [], id = "", type = "", textContent = "") {
        const button = createHTMLElement("button", classList, {id, type, textContent});
        this.#form.append(button);
    }

    get form() {
        const form = this.#form;
        this.reset();
        return form;
    }
}