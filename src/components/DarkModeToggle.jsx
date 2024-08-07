import { MdDarkMode, MdLightMode } from "react-icons/md";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
const Icon = styled.span`
  color: var(--color-brand-600);
  font-size: 2rem;
  cursor: pointer;
`;
function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Icon onClick={toggleDarkMode}>
      {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
    </Icon>
  );
}

export default DarkModeToggle;
