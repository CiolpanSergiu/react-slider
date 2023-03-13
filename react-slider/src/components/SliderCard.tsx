import styled from "styled-components";

type ImgProps = {
  horizontalMargin: number;
  marginMeasureUnit: string;
  cardsPerPage: number;
  maxHeight: number;
  heightMeasureUnits: string;
};

const Img = styled.img<ImgProps>`
  border-radius: 1rem;
  aspect-ratio: 16/9;
  margin: 0 ${(props) => props.horizontalMargin + props.marginMeasureUnit || 0};
  min-width: calc(
    100% / ${(props) => props.cardsPerPage || 1} -
      ${(props) => props.horizontalMargin * 2 + props.marginMeasureUnit || 0}
  );
  width: calc(
    100% / ${(props) => props.cardsPerPage || 1} -
      ${(props) => props.horizontalMargin * 2 + props.marginMeasureUnit || 0}
  );
  max-height: ${(props) => props.maxHeight + props.heightMeasureUnits || 0};
`;

type Props = {
  horizontalMargin: number;
  marginMeasureUnit: string;
  cardsPerPage: number;
  imgSrc: string;
  imgAlt: string;
  maxHeight: number;
  heightMeasureUnits: string;
};

export const SliderCard = ({
  horizontalMargin,
  cardsPerPage,
  marginMeasureUnit,
  imgSrc,
  imgAlt,
  maxHeight,
  heightMeasureUnits,
}: Props) => {
  return (
    <Img
      src={imgSrc}
      alt={imgAlt}
      horizontalMargin={horizontalMargin}
      marginMeasureUnit={marginMeasureUnit}
      cardsPerPage={cardsPerPage}
      maxHeight={maxHeight}
      heightMeasureUnits={heightMeasureUnits}
    />
  );
};
