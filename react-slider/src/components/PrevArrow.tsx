import { Arrow } from "../styled-components/Arrow";

type Props = {
  handleClick: () => void;
};

export const PrevArrow = ({ handleClick }: Props) => {
  return (
    <Arrow left="0" onClick={handleClick}>
      {"<"}
    </Arrow>
  );
};
