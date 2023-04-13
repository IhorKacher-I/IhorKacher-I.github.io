import {isLogin} from "./functions/isLogin.js";
import getTokenFromCookie from "./functions/getTokenFromCookie.js";
import User from "./modules/User.js";
import Request from "./modules/Request.js";
import {Modal} from "./modules/Modal.js";
import { root } from "./constants/const.js";
import FormBuilder from "./modules/form/FormBuilder.js";
import FormDirector from "./modules/form/FormDirector.js";
import {removeElementCollection} from "./functions/functions.js";

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
    addVisitBtn.addEventListener("click", (e) => {
    //todo записати все що нижче у функцію і видаляти лісенер щоб не спрацьовував повторний клік
        //todo scrot, blur background та скрол поза вікном, закриття по кліку поза вікном
        //todo записати все що нижче у функцію і видаляти лісенер щоб не спрацьовував повторний клік

        const createVisitForm = new FormBuilder(["create-visit__form"]);
        const formDirector = new FormDirector();
        formDirector.setBuilder(createVisitForm);
        formDirector.buildCreateVisitForm();
        const createVisit = new Modal('Create visit', createVisitForm.form).render();
        root.append(createVisit);
        let doctor = document.querySelector('.doctor__select')
        doctor.addEventListener('change', () => {
            switch (event.target.value) {
                case 'cardiologist': {
                    removeElementCollection('.additional-fields');
                    createVisit.lastChild.append(...formDirector.addCardiologistFields());
                }
                break;
                case 'dentist': {
                    removeElementCollection('.additional-fields');
                    createVisit.lastChild.append(formDirector.addDentistFields());
                }
                    break;
                case 'therapist': {
                    removeElementCollection('.additional-fields');
                    createVisit.lastChild.append(formDirector.addTherapistFields());
                }
                    break;
                default:
                    removeElementCollection('.additional-fields');
            }
        })
    })


    if (isLogin()) {
        getTokenFromCookie();
        root.insertAdjacentHTML("afterbegin", `<div class="container"><h3>No items</h3></div>`);
        // ПИСАТИ ВСЕ ТУТ НИЖЧЕ!!!!!!!
        const request = new Request();
        // request.post("", {
        //     title: 'Визит к кардиологу',
        //     description: 'Плановый визит',
        //     doctor: 'Cardiologist',
        //     bp: '24',
        //     age: 23,
        //     weight: 70
        // }).then(data => console.log(data));
        // request.get("").then(data => console.log(data));
        // request.delete("161581").then(data => console.log(data));
        // request.put("161580", {id: 161580,
        //     title: 'Визит к кардиологу',
        //     description: 'Новое описание визита',
        //     doctor: 'Cardiologist',
        //     bp: '24',
        //     age: 23,
        //     weight: 70}).then(data => console.log(data));
        // request.get("").then(data => console.log(data));
    } else {
        window.location.href = "login.html";
    }
})



