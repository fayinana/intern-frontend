import styled from "styled-components";
import Table from "../ui/TableHeader";
import Filter from "./Filter";
import PropertyTableRow from "./PropertyTableRow";

const StyledTenancyApplications = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;
const data = [
  {
    name: "aman banti",
    email: "aman@gmail.com",
    income: 123,
    incoming: 234,
  },
  {
    name: "aman banti",
    email: "aman@gmail.com",
    income: 123,
    incoming: 234,
  },
  {
    name: "aman banti",
    email: "aman@gmail.com",
    income: 123,
    incoming: 234,
  },
  {
    name: "aman banti",
    email: "aman@gmail.com",
    income: 123,
    incoming: 234,
  },
];
function AllProperties() {
  return (
    <StyledTenancyApplications>
      <Filter />
      <Table columns="1fr 1fr 1fr 1fr .5fr">
        <Table.Header>
          <div>Applied</div>
          <div>Tenant</div>
          <div>total income</div>
          <div>income to rent</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={data}
          render={(cabin) => <PropertyTableRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </StyledTenancyApplications>
  );
}

export default AllProperties;
