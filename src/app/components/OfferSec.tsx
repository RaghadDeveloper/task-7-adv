import Button from "./Button";

const OfferSec = () => {
  return (
    <div className="bg-orange-200 py-16">
      <div className="w-[90%] mx-auto relative flex justify-center lg:justify-start">
        <div className="bg-white/30 w-xl p-8 rounded-3xl flex flex-col items-center justify-center gap-8">
          <h4 className="text-3xl font-extrabold text-center">
            Get Special Offers for Organizations
          </h4>
          <p className="text-lg text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Button className="primary">Contact Us</Button>
        </div>

        <img
          src="/assets/images/OfferPicture.png"
          alt=""
          className=" absolute -bottom-31 right-0 w-4xl hidden lg:block"
        />
      </div>
    </div>
  );
};

export default OfferSec;
