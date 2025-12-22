import Button from "./Button";

const AboutHero = () => {
  return (
    <div className="sm:h-screen flex justify-center items-center relative text-center">
      <img
        src="/assets/images/AboutHero.jpg"
        alt="bg image"
        className=" h-full sm:h-screen w-full object-cover absolute -z-10"
      />

      <div className="w-4xl flex flex-col gap-6 items-center">
        <h1 className="text-white text-7xl mb-6">
          Our team cares about your full relax
        </h1>
        <p className="font-bold text-2xl text-white">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
        <Button className="whiteBorder">View our Tour Packages</Button>
      </div>
    </div>
  );
};

export default AboutHero;
