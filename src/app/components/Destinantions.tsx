import { destinantionCards } from "@/data/Destinantions";
import DestinantionCard from "./DestinantionCard";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Destinantions = () => {
  return (
    <div className="w-[90%] mx-auto my-32">
      <div className="mb-14 flex justify-between flex-col sm:flex-row gap-4">
        <h3 className="text-3xl font-extrabold">
          Explore Our Popular Destinantions
        </h3>

        <div className="flex gap-5 self-end">
          <button className="text-2xl p-2 rounded-full bg-gray-200 text-gray-500">
            <GrFormPrevious />
          </button>
          <button className="text-2xl p-2 rounded-full bg-orange-400 text-white">
            <GrFormNext />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinantionCards.map((card) => (
          <DestinantionCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Destinantions;
