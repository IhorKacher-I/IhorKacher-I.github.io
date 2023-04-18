import {body} from "../constants/const.js";

export function removeModal() {
    document.querySelector('#modal').remove();
    body.style["overflow-y"] = "";
}