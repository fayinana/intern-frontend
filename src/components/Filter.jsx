import styled from "styled-components";
import Button from "../ui/Button";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 900px;
  background: var(--color-grey-0);
  padding: 1.5rem 2rem;
  border-radius: 5px;
  margin: 2rem auto;
  box-shadow: var(--shadow-md);
`;

const StyledFilter = styled.div`
  padding: 0 1rem;
  padding-right: 3rem;
  border-right: 1px solid var(--color-grey-200);
`;

const FilterTitle = styled.p`
  color: var(--color-grey-400);
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1.2rem;
`;

const FilterValue = styled.p`
  color: var(--color-grey-900);
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1.3rem;
`;
function Filter() {
  return (
    <FilterContainer>
      <StyledFilter>
        <FilterTitle>location</FilterTitle>
        <FilterValue>adama city</FilterValue>
      </StyledFilter>
      <StyledFilter>
        <FilterTitle>when</FilterTitle>
        <FilterValue>select move in date</FilterValue>
      </StyledFilter>
      <StyledFilter>
        <FilterTitle>price</FilterTitle>
        <FilterValue>$500 - %2,500</FilterValue>
      </StyledFilter>
      <StyledFilter>
        <FilterTitle>property type</FilterTitle>
        <FilterValue>house</FilterValue>
      </StyledFilter>

      <Button>search</Button>
    </FilterContainer>
  );
}

export default Filter;
