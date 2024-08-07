import styled from "styled-components";
import Features from "../components/Features";
import Button from "../ui/Button";

const StyledDetail = styled.section`
  background: var(--color-grey-0);
  padding: 5rem 10rem;
`;

const Title = styled.div`
  color: var(--color-grey-900);
  font-size: 3rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding: 1rem;
`;

const Text = styled.p`
  color: var(--color-grey-600);
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 550;
`;
const Links = styled.div`
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const Link = styled.span`
  padding: 0.5rem 1.5rem;
  color: var(--color-brand-700);
  font-weight: 600;
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 1.3rem;
  border: 1px solid var(--color-brand-500);
  background: var(--color-grey-100);
  box-shadow: var(--shadow-sm);
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
`;
const ImageGallery = styled.div`
  background: var(--color-grey-0);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "main main small-1"
    "main main small-2";

  width: 900px;
  height: 450px;
  gap: 2rem;
  margin: 2rem auto;
`;

const Main = styled.div`
  grid-area: main;
  border-radius: 5px;
  overflow: hidden;
  /* padding: 5px; */
`;

const Small_2 = styled.div`
  grid-area: small-2;
  border-radius: 5px;
  overflow: hidden;
`;
const Small_1 = styled.div`
  grid-area: small-1;
  border-radius: 5px;
  overflow: hidden;
`;

const CallToAction = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  row-gap: 1rem;
  flex-direction: column;
  width: 250px;
  border: 1px solid var(--color-brand-200);
  padding: 3rem;
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
`;

const Price = styled.span`
  color: var(--color-brand-600);
  font-size: 2.4rem;
  font-weight: 700;
`;

const SmallPrice = styled.span`
  color: var(--color-grey-500);
  font-size: 1.2rem;
  font-weight: 600;
`;

function Detail() {
  return (
    <StyledDetail>
      <Title>st.crystal</Title>
      <Container>
        <Text>bole bet no 123/456 </Text>
        <Links>
          <Link>share</Link>
          <Link>favorite</Link>
          <Link>browse nearby listing</Link>
        </Links>
      </Container>
      <ImageGallery>
        <Main>
          <img src="house-1.jpg" alt="" />
        </Main>
        <Small_1>
          <img src="house-1.jpg" alt="" />
        </Small_1>
        <Small_2>
          <img src="house-1.jpg" alt="" />
        </Small_2>
      </ImageGallery>
      <Container>
        <Features />
        <CallToAction>
          <SmallPrice>rent place</SmallPrice>
          <Price>
            $23,000<SmallPrice>/month</SmallPrice>
          </Price>

          <Button size="large">apply now</Button>
        </CallToAction>
      </Container>
    </StyledDetail>
  );
}

export default Detail;
