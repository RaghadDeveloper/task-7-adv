import { HeroFormData } from "@/interfaces";

const HeroSearchSec = ({ data }: { data: HeroFormData }) => {
  const { Icon, label, options } = data;

  return (
    <div className="flex flex-col gap-1.5 m-2 border-gray-300 nth-5:border-none border-b sm:border-r sm:border-b-0 pb-3 sm:pr-6">
      <label className="font-bold text-lg flex gap-2 items-center text-nowrap">
        <span>
          <Icon />
        </span>
        <p>{label}</p>
      </label>
      <select className="text-gray-700 ml-6 cursor-pointer focus:outline-none">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HeroSearchSec;
