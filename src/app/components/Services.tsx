import { servicesCards } from "@/data/HomeCards";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="w-[90%] mx-auto mt-36 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {servicesCards.map((card) => (
        <ServiceCard key={card.title} card={card} />
      ))}
    </div>
  );
};

export default Services;
