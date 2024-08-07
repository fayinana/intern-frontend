import styled from "styled-components";
import Table from "../ui/TableHeader";
import PropertyTableRow from "../components/PropertyTableRow";
const StyledTenancyApplications = styled.div`
  width: 100%;
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
];
function BookedPropertyList() {
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

        <Table.Body
          data={data}
          render={(cabin) => <PropertyTableRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </StyledTenancyApplications>
  );
}

export default BookedPropertyList;
