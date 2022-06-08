import React, { createContext, useState } from "react";

export const Figmacontext = createContext();

export const FigmaProvider = ({ children }) => {
  const [theme, settheme] = useState();

  const Toggletheme = () => {
    if (theme === "light") {
      settheme("dark");
    } else {
      settheme("light");
    }
  };

  return (
    <Figmacontext.Provider
      value={{ theme, islight:theme === "light", Toggletheme }}
    >
      {children}
    </Figmacontext.Provider>
  );
};
