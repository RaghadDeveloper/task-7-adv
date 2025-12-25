import { ReactNode, useEffect } from "react";

const AuthLayout = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClick} />

      <div className="bg-white text-gray-600 rounded-3xl py-10 px-15 w-md relative flex flex-col gap-6">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
