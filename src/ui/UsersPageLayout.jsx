import styled from "styled-components";
import UserSidebar from "./UserSideBar";
import UserHeader from "./UserHeader";
import Profile from "../pages/Profile";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
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

function UsersPageLayout() {
  return (
    <StyledAppLayout>
      <UserSidebar />
      <UserHeader />
      <Main>
        <Profile></Profile>
      </Main>
    </StyledAppLayout>
  );
}

export default UsersPageLayout;

//       <Sidebar />
// // function AdminPageLayout() {
// //   return (
// //     <StyledAppLayout>
// //       <AdminHeader />
// //       <Main>
// //         {/* <TenancyApplications></TenancyApplications> */}
// //         {/* <DashBoardLayout /> */}
// //         <Outlet />
// //       </Main>
// //     </StyledAppLayout>
// //   );
// // }

// // export default AdminPageLayout;
