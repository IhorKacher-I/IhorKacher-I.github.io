import Request from "../modules/Request.js";
import {arrForSearch, root} from "../constants/const.js";
import {removeModal} from "./removeModal.js";

export function deleteVisitCard(cardID, deleteModal = false) {
    const request = new Request();
    request.delete(cardID).then(data => {
        if (data.status === 200) {
            if (deleteModal) removeModal();
            document.getElementById(cardID).remove();

            let index = arrForSearch.findIndex(el => el.id === cardID);
            arrForSearch.splice(index, 1);
        }
    })
        .catch((e) => alert(e.message))
        .finally(() => {
            const cards = document.querySelectorAll(".card");
            if (cards.length === 0) {
                root.insertAdjacentHTML("beforeend", `
                    <div class="container" id="no-items">
                    <h3 class="no-items" id="noItems">No items have been added</h3>
                    </div>`);
            }
        })
}