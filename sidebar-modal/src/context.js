import React from 'react';
import { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="hello world">{children}</AppContext.Provider>
  );
};
//Custom Hook
 export const useGlobalContext = () => {
   return useContext(AppContext);
 }


export { AppContext, AppProvider };