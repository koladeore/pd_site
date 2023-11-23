"use client"
import React, { createContext, useState, useContext } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    return(
        <AppContext.Provider value={{ open, setOpen }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
};