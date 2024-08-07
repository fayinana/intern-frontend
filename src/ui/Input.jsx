/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";

const InputContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  width: 100%;
  min-width: 280px;
  max-width: ${(props) => (props.type === "checkbox" ? "40px" : "300px")};
  border: 1px solid var(--color-brand-100);
  border-radius: 7px;
  font-size: 1.5rem;
  padding: 0.75rem;
  color: var(--color-grey-900);
  background: var(--color-grey-50);

  &:disabled {
    background: var(--color-grey-200);
  }

  &::placeholder {
    color: var(--color-grey-500);
  }
`;

const InputLabel = styled.label`
  font-size: 1.25rem;
  color: var(--color-grey-900);
  text-align: start;
  text-transform: capitalize;
  margin-left: 5px;
`;

function Input({ label, placeholder, type = "text" }) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <StyledInput placeholder={placeholder} type={type}></StyledInput>
    </InputContainer>
  );
}

export default Input;
