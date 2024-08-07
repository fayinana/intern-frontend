/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled(NavLink)`
  list-style: none;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.5rem 2.4rem;
  text-transform: capitalize;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s ease-in-out;

  &:link,
  &:visited {
    color: var(--color-grey-900);
    background-color: transparent;
  }

  &:hover,
  &:active,
  &.active {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1rem;
    color: var(--color-grey-400);
    transition: color 0.3s ease-in-out;
  }

  &:hover svg,
  &:active svg,
  &.active svg {
    color: var(--color-grey-600);
  }
`;

function Nav({ children, to }) {
  return <StyledNav to={to}>{children}</StyledNav>;
}

export default Nav;
