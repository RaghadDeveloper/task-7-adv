import { loginFormInputs } from "@/data/AuthFormsData";
import InputField from "./InputField";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import AuthLayout from "./AuthLayout";

const Login = ({ onClose }: { onClose: () => void }) => {
  return (
    <AuthLayout onClick={onClose}>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Login</h2>
        <span onClick={onClose} className="cursor-pointer">
          <IoClose size={25} />
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {loginFormInputs.map((input) => (
          <InputField key={input.label} field={input} />
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        <Button className="primary">Sign In</Button>
        <span className="text-center text-gray-400">or</span>
        <Button className="grayBorder">
          <FcGoogle size={25} />
          Sign In with Google
        </Button>
      </div>

      <p className="text-center">
        Don’t have an account ? <span className="text-orange-400">Sign Up</span>
      </p>
    </AuthLayout>
  );
};

export default Login;
