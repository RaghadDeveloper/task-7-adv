import { IoClose } from "react-icons/io5";
import AuthLayout from "./AuthLayout";
import { signupFormInputs } from "@/data/AuthFormsData";
import InputField from "./InputField";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";

const SignUp = ({
  onClose,
  openLogin,
}: {
  onClose: () => void;
  openLogin: () => void;
}) => {
  return (
    <AuthLayout onClick={onClose}>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Create Account</h2>
        <span onClick={onClose} className="cursor-pointer">
          <IoClose size={25} />
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {signupFormInputs.map((input) => (
          <InputField key={input.label} field={input} />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" id="agree" />
        <label htmlFor="agree">
          I agree with <span className="text-orange-400">Terms</span> and{" "}
          <span className="text-orange-400">Privacy</span>
        </label>
      </div>

      <div className="flex flex-col gap-1.5">
        <Button className="primary">Sign Up</Button>
        <span className="text-center text-gray-400">or</span>
        <Button className="grayBorder">
          <FcGoogle size={25} />
          Sign Up with Google
        </Button>
      </div>

      <p className="text-center">
        Already have an account?{" "}
        <span className="text-orange-400 cursor-pointer" onClick={openLogin}>
          Log In
        </span>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
