/* eslint-disable react/prop-types */
// let { fullName, email, password, confirmPassword, role ,userAddress} = userdata;

import styled, { css } from "styled-components";
// import Input from "../ui/Input";
// import Button from "../ui/Button";
import MultiStepForm from "../components/MultiStepForm";
import { createUser } from "../services/apiUser";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

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

function SignUp({ onCloseModal }) {
  // return <MultiStepForm steps={steps} onSubmit={handleFormSubmit} />;
  // const newUser = {
  //   fullName: "John Doe",
  //   email: "john@example.com",
  //   password: "password123",
  //   confirmPassword: "password123",
  //   role: "user",
  //   userAddress: "123 Main St, Anytown USA",
  // };

  const { isLoading, mutate: addUser } = useMutation({
    mutationFn: (newUser) => createUser(newUser),
    onSuccess: () => {
      console.log("login page");
      toast.success("user signed up successfully");
      onCloseModal();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const handleFormSubmit = (data) => {
    addUser(data);
  };

  return (
    <SignUpContainer>
      <Title>welcome</Title>
      <Text>enter your detail below to create your account and get start</Text>
      <MultiStepForm
        steps={steps}
        onSubmit={handleFormSubmit}
        isLoading={isLoading}
      />
      <NoAccountOrHaveAccount>
        have an account?
        <Forgot boldness="lg"> login</Forgot>
      </NoAccountOrHaveAccount>
    </SignUpContainer>
  );
}

export default SignUp;
