import {isLogin} from "./functions/isLogin.js";
import getTokenFromCookie from "./functions/getTokenFromCookie.js";
import User from "./modules/User.js";
import Request from "./modules/Request.js";

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
        console.log("Потрібно додати логіку створення візиту");
    })

    const root = document.querySelector("#main");

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



