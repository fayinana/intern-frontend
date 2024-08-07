/* eslint-disable react/prop-types */
// MultiStepForm.js
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import styled from "styled-components";
import FormProgress from "./FormProgress";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
const InputContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  text-align: start;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  min-width: 280px;
  /* max-width: ${(props) => (props.type === "checkbox" ? "40px" : "300px")}; */
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

const StyledTextarea = styled.textarea`
  width: 100%;
  min-width: 280px;
  /* max-width: ${(props) => (props.type === "checkbox" ? "40px" : "300px")}; */
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

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const StyledFileInput = styled.input.attrs({ type: "file" })`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
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

const MultiStepForm = ({ steps, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [currentStep, setCurrentStep] = useLocalStorageState(1, "step");

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const onFormSubmit = (data) => {
    // Handle form submission logic
    onSubmit(data);
    setCurrentStep((prevStep) => prevStep + 1);
    // setCurrentStep(1);
    //
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <FormProgress currentStep={currentStep} totalSteps={steps.length} />
      {steps.map((step, i) => {
        if (currentStep === i + 1) {
          return (
            <div key={step.name}>
              {step.inputs.map((input, i) => (
                <div key={i}>
                  <InputContainer>
                    <InputLabel>{input.label}</InputLabel>
                    {input.type === "textarea" ? (
                      <StyledTextarea {...register(input.fieldName)} />
                    ) : input.type === "file" ? (
                      <StyledFileInput
                        type={input.type}
                        {...register(input.fieldName)}
                      />
                    ) : (
                      <StyledInput
                        // placeholder={placeholder}
                        type={input.type}
                        {...register(input.fieldName)}
                      ></StyledInput>
                    )}
                  </InputContainer>

                  {errors[input.fieldName] && (
                    <span>{errors.input.fieldName.message}</span>
                  )}
                </div>
              ))}
              <StyledBox>
                {currentStep > 1 && currentStep <= steps.length && (
                  <Button type="button" onClick={handlePrevStep}>
                    prev
                  </Button>
                )}
                {currentStep < steps.length && (
                  <Button type="button" onClick={handleNextStep}>
                    Next
                  </Button>
                )}
                {currentStep === steps.length && (
                  <Button type="submit">Submit</Button>
                )}
              </StyledBox>
            </div>
          );
        }
        return null;
      })}
    </form>
  );
};

export default MultiStepForm;
