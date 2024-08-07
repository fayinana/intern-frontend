/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaCheckCircle, FaCircle, FaAngleRight } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";
import React from "react";

const FormProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const FormProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;

  &.active {
    color: var(--color-brand-500);
  }

  &.finished {
    color: var(--color-brand-500);
  }
`;

const FormProgressLabel = styled.span`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--color-grey-500);
`;

const FormProgressIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: ${(props) =>
    props.completed
      ? "var(--color-brand-500)"
      : props.active
      ? "var(--color-brand-500)"
      : "var(--color-grey-500)"};
`;

const FormProgressLight = styled.div`
  width: 2rem;
  height: 0.25rem;
  background-color: ${(props) =>
    props.completed
      ? "var(--color-brand-500)"
      : props.active
      ? "var(--color-brand-500)"
      : "var(--color-grey-500)"};
  margin: 0 0.5rem;
`;

const FormProgress = ({ currentStep, totalSteps }) => {
  const { isDarkMode } = useDarkMode();

  const activeColor = isDarkMode
    ? "rgba(255, 165, 0, 0.7)"
    : "rgba(255, 165, 0, 0.5)";
  const completedColor = isDarkMode
    ? "rgba(0, 128, 0, 0.7)"
    : "rgba(0, 128, 0, 0.5)";
  const upcomingColor = isDarkMode
    ? "rgba(0, 128, 255, 0.7)"
    : "rgba(0, 128, 255, 0.5)";

  return (
    <FormProgressContainer>
      {Array.from({ length: totalSteps }, (_, index) => index + 1).map(
        (step, index) => (
          <React.Fragment key={step}>
            <FormProgressStep
              className={`${currentStep === step ? "active" : ""} ${
                currentStep > step ? "finished" : ""
              }`}
            >
              <FormProgressIndicator
                completed={currentStep > step}
                active={currentStep === step}
                style={{
                  color:
                    currentStep > step
                      ? completedColor
                      : currentStep === step
                      ? activeColor
                      : upcomingColor,
                }}
              >
                {currentStep > step ? (
                  <FaCheckCircle />
                ) : currentStep === step ? (
                  <FaCircle />
                ) : (
                  <FaAngleRight />
                )}
              </FormProgressIndicator>
              <FormProgressLabel>Step {step}</FormProgressLabel>
            </FormProgressStep>
            {index < totalSteps - 1 && (
              <FormProgressLight
                completed={currentStep > step + 1}
                active={currentStep === step + 1}
                style={{
                  backgroundColor:
                    currentStep > step + 1
                      ? completedColor
                      : currentStep === step + 1
                      ? activeColor
                      : upcomingColor,
                }}
              />
            )}
          </React.Fragment>
        )
      )}
    </FormProgressContainer>
  );
};

export default FormProgress;
