import styled from "styled-components";
import { ProgressBar } from "./ProgressBar";
import { nanoid } from "nanoid";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 4rem 10vw;
  width: 100%;
  max-width: 80vw;
`;

type Props = {
  totalPages: number;
  activePage: number;
  changePage: (pageNumber: number) => void;
};

export const ProgressBarsContainer = ({
  totalPages,
  activePage,
  changePage,
}: Props) => {
  let bars = [];

  for (let i: number = 0; i < totalPages; i++) {
    bars.push(
      <ProgressBar
        key={nanoid()}
        activePage={activePage}
        changePage={() => changePage(i)}
      />
    );
  }

  return <Container>{bars}</Container>;
};
