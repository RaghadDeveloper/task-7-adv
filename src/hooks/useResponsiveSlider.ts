"use client";
import { useEffect, useState } from "react";

type BreakpointConfig = {
  width: number;
  cards: number;
};

export const useResponsiveSlider = (
  totalCards: number,
  breakpoints: BreakpointConfig[],
  defaultCards = 1
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(defaultCards);

  const handleNext = () => {
    if (currentIndex < totalCards - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const updateCardsToShow = () => {
      let newCardsToShow = defaultCards;

      for (const bp of breakpoints) {
        if (window.innerWidth > bp.width) {
          newCardsToShow = bp.cards;
        }
      }

      setCardsToShow((prev) => {
        if (prev !== newCardsToShow) {
          const maxStartIndex = Math.max(0, totalCards - newCardsToShow);
          setCurrentIndex((i) => Math.min(i, maxStartIndex));
        }
        return newCardsToShow;
      });
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, [totalCards, breakpoints, defaultCards]);

  return {
    currentIndex,
    cardsToShow,
    handleNext,
    handlePrev,
  };
};
