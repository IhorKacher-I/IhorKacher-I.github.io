/**
 * This class uses The Builder pattern
 * learn more -> https://refactoring.guru/uk/design-patterns/builder
 */
import createHTMLElement from "../../functions/createHTMLElement.js";
export default class Form {
    constructor(className, id) {
        this.className = className;
        this.id = id;
    }

    render() {
        return createHTMLElement("form", this.className, {"id" : this.id});
    }
}