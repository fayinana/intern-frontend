import styled from "styled-components";
import AppNav from "../components/AppNav";
import Filter from "../components/Filter";
import PropertyList from "../components/PropertyList";
import Property from "../components/Property";
import Detail from "./Detail";
import Login from "./Login";
import SignUp from "./SignUp";
import UserProfile from "../components/UserProfile";
const Banner = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, var(--color-grey-100) 50%, transparent),
    url("map.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;
const BannerInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2rem;
`;
const HeroTitle = styled.h1`
  color: var(--color-grey-900);
  font-size: 3.75rem;
  max-width: 300px;
  /* text-transform: capitalize; */
  font-weight: 700;
  line-height: 1.1;
`;

const HeroText = styled.p`
  color: var(--color-grey-800);
  font-size: 1.15rem;
  max-width: 400px;
  font-weight: 600;
`;

const ReportContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
`;
const ReportInfo = styled.span`
  max-width: 100px;
  text-align: center;
  display: inline;
  color: var(--color-brand-500);
  font-size: 2.5rem;
  font-weight: 600;
  padding: 0 3rem;
  border-left: 2px solid var(--color-grey-300);
  line-height: 1.5;
`;

const Type = styled.p`
  font-size: 1.125rem;
  color: var(--color-grey-500);
  text-transform: capitalize;
`;

const SearchContainer = styled.div`
  width: 80%;
  height: 100px;
  background: var(--color-grey-0);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: var(--shadow-md);
`;

const BannerImage = styled.div`
  width: 50%;
  height: 100%;
`;

function HomePage() {
  return (
    <>
      <AppNav />
      <Banner>
        <BannerInfo>
          <HeroTitle>Buy, rent or sell your property easily</HeroTitle>
          <HeroText>
            a great platform to buy, sell, or even rent your properties without
            any commission
          </HeroText>
          <ReportContainer>
            <ReportInfo>
              50k+
              <Type>rent</Type>
            </ReportInfo>
            <ReportInfo>
              100k+
              <Type>rent</Type>
            </ReportInfo>
          </ReportContainer>
          <SearchContainer>a</SearchContainer>
        </BannerInfo>
        <BannerImage></BannerImage>
      </Banner>
      <Filter />
      <PropertyList>
        <Property></Property>
        <Property></Property>
        <Property></Property>
        <Property></Property>
        <Property></Property>
        <Property></Property>
      </PropertyList>
      <SignUp />
      <UserProfile />
      <Detail />

      <Login />
    </>
  );
}

export default HomePage;
