import { DestinantionCardType } from "@/interfaces";
import { LuCalendarDays } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";

const DestinantionCard = ({ card }: { card: DestinantionCardType }) => {
  const { image, title, price, date, capacity, description } = card;
  return (
    <div>
      <img
        src={image}
        alt=""
        className="h-96 w-full object-cover rounded-3xl mb-4"
      />
      <h4 className="text-gray-700 text-2xl font-bold mb-3">{title}</h4>
      <p className="mb-3 text-gray-500 text-lg font-semibold">
        from{" "}
        <span className="text-orange-400 text-2xl font-extrabold">
          {price} $
        </span>
      </p>

      <div className="text-orange-300 flex justify-between mb-3">
        <div className="flex gap-2 items-center">
          <LuCalendarDays />
          <span>{date}</span>
        </div>
        <div className="flex gap-2 items-center">
          <PiUsersThree />
          <span>{capacity}</span>
        </div>
      </div>

      <p className="text-lg text-gray-700">{description}</p>
    </div>
  );
};

export default DestinantionCard;
