import { CardsContainer } from "./components/CardsContainer";
import styled from "styled-components";

const PageContainer = styled.div`
  overflow-x: hidden;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin: 2rem;
  text-align: center;
`;

export default function App() {
  return (
    <PageContainer>
      <Header>React Slider</Header>
      <CardsContainer />
    </PageContainer>
  );
}
