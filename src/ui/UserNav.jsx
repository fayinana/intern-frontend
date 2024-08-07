import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  list-style: none;
  padding: 1rem 2.4rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function UserNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="dashboard">
            <HiOutlineHome />
            <span> Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="notification">
            <HiOutlineCalendarDays />
            <span>your property</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="addProperty">
            <HiOutlineHomeModern />
            <span>add property</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="favorite">
            <HiOutlineUsers />
            <span>favorite</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="message">
            <HiOutlineUsers />
            <span>message</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="logout">
            <CiLogout />
            <span>log out</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default UserNav;
