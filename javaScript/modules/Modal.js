import Request from "./Request.js";
import Form from "./form/Form.js";
import FormBuilder from "./form/FormBuilder.js";
import FormDirector from "./form/FormDirector.js";
import createHTMLElement from "../functions/createHTMLElement.js";
import { svgCloseIcon } from "../constants/const.js";

export class Modal {
  constructor(title, form) {
    this.title = title;
    this.form = form;
  }
  render() {
    const createModalWindow = createHTMLElement("div", ["modal-window"]);
    const windowHeader = createHTMLElement("div", ["modal-window__header"]);
    const windowTitle = createHTMLElement("h2", ["header__title"]);
    windowTitle.innerText = this.title;
    const windowCloseButton = createHTMLElement("span", [
      "header__close-button",
    ]);
    windowCloseButton.innerHTML = svgCloseIcon;
    windowHeader.append(windowTitle, windowCloseButton);
    createModalWindow.append(windowHeader);
    windowCloseButton.addEventListener("click", () => {
      createModalWindow.remove();
    });

    //form має бути розміткою уже того типу який нам потрібен
    if (this.form instanceof HTMLFormElement) {
      windowHeader.after(this.form);
    } //todo тут напишу логіку для card full info в else для обробки об'єкту
    return createModalWindow;
  }
}
