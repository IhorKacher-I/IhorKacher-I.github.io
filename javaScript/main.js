import {isLogin} from "./functions/isLogin.js";
import getTokenFromCookie from "./functions/getTokenFromCookie.js";
import User from "./modules/User.js";
import Request from "./modules/Request.js";
import {Modal} from "./modules/Modal.js";
import {BASE_URL, root} from "./constants/const.js";
import FormBuilder from "./modules/form/FormBuilder.js";
import FormDirector from "./modules/form/FormDirector.js";
import { changeDoctorFields, createVisitObj } from "./functions/functions.js";
import { Visit } from "./modules/Visit.js";

window.addEventListener("load", (e) => {
    const logInBtn = document.querySelector("#logout-btn");
    logInBtn.addEventListener("click", (e) => {
        if (isLogin()) {
            if (confirm("Do you want to log out?")) {
                User.logOut();
                window.location.href = "login.html";
            }
        }
    })

    const addVisitBtn = document.querySelector("#add-visit-header-btn");
    function addVisit(e) {
        //todo scrot, blur background та скрол поза вікном, закриття по кліку поза вікном
        const createVisitForm = new FormBuilder(["create-visit__form"], "create-visit__form");
        const formDirector = new FormDirector();
        formDirector.setBuilder(createVisitForm);
        formDirector.buildCreateVisitForm();
        const createVisit = new Modal('Create visit', createVisitForm.form).render();
        root.append(createVisit);
        let doctorSelect = document.querySelector('.create-visit__doctor')

        changeDoctorFields(createVisit, formDirector, doctorSelect);

        addVisitBtn.removeEventListener('click', addVisit);

        createVisit.lastChild.addEventListener('submit', (event) => {
            event.preventDefault();
            const promiseObj = new Request().post("", createVisitObj());
            promiseObj.then(obj => {
                new Visit(obj).renderShortCard();
                document.querySelector('.modal-window').remove();
                const sectionCards = document.querySelector(".cards-list");
                sectionCards.prepend(new Visit(obj).renderShortCard());
                addVisitBtn.addEventListener("click", addVisit);
            })



        })
    }
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
        })
    } else {
        window.location.href = "login.html";
    }
})



