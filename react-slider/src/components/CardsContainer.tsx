import { SliderCard } from "./SliderCard";
import { useState } from "react";
import { PrevArrow } from "./PrevArrow";
import { NextArrow } from "./NextArrow";
import styled from "styled-components";
import { ProgressBarsContainer } from "./ProgressBarsContainer";
import cardsData from "../data/cardsData";

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 25%;
  margin-top: 5rem;
  margin: 1rem auto 0 auto;
  overflow: hidden;
`;

const InputBox = styled.input`
  margin-left: 1rem;
  font-size: 1.2rem;
  border: solid dodgerblue 2px;
  border-radius: 5px;
  padding: 0 0 0 1rem;
`;

const InputContainer = styled.div`
  margin-left: 0.5rem;
`;

type CardsContainerProps = {
  translateValue: string;
};

const StyledCardsContainer = styled.div<CardsContainerProps>`
  display: flex;
  transform: translateX(${(props) => props.translateValue || 0}%);
  transition: 1s all ease;
  width: 100%;
`;

type CardData = {
  id: number;
  src: string;
  alt: string;
};

export const CardsContainer = () => {
  const [sliderActivePage, setSliderActivePage] = useState<number>(0);
  const [cardsPerSlider, setCardsPerSlider] = useState<number>(1);

  let translate = -100 * sliderActivePage;
  const totalPages = Math.ceil(cardsData.length / cardsPerSlider);

  if (sliderActivePage >= totalPages) {
    setSliderActivePage(totalPages - 1);
  }

  function translateRight() {
    setSliderActivePage((prevState: number) => {
      return prevState + 1 < totalPages ? prevState + 1 : 0;
    });
  }

  function translateLeft() {
    setSliderActivePage((prevState: number) => {
      return prevState - 1 < 0 ? totalPages - 1 : prevState - 1;
    });
  }

  function changeActivePage(pageNumber: number) {
    setSliderActivePage(pageNumber);
  }

  function changeCardsPerSlider(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = parseInt(e.target.value);

    setCardsPerSlider(inputValue);
  }

  const cards: JSX.Element[] = cardsData.map((elem: CardData) => {
    return (
      <SliderCard
        horizontalMargin={0.5}
        marginMeasureUnit="rem"
        cardsPerPage={cardsPerSlider}
        imgSrc={elem.src}
        imgAlt={elem.alt}
        heightMeasureUnits={"rem"}
        maxHeight={22}
        key={elem.id}
      />
    );
  });

  return (
    <>
      <InputContainer>
        <label htmlFor="cardsPerPage">Cards Per Page:</label>
        <InputBox
          id="cardsPerPage"
          type="number"
          min={1}
          max={5}
          value={cardsPerSlider}
          onChange={changeCardsPerSlider}
        />
      </InputContainer>
      <SliderContainer>
        <PrevArrow handleClick={translateLeft} />
        <StyledCardsContainer translateValue={String(translate)}>
          {cards}
        </StyledCardsContainer>
        <NextArrow handleClick={translateRight} />
      </SliderContainer>
      <ProgressBarsContainer
        totalPages={totalPages}
        activePage={sliderActivePage + 1}
        changePage={(pageNumber: number) => changeActivePage(pageNumber)}
      />
    </>
  );
};
