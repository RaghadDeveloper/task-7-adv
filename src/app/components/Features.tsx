import { featuresCards } from "@/data/AboutPageData";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="bg-orange-200 py-16">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between">
        {featuresCards.map((card, index) => (
          <FeatureCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Features;
