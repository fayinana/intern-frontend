import { MdHomeWork } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledLogo = styled.span`
  display: inline;
  color: var(--color-brand-700);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-right: 5rem;
  padding: 0.5rem 1rem;
  ${(props) => sizes[props.size]}
`;

const sizes = {
  sm: css`
    font-size: 0.75rem;
  `,
  md: css`
    font-size: 1.5rem;
  `,
  lg: css`
    font-size: 1.75rem;
  `,
};
const LogoName = styled.h4`
  letter-spacing: 1px;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0;
`;
StyledLogo.defaultProps = {
  size: "md",
};
function Logo() {
  return (
    <NavLink to="/">
      <StyledLogo>
        <MdHomeWork />
        <LogoName>Adama Home</LogoName>
      </StyledLogo>
    </NavLink>
  );
}

export default Logo;
