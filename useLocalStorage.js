import { useState } from "react";

export default function useLocalStorage(key) {
    const [value, setValue] = useState(localStorage.getItem(key));
    function setItem(value) {
        localStorage.setItem(key, value);
        setValue(value);
    }
    function removeItem() {
        localStorage.removeItem(key);
        setValue(null);
    }
    return [value, { setItem, removeItem }];
}
