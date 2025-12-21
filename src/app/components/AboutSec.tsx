import { aboutInfos } from "@/data/AboutInfos";
import InfoBlock from "./InfoBlock";

const AboutSec = () => {
  return (
    <div className="w-[90%] mx-auto mb-52 flex justify-between items-center gap-10 flex-col lg:flex-row">
      <img src="/assets/images/AboutPicture.png" alt="" />

      <div className="w-[90%] lg:w-1/2">
        <h5 className="mb-1.5 text-gray-500">WELCOME TO OUR SITE!</h5>
        <h4 className="text-3xl font-extrabold text-gray-600 mb-8">
          We are the best company for your visit
        </h4>
        <p className="text-lg text-gray-700 mb-8">
          After decades of experience, and a whole life in Lucca, we offer you
          the most complete tourism service in the city. In addition to having
          bikes and rickshaws to have as much fun as you want, you have the
          choice of tour guides with whom to tour and drivers for your every
          need! We offer packages in the way that you get the most at the lowest
          price. Book with us and we will always be available for you!
        </p>
        <div className="flex gap-12">
          {aboutInfos.map((info) => (
            <InfoBlock key={info.text} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
