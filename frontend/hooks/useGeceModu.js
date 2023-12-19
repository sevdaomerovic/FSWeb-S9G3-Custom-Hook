import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useGeceModu = (initialValue) => {
  //   const storedValue = LocalStorage.getItem("darkMode");
  //   const value = storedValue != null ? storedValue : initialValue;

  const [darkMode, setDarkMode] = useLocalStorage("geceModu", initialValue);
  //   useEffect(() => {
  //     LocalStorage.setItem("darkMode", darkMode);
  //   }, [darkMode]);
  return [darkMode, setDarkMode];
};
