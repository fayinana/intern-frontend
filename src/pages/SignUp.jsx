// let { fullName, email, password, confirmPassword, role ,userAddress} = userdata;

import styled, { css } from "styled-components";
// import Input from "../ui/Input";
// import Button from "../ui/Button";
import MultiStepForm from "../components/MultiStepForm";

const SignUpContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 5rem auto;
  padding: 5rem;
  background: var(--color-grey-0);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;
`;

//

const Title = styled.h2`
  color: var(--color-grey-900);
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.5px;
  line-height: 0;
`;
const Text = styled.p`
  color: var(--color-grey-500);
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 400;
  text-align: center;
  line-height: 2;
  letter-spacing: 0.25px;
  margin-bottom: 2rem;
`;

const boldness = {
  sm: css`
    font-weight: 400;
  `,
  md: css`
    font-weight: 600;
  `,
  lg: css`
    font-weight: 800;
  `,
};

const Forgot = styled.a`
  color: var(--color-brand-900);
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 1.2rem;
  ${(props) => boldness[props.boldness]}
`;
Forgot.defaultProps = {
  boldness: "sm",
};
const NoAccountOrHaveAccount = styled.p`
  color: var(--color-grey-500);
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: capitalize;
`;

// const Container = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 2rem;
//   padding: 0 1rem;
// `;

const steps = [
  {
    name: "user identity",
    inputs: [
      { label: "Name", type: "text", fieldName: "name" },
      { label: "Email", type: "email", fieldName: "email" },
    ],
  },
  {
    name: "property detail",
    inputs: [
      { label: "fathername", type: "tel", fieldName: "phone" },
      { label: "Address", type: "text", fieldName: "address" },
    ],
  },
  {
    name: "property detail",
    inputs: [
      { label: "password", type: "password", fieldName: "password" },
      {
        label: "conform-password",
        type: "file",
        fieldName: "conform-password",
      },
    ],
  },
];
const handleFormSubmit = (data) => {
  console.log("Form data:", data);
};

function SignUp() {
  // return <MultiStepForm steps={steps} onSubmit={handleFormSubmit} />;
  return (
    <SignUpContainer>
      <Title>welcome</Title>
      <Text>enter your detail below to create your account and get start</Text>
      <MultiStepForm steps={steps} onSubmit={handleFormSubmit} />
      {/* <Forgot boldness="md">forgot password</Forgot> */}
      {/* <Button>sign up</Button> */}
      <NoAccountOrHaveAccount>
        have an account?
        <Forgot boldness="lg"> login</Forgot>
      </NoAccountOrHaveAccount>
    </SignUpContainer>
  );
}

export default SignUp;
