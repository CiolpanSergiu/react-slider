import styled from "styled-components";

type CompProps = {
  right?: string;
  left?: string;
};

export const Arrow = styled.button<CompProps>`
  position: absolute;
  ${(props) => props.right && `right: ${props.right};`}
  ${(props) => props.left && `left: ${props.left};`}
  z-index: 999;
  cursor: pointer;
  background-color: rgba(100, 100, 100, 0.5);
  border: none;
  height: 100%;
  transition: 0.5s background-color ease;
  width: 2rem;
  font-size: 1rem;
  color: white;

  &:hover {
    background-color: rgba(100, 100, 100, 0.8);
  }

  @media (min-width: 662px) {
    width: 2.5rem;
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    width: 3rem;
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    width: 4rem;
    font-size: 3rem;
  }
`;
