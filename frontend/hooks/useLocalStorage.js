import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storage, setStorage] = useState(() => {
    const storedValue = JSON.parse(LocalStorage.getItem(key));
    return storedValue != null ? storedValue : initialValue;
  });
  const updateStorage = (value) => {
    LocalStorage.setItem(key, JSON.stringify(value));
    setStorage(value);
  };
  return [storage, setStorage];
};
