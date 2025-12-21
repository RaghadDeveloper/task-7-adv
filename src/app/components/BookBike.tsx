import { inputsFields } from "@/data/HomeCards";
import Button from "./Button";
import InputField from "./InputField";

const BookBike = () => {
  return (
    <div className="bg-orange-200 py-16">
      <div className="w-[90%] mx-auto relative flex justify-center lg:justify-start">
        <div className="w-1/2 min-w-lg">
          <h4 className="text-3xl font-extrabold mb-9 text-center">
            Book Now Bike
          </h4>
          <form className="bg-white/30 py-7.5 px-8.5 rounded-3xl flex flex-col gap-7.5 items-center">
            <div className="grid grid-cols-2 gap-7.5 w-full">
              {inputsFields.map((field, index) => (
                <InputField key={index} field={field} />
              ))}
            </div>
            <Button className="primary">Book Now</Button>
          </form>
        </div>
        <img
          src="/assets/images/Bike.png"
          alt=""
          className=" absolute w-1/2 rotate-y-180 right-0 hidden lg:block -bottom-28"
        />
      </div>
    </div>
  );
};

export default BookBike;
