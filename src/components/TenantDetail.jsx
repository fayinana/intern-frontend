import styled from "styled-components";
import Button from "../ui/Button";

const StyledTenantDetail = styled.div`
  height: 400px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: var(--color-grey-0);
  border: 0.1px solid var(--color-brand-700);
  border-radius: 5px;
  box-shadow: var(--shadow-md);
  margin: 0 auto;
`;

const PersonalDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  height: 30%;
`;

const ProfilePhoto = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;
`;

const NameDetail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

const Name = styled.p`
  font-size: 2rem;
  color: var(--color-grey-900);
  text-transform: capitalize;
`;

const Roll = styled.p`
  font-size: 1.5rem;
  color: var(--color-grey-500);
  text-transform: capitalize;
`;

const SomeDetail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${(props) => props.border && "1px solid var(--color-grey-300)"};
  padding: 1.25rem 0;
`;

const Text = styled.span`
  font-size: 1.5rem;
  color: var(--color-grey-900);
  text-transform: capitalize;
  font-weight: 550;
`;

function TenantDetail() {
  return (
    <StyledTenantDetail>
      <PersonalDetail>
        <ProfilePhoto>
          <img src="house-1.jpg" alt="" />
        </ProfilePhoto>
        <NameDetail>
          <Name>jonas junior</Name>
          <Roll>seller</Roll>
        </NameDetail>
      </PersonalDetail>

      <SomeDetail border={true}>
        <Roll>applied</Roll>
        <Text>dec 9,11.00 am</Text>
      </SomeDetail>
      <SomeDetail border={true}>
        <Roll>occupants</Roll>
        <Text>1 person</Text>
      </SomeDetail>

      <SomeDetail border={true}>
        <Roll>income</Roll>
        <Text></Text>
      </SomeDetail>

      <SomeDetail>
        <Roll>total income</Roll>
        <Text>$4,500</Text>
      </SomeDetail>

      <SomeDetail>
        <Roll>income to rent</Roll>
        <Text>2.3x</Text>
      </SomeDetail>
      <Button>view application</Button>
    </StyledTenantDetail>
  );
}

export default TenantDetail;
