import React, { createContext, useContext, useState } from "react";

const TitleContext = createContext("Home");

export const TitlePageProvider = ({ children }) => {
  const [titleMenu, setTitleMenu] = useState("Home");
  return (
    <TitleContext.Provider value={{ titleMenu, setTitleMenu }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitlePage = () => useContext(TitleContext);
