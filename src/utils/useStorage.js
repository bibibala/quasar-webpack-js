import { LocalStorage, SessionStorage } from "quasar";

const key = {
    lang: "en",
    token: "Access-Token",
};

// 设置用户token
export function setToken(data) {
    SessionStorage.set(key.token, data);
}

export function getToken() {
    return SessionStorage.getItem(key.token);
}

/**
 *
 * @returns {boolean}
 */
export function haveToken() {
    return SessionStorage.has(key.token);
}

// lang
export function setLang(data) {
    LocalStorage.set(key.lang, data);
}

export function getLangLa() {
    return LocalStorage.getItem(key.lang);
}

/**
 *
 * @returns {boolean}
 */
export function haveLang() {
    return LocalStorage.has(key.lang);
}

// 清除所有缓存
export function clearStorage() {
    SessionStorage.clear();
}
