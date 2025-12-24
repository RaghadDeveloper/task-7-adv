import { TestimonialCardType } from "@/interfaces";

const TestimonialCard = ({ card }: { card: TestimonialCardType }) => {
  const { image, name, text } = card;

  return (
    <div className="p-7.5 border border-gray-300 rounded-3xl flex flex-col items-center text-center transition-all hover:shadow-xl hover:scale-105">
      <img
        src={image}
        alt="user image"
        className="w-20 h-20 rounded-full mb-4"
      />
      <h4 className="text-xl font-bold">{name}</h4>
      <div className="flex flex-col mt-9">
        <img
          src="/assets/images/quote.png"
          alt=""
          className="mb-2 self-start "
        />
        <p className="mt-2 text-gray-600">{text}</p>
        <img
          src="/assets/images/quote.png"
          alt=""
          className="mt-2 self-end  "
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
