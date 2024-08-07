import AppNav from "../components/AppNav";
import Filter from "../components/Filter";
import PropertyList from "../components/PropertyList";
import Property from "../components/Property";
import Banner from "../components/Banner";

function HomePage() {
  return (
    <>
      <AppNav />
      <Banner />
      <Filter />
      <PropertyList>
        <Property></Property>
        <Property></Property>
        <Property></Property>
        <Property></Property>
        <Property></Property>
        <Property></Property>
      </PropertyList>
    </>
  );
}

export default HomePage;
