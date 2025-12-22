import { PackageCardType } from "@/interfaces";
import Button from "./Button";

const PackageCard = ({ card }: { card: PackageCardType }) => {
  const { image, title, price, features } = card;
  return (
    <div className="border border-gray-200 rounded-3xl">
      <img
        src={image}
        alt="Package Image"
        className="rounded-t-3xl h-64 w-full object-cover"
      />
      <div className="p-6 flex flex-col gap-4">
        <h4 className="text-2xl font-extrabold">{title}</h4>
        <div className="text-gray-500 relative">
          <span className=" absolute text-xl">€</span>
          <span className="text-orange-400 font-bold text-5xl ml-3">
            {price}
          </span>
          <span className="text-lg">/day</span>
        </div>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 my-4">
              <feature.Icon size={20} className="text-orange-300" />
              <span className="text-gray-600">{feature.text}</span>
            </li>
          ))}
        </ul>
        <Button className="border">Book Now</Button>
      </div>
    </div>
  );
};

export default PackageCard;
