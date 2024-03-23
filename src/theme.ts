import lightBg from "./assets/bg-light.png";
import darkBg from "./assets/bg-dark.png";

export interface Theme {
  mode: string;
  backgroundImage: string;
  backgroundGradient: {
    color1: string;
    color2: string;
  };
  shadedColor: string;
  shadedColor3: string;
  shadedColor4: string;
  shadedBorder: string;
  fontColor: {
    default: string;
    primary: string;
    secondary: string;
    positive: string;
  };
  button: {
    default: {
      hoverFilter?: string;
      color?: string;
      bgColor?: string;
      opacity?: number;
    };
  };
}

export const lightTheme: Theme = {
  mode: "light",
  backgroundImage: lightBg,
  //   TODO: TO remove
  backgroundGradient: {
    color1: "#fefefe",
    color2: "#fefefe",
  },
  shadedColor: "rgba(255, 255, 255, 0.2)",
  shadedColor3: "rgba(255, 255, 255, 0.3)",
  shadedColor4: "rgba(255, 255, 255, 0.4)",
  shadedBorder: "1px solid rgba(255, 255, 255, 0.5);",
  fontColor: {
    default: "#000000",
    primary: "#ffffff",
    secondary: "rgb(102, 102, 102)",
    positive: "rgb(108, 64, 181)",
  },
  button: {
    default: {
      hoverFilter: "brightness(90%)",
      bgColor: "white",
      opacity: 1,
    },
  },
};

export const darkTheme: Theme = {
  mode: "dark",
  backgroundImage: darkBg,
  backgroundGradient: {
    color1: "#010101",
    color2: "#010101",
  },
  shadedColor: "rgba(0, 0, 0, 0.2)",
  shadedColor3: "rgba(0, 0, 0, 0.3)",
  shadedColor4: "rgba(0, 0, 0, 0.4)",
  shadedBorder: "none",
  fontColor: {
    default: "#dadada",
    primary: "#dadada",
    secondary: "#ffffff",
    positive: "#ffffff",
  },
  button: {
    default: {
      hoverFilter: "brightness(50%)",
      color: "white",
      bgColor: "transparent",
      opacity: 0.5,
    },
  },
};
