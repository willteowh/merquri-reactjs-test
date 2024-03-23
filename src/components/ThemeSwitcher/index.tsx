import React, { useState, useLayoutEffect } from "react";
import { Fab } from "@mui/material";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import "./style.css"; // for ES6 modules

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleIsDark = () => {
    setIsDark(!isDark);
  };

  // TODO: add localstorage to persists state
  // TODO: add prefers-color-scheme during initialization

  //   TODO: there's still white screen even using useLayoutEffect
  useLayoutEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="fab-container">
      <Fab
        color={isDark ? "primary" : "secondary"}
        className="float-bottom-right"
        onClick={toggleIsDark}
        aria-label="Dark mode toggle"
      >
        {isDark ? (
          <DarkModeTwoToneIcon></DarkModeTwoToneIcon>
        ) : (
          <LightModeTwoToneIcon></LightModeTwoToneIcon>
        )}
      </Fab>
    </div>
  );
};

export default ThemeSwitcher;
