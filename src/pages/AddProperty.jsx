import styled from "styled-components";
import MultiStepForm from "../components/MultiStepForm";

const steps = [
  {
    name: "user identity",
    inputs: [
      { label: "title", type: "text", fieldName: "title" },
      { label: "description", type: "textarea", fieldName: "description" },
      { label: "price", type: "number", fieldName: "price" },
    ],
  },
  {
    name: "property detail",
    inputs: [
      { label: "number of bedrooms", type: "number", fieldName: "bedroom" },
      { label: "number of bath room", type: "number", fieldName: "bathroom" },
      { label: "square area(met)", type: "number", fieldName: "area" },
    ],
  },
  {
    name: "property detail",
    inputs: [
      { label: "features", type: "text", fieldName: "features" },
      { label: "rule", type: "textarea", fieldName: "rule" },
    ],
  },
  {
    name: "property detail",
    inputs: [
      { label: "image", type: "file", fieldName: "image" },
      { label: "property file", type: "file", fieldName: "property_file" },
      {
        label: "Property tax payment",
        type: "file",
        fieldName: "Property_tax_payment",
      },
      { label: "valid id", type: "file", fieldName: "valid_id" },
    ],
  },
];

// const handleFormSubmit = (data) => {
//   console.log("Form data:", data);
// };
const StyledAddProperty = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function AddProperty() {
  return (
    <StyledAddProperty>
      <MultiStepForm steps={steps} />
    </StyledAddProperty>
  );
}

export default AddProperty;
