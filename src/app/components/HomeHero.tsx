import { FiSearch } from "react-icons/fi";
import HeroSearchSec from "./HeroSearchSec";
import { formData } from "@/data/HomeHero";
import HomeHeroTab from "./HomeHeroTab";

const HomeHero = () => {
  return (
    <div className="sm:h-screen flex flex-col justify-center items-center relative">
      <img
        src="/assets/images/HomeHero.jpg"
        alt="bg image"
        className=" h-full sm:h-screen w-full object-cover absolute -z-10"
      />

      <h1 className="text-white text-7xl mb-4 mt-35">Enjoy in the best way!</h1>
      <p className="text-white text-2xl font-bold mb-24">
        Enjoy our services for your trip anytime
      </p>
      <div className="bg-white/20 p-5 rounded-xl mb-5 sm:mx-10">
        <HomeHeroTab />

        <form className="bg-white p-3 rounded-xl rounded-tl-none rounded-tr-none sm:rounded-tr-xl flex gap-4 flex-col sm:flex-row items-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full">
            {formData.map((item, index) => (
              <HeroSearchSec key={index} data={item} />
            ))}
          </div>

          <button className="bg-orange-400 text-white p-4 text-4xl flex justify-center items-center rounded-xl cursor-pointer w-fit end-self-center  hover:opacity-80">
            <FiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeHero;
