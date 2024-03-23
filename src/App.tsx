import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./index.css";
import { GlobalStyles } from "./styled/app.styled";
import { darkTheme, lightTheme } from "./theme";
import { AppProvider } from "./AppProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import MainPage from "./MainPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ThemeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <AppProvider>
        <MainPage></MainPage>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
