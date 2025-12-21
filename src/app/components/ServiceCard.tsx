import { ServiceCardType } from "@/interfaces";

const ServiceCard = ({ card }: { card: ServiceCardType }) => {
  const { image, title, description } = card;

  return (
    <div>
      <img src={image} alt="" className="rounded-3xl mb-8 h-72 object-cover" />
      <h4 className="text-2xl font-bold mb-5">{title}</h4>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default ServiceCard;
