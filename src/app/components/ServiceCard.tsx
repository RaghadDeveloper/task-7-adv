import { ServiceCardType } from "@/interfaces";

const ServiceCard = ({ card }: { card: ServiceCardType }) => {
  const { image, title, description } = card;

  return (
    <div>
      <div className="rounded-3xl mb-8 h-72 overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full object-cover cursor-pointer transition-all hover:scale-105"
        />
      </div>
      <h4 className="text-2xl font-bold mb-5">{title}</h4>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default ServiceCard;
