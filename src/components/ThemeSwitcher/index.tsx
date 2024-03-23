import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { RoundedButton } from "../../styled/Button.styled";
import { FloatingContainer } from "./styled";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeSwitcher = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <FloatingContainer>
      <RoundedButton onClick={toggleDarkMode}>
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
