import { isLogin } from "./functions/isLogin.js";
import getTokenFromCookie from "./functions/getTokenFromCookie.js";
import User from "./modules/User.js";
import Request from "./modules/Request.js";
import {root,  arrForSearch} from "./constants/const.js";
import {addVisit} from "./functions/functions.js";
import {VisitDentist} from "./modules/visit/VisitDentist.js";
import {VisitCardiologist} from "./modules/visit/VisitCardiologist.js";
import {VisitTherapist} from "./modules/visit/VisitTherapist.js";
import {createFilterForm} from "./functions/createFilterForm.js";
window.addEventListener("load", () => {
  const logOutBtn = document.querySelector("#logout-btn");
  logOutBtn.addEventListener("click", () => {
      if (confirm("Do you want to log out?")) {
          User.logOut();
          window.location.href = "login.html";
      }
  });

    const addVisitBtn = document.querySelector("#add-visit-header-btn");
    addVisitBtn.addEventListener("click", addVisit);

    if (isLogin()) {
        getTokenFromCookie();
        // ПИСАТИ ВСЕ ТУТ НИЖЧЕ!!!!!!!
        // 164587
// new Request().delete("164599");


       const filterForm = createFilterForm(["filter__header"],  "search-form");
        document.querySelector(".filter__container").append(filterForm);

        const request = new Request().get('');
        request.then(data => {
            if (data.length === 0) {
                root.insertAdjacentHTML("beforeend", `
                    <div class="container" id="no-items">
                    <h3 class="no-items" id="noItems">No items have been added</h3>
                    </div>`);
            }

            arrForSearch.push(...data);

            const liArray = data.map(obj => {
                switch (obj.doctorName) {
                    case "Dentist":
                        return new VisitDentist(obj).renderShortCard();
                    case "Cardiologist":
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
});
