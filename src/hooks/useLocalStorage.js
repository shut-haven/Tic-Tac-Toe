import { useState } from "react";

function useLocalStorage(key, initVal) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        if (typeof window === "undefined") {
            return initVal;
          }

        const value = window.localStorage.getItem(key);
  
        if (value) {
          return JSON.parse(value);
        } else {
          window.localStorage.setItem(key, JSON.stringify(initVal));
          return initVal;
        }
      } catch (err) {
          console.log(err);
            return initVal;
      }
    });
  
    const setValue = (value) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore)
        if (typeof window !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          }
      } catch (err) {
          console.log(err);
      }
    };
  
    return [storedValue, setValue];
  };

  export default useLocalStorage;