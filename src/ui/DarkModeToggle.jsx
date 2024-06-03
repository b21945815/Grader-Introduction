import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "./ButtonIcon";
import useDarkMode from "../hooks/useDarkMode";
export default function DarkModeToggle({ size }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? (
        <FontAwesomeIcon
          icon={faSun}
          color="#0b66ac"
          size={size ? size : "sm"}
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          color="#0b66ac"
          size={size ? size : "sm"}
        />
      )}
    </ButtonIcon>
  );
}
