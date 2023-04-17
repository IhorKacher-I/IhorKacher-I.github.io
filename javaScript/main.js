import {isLogin} from "./functions/isLogin.js";
import getTokenFromCookie from "./functions/getTokenFromCookie.js";
import User from "./modules/User.js";
import Request from "./modules/Request.js";
import {root} from "./constants/const.js";
import {addVisit} from "./functions/functions.js";
import {VisitDentist} from "./modules/visit/VisitDentist.js";
import {VisitCardiologist} from "./modules/visit/VisitCardiologist.js";
import {VisitTherapist} from "./modules/visit/VisitTherapist.js";
import FormBuilder from "./modules/form/FormBuilder.js";
import FormDirector from "./modules/form/FormDirector.js";

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
        // ПИСАТИ ВСЕ ТУТ НИЖЧЕ!!!!!!!

        const builder = new FormBuilder(["search-form"],  "search-form");
        const director = new FormDirector();
        director.setBuilder(builder);
        director.buildFilterForm();
        document.querySelector(".filters").append(builder.form);

        const request = new Request().get('');
        request.then(data => {
            if (data.length === 0) {
                root.insertAdjacentHTML("afterbegin", `
                    <div class="container" id="no-items">
                    <h3 class="no-items" id="noItems">No items have been added</h3>
                    </div>`);
            }
            const liArray = data.map(obj => {
                switch (obj.doctorName) {
                    case "dentist":
                        return new VisitDentist(obj).renderShortCard();
                    case "cardiologist":
                        return new VisitCardiologist(obj).renderShortCard();
                    default:
                        return new VisitTherapist(obj).renderShortCard();
                }
            });
            document.querySelector(".cards-list").append(...liArray);
        });

    } else {
        window.location.href = "login.html";
    }
})



