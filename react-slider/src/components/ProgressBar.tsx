import styled from "styled-components";

type BarProps = {
  activePage: number;
};

const Bar = styled.div<BarProps>`
  width: 1.5rem;
  height: 0.35rem;
  background-color: lightgray;
  margin: 0.5rem 0.25rem;
  cursor: pointer;

  &:nth-child(${(props) => props.activePage}) {
    background-color: gray;
  }

  @media only screen and (min-width: 768px) {
    width: 2rem;
    height: 0.5rem;
  }
`;

type Props = {
  activePage: number;
  changePage: () => void;
};

export const ProgressBar = ({ activePage, changePage }: Props) => {
  return <Bar activePage={activePage} onClick={changePage} />;
};
