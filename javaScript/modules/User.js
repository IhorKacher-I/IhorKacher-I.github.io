import Request from "./Request.js";
import Cookie from "./Cookie.js";
import {COOKIE_TOKEN_NAME} from "../constants/const.js";

export default class User {
    static async logIn(dataObj) {
        const request = new Request();
        const token = await request.post("login", dataObj, false);
        request.token = token;
        Cookie.set("token", token);
        if (token) return true;
    }

    static async logOut() {
        Cookie.delete(COOKIE_TOKEN_NAME);
    }
}
