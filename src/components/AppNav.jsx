/* eslint-disable no-constant-condition */
import styled from "styled-components";
import Logo from "../ui/Logo";
import Nav from "../ui/Nav";
import Button from "../ui/Button";
import DarkModeToggle from "./DarkModeToggle";
import Modal from "../ui/Modal";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import { useAuth } from "../context/AuthContext";
import NavProfile from "./NavProfile";
import { FaHeart } from "react-icons/fa";

const StyledNav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  background: var(--color-grey-50);
  box-shadow: var(--shadow-sm);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.5rem;
`;
function AppNav() {
  const { isAuthenticated } = useAuth();
  return (
    <StyledNav>
      <Container>
        <Logo />
        <Nav to="/users/rent">rent</Nav>
        <Nav to="/users/profile">profile</Nav>
        <Nav to="/users/sell">sell</Nav>
      </Container>

      <Container>
        <FaHeart />
        <DarkModeToggle />
        {!isAuthenticated ? (
          <Modal>
            <Modal.Open opens="login">
              <Button variation="secondary">login</Button>
            </Modal.Open>
            <Modal.Window name="login">
              <Login />
            </Modal.Window>
            <Modal.Open opens="signUp">
              <Button>signup</Button>
            </Modal.Open>
            <Modal.Window name="signUp">
              <SignUp />
            </Modal.Window>
          </Modal>
        ) : (
          <NavProfile />
        )}
      </Container>
    </StyledNav>
  );
}

export default AppNav;
