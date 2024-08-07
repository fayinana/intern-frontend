import styled from "styled-components";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
// import DashBoardLayout from "../components/DashboardLayout";
// import TenancyApplications from "../pages/TenancyApplications";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 23rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  padding: 1rem;
  overflow: auto;
`;

function AdminPageLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <AdminHeader />
      <Main>
        {/* <TenancyApplications></TenancyApplications> */}
        {/* <DashBoardLayout /> */}
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AdminPageLayout;
