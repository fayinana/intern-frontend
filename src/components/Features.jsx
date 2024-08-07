import { IoBedOutline } from "react-icons/io5";
import styled from "styled-components";

const StyledFeatures = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border: 1px solid var(--color-grey-300);
  background: var(--color-grey-0);
  border-radius: 5px;
`;

const StyledFeature = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: 0.5rem;
`;

const FeatureIcon = styled.span`
  color: var(--color-grey-500);
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const FeatureValue = styled.span`
  color: var(--color-grey-900);
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const FeatureType = styled.span`
  color: var(--color-grey-500);
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: capitalize;
`;
function Features() {
  return (
    <StyledFeatures>
      <StyledFeature>
        <FeatureType>bedrooms</FeatureType>
        <FeatureIcon>
          <IoBedOutline />
          <FeatureValue>4</FeatureValue>
        </FeatureIcon>
      </StyledFeature>
      <StyledFeature>
        <FeatureType>bath room</FeatureType>
        <FeatureIcon>
          <IoBedOutline />
          <FeatureValue>4</FeatureValue>
        </FeatureIcon>
      </StyledFeature>
      <StyledFeature>
        <FeatureType>square area</FeatureType>
        <FeatureIcon>
          <IoBedOutline />
          <FeatureValue>4</FeatureValue>
        </FeatureIcon>
      </StyledFeature>
      <StyledFeature>
        <FeatureType>repair quality</FeatureType>
        <FeatureIcon>
          <IoBedOutline />
          <FeatureValue>4</FeatureValue>
        </FeatureIcon>
      </StyledFeature>
      <StyledFeature>
        <FeatureType>status</FeatureType>
        <FeatureIcon>
          <IoBedOutline />
          <FeatureValue>4</FeatureValue>
        </FeatureIcon>
      </StyledFeature>
    </StyledFeatures>
  );
}

export default Features;
