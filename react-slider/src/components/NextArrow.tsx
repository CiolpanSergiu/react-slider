import { Arrow } from "../styled-components/Arrow";

type Props = {
  handleClick: () => void;
};

export const NextArrow = ({ handleClick }: Props) => {
  return (
    <Arrow right="0" onClick={handleClick}>
      {">"}
    </Arrow>
  );
};
