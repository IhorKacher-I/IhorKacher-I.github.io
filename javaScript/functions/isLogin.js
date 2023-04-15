import Cookie from "../modules/Cookie.js";

export const isLogin =  () => {
    const token = Cookie.get("token");
    return token && token.length !== 0;
}