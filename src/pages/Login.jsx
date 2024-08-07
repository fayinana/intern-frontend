/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import SignUp from "./SignUp";
import { useMutation } from "@tanstack/react-query";
import { signInUser } from "../services/apiUser";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { replace, useNavigate } from "react-router-dom";

const Title = styled.h2`
  color: var(--color-grey-900);
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
  text-align: center;
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

const LoginContainer = styled.div`
  width: 100%;
  max-width: 500px;
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

function Login({ onCloseModal }) {
  const navigate = useNavigate();
  const { authenticate, isAuthenticated } = useAuth();
  const { isLoading, mutate: logIn } = useMutation({
    mutationFn: signInUser,
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      toast.success("user login successfully");
      authenticate("ananiya");
      onCloseModal?.();
    },
  });
  function handleLogIn() {
    logIn("123", "123");
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/users", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <LoginContainer>
      <Title>welcome back</Title>
      <Text>welcome back! please enter your detail</Text>
      <Input label="email" placeholder="test@gmail.com" />
      <Input label="password" type="password" />
      <Forgot boldness="md">forgot password</Forgot>
      <Button disabled={isLoading} onClick={handleLogIn}>
        log in
      </Button>
      <NoAccountOrHaveAccount>
        do not have an account?
        <Forgot boldness="lg" onClick={() => onCloseModal()}>
          sign up
        </Forgot>
        {/* <Modal>
          <Modal.Open opens="sign-up-2"></Modal.Open>
          <Modal.Window name="sign-up-2">
            <SignUp />
          </Modal.Window>
        </Modal> */}
      </NoAccountOrHaveAccount>
    </LoginContainer>
  );
}

export default Login;
