import InfoBlock from "./InfoBlock";
import { AboutSecData } from "@/interfaces";

const AboutSec = ({ data }: { data: AboutSecData }) => {
  const { image, subTitle, title, description, aboutInfos, page } = data;

  return (
    <div
      className={`w-[90%] mx-auto mb-52e mt-32 flex justify-between items-center gap-10 flex-col lg:flex-row ${
        page === "home" ? "mb-52" : "mb-32"
      }`}
    >
      <div
        className={`${
          page === "about" && "border border-gray-200 rounded-3xl p-6"
        }`}
      >
        <img src={image} alt="" className="rounded-3xl" />
      </div>

      <div className="w-[90%] lg:w-1/2">
        <h5 className="mb-1.5 text-gray-500">{subTitle}</h5>
        <h4 className="text-3xl font-extrabold text-gray-600 mb-8">{title}</h4>
        <p className="text-lg text-gray-700 mb-8">{description}</p>
        <div className="flex gap-12 flex-wrap">
          {aboutInfos.map((info) => (
            <InfoBlock key={info.text} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
