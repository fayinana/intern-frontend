import styled from "styled-components";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import EditProfile from "../pages/EditProfile";

const Image = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
`;

const ProfileContainer = styled.div`
  width: 270px;
  height: 400px;
  border-radius: 10px;
  background: var(--color-grey-0);
  padding: 2rem;
  margin: 5rem;
  text-align: center;
  box-shadow: var(--shadow-md);
`;

const Name = styled.p`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  text-align: center;
  line-height: 3;
  color: var(--color-grey-900);
`;

const Field = styled.div`
  background: var(--color-grey-100);
  color: var(--color-grey-500);
  letter-spacing: 1px;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  padding: 1.2rem 1rem 1rem 1rem;
  margin: 1.5rem 0;
  position: relative;
  font-size: 1.5rem;
  text-align: start;
`;

const FieldType = styled.span`
  color: var(--color-grey-400);
  letter-spacing: 1px;
  text-transform: capitalize;
  position: absolute;
  top: 0rem;
  left: 1rem;
  font-size: 1.1rem;
`;

function UserProfile() {
  return (
    <ProfileContainer>
      <Image>
        <img src="house-1.jpg" alt="" />
      </Image>
      <Name>aman banti</Name>

      <Field>
        amanbanti@gmail.com
        <FieldType>email</FieldType>
      </Field>
      <Field>
        aman banti
        <FieldType>name</FieldType>
      </Field>
      <Field>
        admin
        <FieldType>role</FieldType>
      </Field>

      <Modal>
        <Modal.Open opens="profile">
          <Button>edit profile</Button>
        </Modal.Open>
        <Modal.Window name="profile">
          <EditProfile />
        </Modal.Window>
      </Modal>
    </ProfileContainer>
  );
}

export default UserProfile;
