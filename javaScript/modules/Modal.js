import createHTMLElement from "../functions/createHTMLElement.js";
import { svgCloseIcon, body} from "../constants/const.js";
import { createFullInfoBody } from "../functions/createFullInfoBody.js";


export class Modal {
    constructor(title, form) {
        this.title = title;
        this.form = form;
    }
    render() {
        document.body.style["overflow-y"] = "hidden";

        const modal = createHTMLElement('div', ["modal"], {"id":  "modal"});
        const createModalWindow = createHTMLElement('div', ['modal-window'],);

        const windowHeader =  createHTMLElement('div', ['modal-window__header'],);
        const windowTitle = createHTMLElement('h2', ['header__title'],);
        windowTitle.innerText = this.title;
        const windowCloseButton = createHTMLElement('span', ['header__close-button'],);
        windowCloseButton.innerHTML = svgCloseIcon

        modal.append(createModalWindow);
        windowHeader.append(windowTitle, windowCloseButton);
        createModalWindow.append(windowHeader);
        windowCloseButton.addEventListener('click', () => {
            modal.remove();
            body.style["overflow-y"] = "";
        });

        if (this.form instanceof HTMLFormElement) {
            windowHeader.after(this.form)
        } else {
            windowHeader.after(createFullInfoBody(this.form));

        }

        modal.addEventListener("click", (event) => {
            if(event.target.className === "modal"){
                modal.remove();
                body.style["overflow-y"] = "";
            }
        });

        return modal;
    }

}