import { IoNotifications } from "react-icons/io5";
import styled from "styled-components";
import DarkModeToggle from "../components/DarkModeToggle";
import NavProfile from "../components/NavProfile";

const StyledHeader = styled.header`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-0);
  padding: 0 3rem;
`;

const HeaderTitle = styled.h3`
  color: var(--color-grey-900);
  text-transform: capitalize;
  font-weight: 700;
`;

const HeaderItems = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

const Icon = styled.span`
  color: var(--color-brand-600);
  font-size: 2rem;
`;

const Search = styled.input`
  width: 100%;
  min-width: 280px;
  max-width: ${(props) => (props.type === "checkbox" ? "40px" : "300px")};
  border: 1px solid var(--color-brand-100);
  border-radius: 7px;
  font-size: 1.5rem;
  padding: 0.75rem;
  color: var(--color-grey-900);
  background: var(--color-grey-50);

  &:disabled {
    background: var(--color-grey-200);
  }

  &::placeholder {
    color: var(--color-grey-500);
  }
`;

function UserHeader() {
  return (
    <StyledHeader>
      <HeaderTitle>profile</HeaderTitle>
      <Search type="search" />
      <HeaderItems>
        <Icon>
          <IoNotifications />
        </Icon>
        <DarkModeToggle />
        <NavProfile />
      </HeaderItems>
    </StyledHeader>
  );
}

export default UserHeader;
