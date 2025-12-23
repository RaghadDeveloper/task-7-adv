"use client";
import { destinantionCards } from "@/data/HomeCards";
import DestinantionCard from "./DestinantionCard";
import { useResponsiveSlider } from "@/hooks/useResponsiveSlider";
import SliderButtons from "./SliderButton";

const Destinantions = () => {
  const { currentIndex, cardsToShow, handleNext, handlePrev } =
    useResponsiveSlider(destinantionCards.length, [
      { width: 640, cards: 2 },
      { width: 768, cards: 4 },
    ]);

  return (
    <div className="w-[90%] mx-auto mt-32">
      <div className="mb-14 flex justify-between flex-col sm:flex-row gap-4">
        <h3 className="text-3xl font-extrabold">
          Explore Our Popular Destinantions
        </h3>

        <div className="flex gap-5 self-end">
          <SliderButtons
            type="prev"
            handleClick={handlePrev}
            disabled={currentIndex === 0}
          />
          <SliderButtons
            type="next"
            handleClick={handleNext}
            disabled={currentIndex === destinantionCards.length - cardsToShow}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinantionCards
          .slice(currentIndex, currentIndex + cardsToShow)
          .map((card) => (
            <DestinantionCard key={card.title} card={card} />
          ))}
      </div>
    </div>
  );
};

export default Destinantions;
