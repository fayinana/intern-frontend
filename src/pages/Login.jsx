import styled, { css } from "styled-components";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import SignUp from "./SignUp";

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

function Login() {
  return (
    <LoginContainer>
      <Title>welcome back</Title>
      <Text>welcome back! please enter your detail</Text>
      <Input label="email" placeholder="test@gmail.com" />
      <Input label="password" type="password" />
      <Forgot boldness="md">forgot password</Forgot>
      <Button>log in</Button>
      <NoAccountOrHaveAccount>
        do not have an account?
        <Modal>
          <Modal.Open>
            <Forgot boldness="lg"> sign up</Forgot>
          </Modal.Open>
          <Modal.Window>
            <SignUp />
          </Modal.Window>
        </Modal>
      </NoAccountOrHaveAccount>
    </LoginContainer>
  );
}

export default Login;
