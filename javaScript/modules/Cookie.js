export default class Cookie {
    static set(key, value) {
      const now = new Date();
      const time = now.getTime();
      now.setTime(time + 1000 * 3600);
        document.cookie = `${key}=${value};expires=${now.toUTCString()};path=/`;

    }

    static get(key) {
        return document.cookie.split("; ").reduce((accum, el) => {
            const [key, value] = el.split("=");
            accum[key] = value;
            return accum;
        }, {})[key];
    }

    static delete(key) {
        Cookie.set(key, "");
    }
}