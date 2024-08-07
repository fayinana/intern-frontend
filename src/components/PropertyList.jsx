/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledPropertyList = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0 5rem;
`;

function PropertyList({ children }) {
  return <StyledPropertyList>{children}</StyledPropertyList>;
}

export default PropertyList;
