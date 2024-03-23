import lightBg from "./assets/bg-light.png";
import darkBg from "./assets/bg-dark.png";

export interface Theme {
  backgroundImage: string;
  backgroundGradient: {
    color1: string;
    color2: string;
  };
  shadedColor: string;
  shadedColor3: string;
  shadedBorder: string;
  fontColor: {
    primary: string;
    secondary: string;
    positive: string;
  };
}

export const lightTheme: Theme = {
  backgroundImage: lightBg,
  //   TODO: TO remove
  backgroundGradient: {
    color1: "#fefefe",
    color2: "#fefefe",
  },
  shadedColor: "rgba(255,255,255,0.2)",
  shadedColor3: "rgba(255,255,255,0.3)",
  shadedBorder: "1px solid rgba(var(--backdrop-color), 0.5);",
  fontColor: {
    primary: "#ffffff",
    secondary: "rgb(102, 102, 102)",
    positive: "rgb(108, 64, 181)",
  },
};

export const darkTheme: Theme = {
  backgroundImage: darkBg,
  backgroundGradient: {
    color1: "#010101",
    color2: "#010101",
  },
  shadedColor: "rgba(0,0,0,0.2)",
  shadedColor3: "rgba(0,0,0,0.3)",
  shadedBorder: "none",
  fontColor: {
    primary: "#dadada",
    secondary: "#ffffff",
    positive: "#ffffff",
  },
};
