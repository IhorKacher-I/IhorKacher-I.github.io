import {COOKIE_TOKEN_NAME} from "../constants/const.js";
import Request from "../modules/Request.js";
import Cookie from "../modules/Cookie.js";


export default function getTokenFromCookie() {
    const request = new Request();
    const tokenFromCookie = Cookie.get(COOKIE_TOKEN_NAME);
    if (tokenFromCookie) {
        request.token = tokenFromCookie;
    }
}