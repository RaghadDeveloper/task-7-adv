import { InfoBlockType } from "@/interfaces";

const InfoBlock = ({ info }: { info: InfoBlockType }) => {
  return (
    <div className="w-20">
      <span className="font-bold text-3xl text-orange-400 mb-1.5">
        {info.value}+
      </span>
      <h6 className="text-gray-500">{info.text}</h6>
    </div>
  );
};

export default InfoBlock;
