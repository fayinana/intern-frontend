import { GiPoland } from "react-icons/gi";
import { HiHeart } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import styled from "styled-components";
import Button from "../ui/Button";

const StyledProperty = styled.div`
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: var(--color-grey-0);
  gap: 5%;
  box-shadow: var(--shadow-md);
  border-radius: 5px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 5px;
  overflow: hidden;
`;

const StyledInfo = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
`;

const StyledName = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-grey-400);
`;

const Name = styled.p`
  color: var(--color-grey-900);
  font-size: 2rem;
  font-weight: 700;
  text-transform: capitalize;
`;

const Place = styled.p`
  color: var(--color-grey-400);
  font-size: 1.25rem;
  font-weight: 100;
`;
const FevIcon = styled.span`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px var(--color-grey-200);
  color: var(--color-brand-600);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const StyledFeatures = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const StyledFeature = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: calc() 0.25rem;
`;

const FeatureIcon = styled.div`
  color: var(--color-brand-600);
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;
const FeatureText = styled.div`
  color: var(--color-grey-500);
  font-size: 1rem;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
`;

const StyledPrice = styled.div`
  width: 100%;
  height: 35%;
  background: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 5px;
`;

const StyledCurrency = styled.p`
  color: var(--color-brand-600);
  font-weight: 700;
  font-size: 2rem;
`;

function Property() {
  return (
    <StyledProperty>
      <StyledImage src="house-1.jpg" />
      <StyledInfo>
        <StyledName>
          <div>
            <Name>luxury house</Name>
            <Place>2345 silver , palm harbor , tx</Place>
          </div>
          <FevIcon>
            <HiHeart />
          </FevIcon>
        </StyledName>
        <StyledFeatures>
          <StyledFeature>
            <FeatureIcon>
              <IoBedOutline />
            </FeatureIcon>
            <FeatureText>4 beds</FeatureText>
          </StyledFeature>
          <StyledFeature>
            <FeatureIcon>
              <LuBath />
            </FeatureIcon>
            <FeatureText>2 bath</FeatureText>
          </StyledFeature>
          <StyledFeature>
            <FeatureIcon>
              <GiPoland />
            </FeatureIcon>
            <FeatureText>4 sq m</FeatureText>
          </StyledFeature>
        </StyledFeatures>
        <StyledPrice>
          <StyledCurrency>23</StyledCurrency>
          <Button>apply now</Button>
        </StyledPrice>
      </StyledInfo>
    </StyledProperty>
  );
}

export default Property;
