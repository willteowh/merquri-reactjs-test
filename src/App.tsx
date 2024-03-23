import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./index.css";
import { GlobalStyles } from "./styled/app.styled";
import { darkTheme, lightTheme } from "./theme";
import { AppProvider } from "./AppProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import MainPage from "./MainPage";

function App() {
  // theme - ligh/dark mode
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // on first load
  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(darkMode);
  }, []);

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
