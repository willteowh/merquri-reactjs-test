import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { RoundedButton } from "../../styled/Button.styled";
import { FloatingContainer } from "./styled";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeSwitcher = ({ darkMode, toggleDarkMode }: Props) => {
  // TODO: add localstorage to persists state
  // TODO: add prefers-color-scheme during initialization

  // TODO: there's still white screen even using useLayoutEffect
  return (
    <FloatingContainer>
      <RoundedButton
        //   TODO
        // color={darkMode ? "primary" : "secondary"}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <DarkModeTwoToneIcon></DarkModeTwoToneIcon>
        ) : (
          <LightModeTwoToneIcon></LightModeTwoToneIcon>
        )}
      </RoundedButton>
    </FloatingContainer>
  );
};

export default ThemeSwitcher;
