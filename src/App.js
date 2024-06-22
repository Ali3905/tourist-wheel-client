import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styledComponents/defaultStyles";
import { darkTheme, lightTheme } from "./styledComponents/themeStyles";
import Route from "./structure/route"
import "./styles/global.css"
export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Route />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;