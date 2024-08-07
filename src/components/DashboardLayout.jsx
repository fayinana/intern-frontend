import styled from "styled-components";
import TypeChart from "./TypeChart";
import Chart from "./Chart";
import NewApplications from "./NewApplications";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 30rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats />
      <NewApplications />
      <TypeChart />
      <Chart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
