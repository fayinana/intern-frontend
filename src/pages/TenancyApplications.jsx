import styled from "styled-components";
import TenantDetail from "../components/TenantDetail";
import Table from "../ui/TableHeader";

const StyledTenancyApplications = styled.div`
  display: grid;
  grid-template-columns: 1fr 35rem;
  gap: 2rem;
`;

function TenancyApplications() {
  return (
    <StyledTenancyApplications>
      <Table columns="1fr 1fr 1fr 1fr .5fr">
        <Table.Header>
          <div>Applied</div>
          <div>Tenant</div>
          <div>total income</div>
          <div>income to rent</div>
          <div></div>
        </Table.Header>

        <Table.Body />
      </Table>

      <TenantDetail />
    </StyledTenancyApplications>
  );
}

export default TenancyApplications;
