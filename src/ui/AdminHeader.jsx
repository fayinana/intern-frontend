import { IoNotifications } from "react-icons/io5";
import styled from "styled-components";
import DarkModeToggle from "../components/DarkModeToggle";

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

function AdminHeader() {
  return (
    <StyledHeader>
      <HeaderTitle>dashboard</HeaderTitle>
      <HeaderItems>
        <Icon>
          <IoNotifications />
        </Icon>
        <DarkModeToggle />
      </HeaderItems>
    </StyledHeader>
  );
}

export default AdminHeader;
