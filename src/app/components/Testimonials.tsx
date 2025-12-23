"use client";
import TestimonialCard from "./TestimonialCard";
import { testimonialsCards } from "@/data/HomeCards";
import { useResponsiveSlider } from "@/hooks/useResponsiveSlider";
import SliderButtons from "./SliderButton";

const Testimonials = () => {
  const { currentIndex, cardsToShow, handleNext, handlePrev } =
    useResponsiveSlider(testimonialsCards.length, [{ width: 640, cards: 2 }]);

  return (
    <div className="w-[90%] mx-auto my-32">
      <div className="mb-14 flex justify-between flex-col sm:flex-row gap-4">
        <h3 className="text-3xl font-extrabold">Happy Customers Says</h3>

        <div className="flex gap-5 self-end">
          <SliderButtons
            type="prev"
            handleClick={handlePrev}
            disabled={currentIndex === 0}
          />
          <SliderButtons
            type="next"
            handleClick={handleNext}
            disabled={currentIndex === testimonialsCards.length - cardsToShow}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {testimonialsCards
          .slice(currentIndex, currentIndex + cardsToShow)
          .map((card, index) => (
            <TestimonialCard key={index} card={card} />
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
