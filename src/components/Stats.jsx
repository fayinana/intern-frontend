import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";

function Stats() {
  return (
    <>
      <Stat title="Bookings" color="blue" icon={<HiOutlineBriefcase />} />
      <Stat title="Sales" color="green" icon={<HiOutlineBanknotes />} />
      <Stat title="Check ins" color="indigo" icon={<HiOutlineCalendarDays />} />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
