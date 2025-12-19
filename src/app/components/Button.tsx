import { ReactNode } from "react";

const Button = ({
  className,
  children,
}: {
  className: "primary" | "noBg";
  children: ReactNode;
}) => {
  const styles = {
    primary: " bg-orange-400 text-white rounded-full px-6 lg:px-12 ",
    noBg: "",
  };

  return (
    <button
      className={styles[className] + "p-2 lg:py-2.5 lg:px-3 cursor-pointer"}
    >
      {children}
    </button>
  );
};

export default Button;
