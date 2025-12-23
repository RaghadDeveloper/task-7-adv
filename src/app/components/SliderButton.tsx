"use client";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const SliderButton = ({
  handleClick,
  disabled,
  type,
}: {
  handleClick: () => void;
  disabled: boolean;
  type: string;
}) => {
  return (
    <button
      className={`text-2xl p-2 rounded-full cursor-pointer hover:opacity-80 transition-all ${
        disabled ? "bg-gray-200 text-gray-500" : "bg-orange-400 text-white"
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {type === "prev" ? <GrFormPrevious /> : <GrFormNext />}
    </button>
  );
};

export default SliderButton;
