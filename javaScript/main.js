import {isLogin} from "./functions/isLogin.js";
import getTokenFromCookie from "./functions/getTokenFromCookie.js";
import User from "./modules/User.js";
import Request from "./modules/Request.js";
import { root } from "./constants/const.js";
import { addVisit } from "./functions/functions.js";
import { Visit } from "./modules/Visit.js";

window.addEventListener("load", () => {
    const logInBtn = document.querySelector("#logout-btn");
    logInBtn.addEventListener("click", () => {
        if (isLogin()) {
            if (confirm("Do you want to log out?")) {
                User.logOut();
                window.location.href = "login.html";
            }
        }
    })

    const addVisitBtn = document.querySelector("#add-visit-header-btn");
    addVisitBtn.addEventListener("click", addVisit);



    if (isLogin()) {
        getTokenFromCookie();
        root.insertAdjacentHTML("afterbegin", `<div class="container"><h3>No items</h3></div>`);
        // ПИСАТИ ВСЕ ТУТ НИЖЧЕ!!!!!!!

        const request = new Request().get('');
        request.then(data => {
            const liArray = data.map(obj => {
                return new Visit(obj).renderShortCard();
            });
            document.querySelector(".cards-list").append(...liArray);
        });

    } else {
        window.location.href = "login.html";
    }
})



