import styled from "styled-components";

const StyledProfile = styled.div`
  margin-left: 1rem;
  min-width: 150px;
  height: 40px;
  background: var(--color-grey-100);
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  box-shadow: var(--shadow-md);

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const Name = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-grey-900);
  text-transform: capitalize;
`;
function NavProfile() {
  return (
    <StyledProfile>
      <ProfileImage>
        <img src="house-1.jpg" alt="" />
      </ProfileImage>
      <Name>aman banti</Name>
    </StyledProfile>
  );
}

export default NavProfile;
