import styled from "styled-components";
import UserProfile from "../components/UserProfile";
import { Outlet } from "react-router-dom";

const ProfileLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  gap: 2rem;
`;

function Profile() {
  return (
    <ProfileLayout>
      <Outlet />
      <UserProfile />
    </ProfileLayout>
  );
}

export default Profile;
