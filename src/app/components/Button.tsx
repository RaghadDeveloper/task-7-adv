import { ReactNode } from "react";

const Button = ({
  className,
  children,
  onClick,
}: {
  className: "primary" | "noBg" | "border" | "whiteBorder" | "grayBorder";
  children: ReactNode;
  onClick?: () => void;
}) => {
  const styles = {
    primary: " bg-orange-400 text-white rounded-full px-6 lg:px-12 ",
    noBg: "",
    border:
      " border border-orange-400 text-orange-400 rounded-full px-6 lg:px-12 font-semibold ",
    whiteBorder:
      " border border-white text-white rounded-full px-6 lg:px-12 font-semibold ",
    grayBorder:
      " border border-gray-300 text-gray-400 rounded-full px-6 lg:px-12 font-semibold ",
  };

  if (onClick)
    return (
      <button
        className={
          styles[className] +
          "flex justify-center items-center gap-5 p-2 lg:py-2.5 lg:px-3 cursor-pointer hover:opacity-80"
        }
        onClick={onClick}
      >
        {children}
      </button>
    );
  return (
    <button
      className={
        styles[className] +
        "flex justify-center items-center gap-5 p-2 lg:py-2.5 lg:px-3 cursor-pointer hover:opacity-80"
      }
    >
      {children}
    </button>
  );
};

export default Button;
