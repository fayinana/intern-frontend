import styled from "styled-components";

const FileInputContainer = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1rem;

  label {
    color: var(--color-brand-700);
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`;

const StyledFileInput = styled.input.attrs({ type: "file" })`
  background-color: var(--color-grey-900);
  border: 1px solid var(--color-grey-0);
  border-radius: 3px;
  color: var(--color-grey-0);
  padding: 0.75rem;
  font-size: 1rem;
  width: 100%;

  &::file-selector-button {
    background-color: var(--color-brand-700);
    color: var(--color-grey-0);
    border: none;
    padding: 0.75rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
    border-radius: 5px;
  }
`;

function FileInput() {
  return (
    <FileInputContainer>
      <label>Upload a file</label>
      <StyledFileInput />
    </FileInputContainer>
  );
}

export default FileInput;
