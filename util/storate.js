import { KEY_STORE } from "./constant.js";

export default {
    get() {
        return JSON.parse(localStorage.getItem(KEY_STORE)) || [];
    },
    set(todos) {
        localStorage.setItem(KEY_STORE, JSON.stringify(todos));
    }
}