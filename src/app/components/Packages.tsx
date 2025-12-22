import { packageCards } from "@/data/HomeCards";
import PackageCard from "./PackageCard";

const Packages = () => {
  return (
    <div className="w-[90%] mx-auto mt-32">
      <h3 className="text-3xl font-extrabold mb-14">
        The Most Popular Packages
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packageCards.map((card, index) => (
          <PackageCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
