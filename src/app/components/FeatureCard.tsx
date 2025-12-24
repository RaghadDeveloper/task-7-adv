import { FeatureCardType } from "@/interfaces";

const FeatureCard = ({ card }: { card: FeatureCardType }) => {
  const { icon, description } = card;

  return (
    <div className="bg-white/30 w-full p-7.5 rounded-3xl flex flex-col items-center gap-4 text-center max-w-80 justify-self-center md:last:justify-self-end md:first:justify-self-start transition-all hover:scale-105">
      <img src={icon} alt="" />
      <p className="text-xl font-semibold">{description}</p>
    </div>
  );
};

export default FeatureCard;
