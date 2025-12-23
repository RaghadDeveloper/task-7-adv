import { BiSupport } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import {
  FaBottleWater,
  FaHandHoldingDollar,
  FaPersonMilitaryPointing,
  FaPersonMilitaryRifle,
} from "react-icons/fa6";
import { IoBusOutline } from "react-icons/io5";
import { LuBike, LuTicketPercent, LuTickets } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { TbFriends } from "react-icons/tb";
import { TfiMapAlt } from "react-icons/tfi";

export const destinantionCards = [
  {
    image: "/assets/images/Destinantion1.png",
    title: "Lucca Bike Tour",
    price: 34,
    date: "EVERY DAY",
    capacity: "3-10 PP",
    description:
      "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    image: "/assets/images/Destinantion2.png",
    title: "Wine tasting In Tuscany",
    price: 34,
    date: "MONDAY",
    capacity: "10-30 PP",
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
  },
  {
    image: "/assets/images/Destinantion3.jpg",
    title: "Cinque Terre Tour",
    price: 34,
    date: "TO BE DECIDED",
    capacity: "10-50 PP",
    description:
      "Visiting the 5 Terre is a must, and you can never go there enough ...",
  },
  {
    image: "/assets/images/Destinantion4.png",
    title: "Siena and Surroundings",
    price: 34,
    date: "TO BE DECIDED",
    capacity: "5-10 PP",
    description:
      "Visit the beautiful Siena and the cities that surround it to experience ...",
  },
  {
    image: "/assets/images/Destinantion1.png",
    title: "Lucca Bike Tour",
    price: 34,
    date: "EVERY DAY",
    capacity: "3-10 PP",
    description:
      "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    image: "/assets/images/Destinantion2.png",
    title: "Wine tasting In Tuscany",
    price: 34,
    date: "MONDAY",
    capacity: "10-30 PP",
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
  },
  {
    image: "/assets/images/Destinantion3.jpg",
    title: "Cinque Terre Tour",
    price: 34,
    date: "TO BE DECIDED",
    capacity: "10-50 PP",
    description:
      "Visiting the 5 Terre is a must, and you can never go there enough ...",
  },
  {
    image: "/assets/images/Destinantion4.png",
    title: "Siena and Surroundings",
    price: 34,
    date: "TO BE DECIDED",
    capacity: "5-10 PP",
    description:
      "Visit the beautiful Siena and the cities that surround it to experience ...",
  },
];

export const servicesCards = [
  {
    image: "/assets/images/Service1.png",
    title: "Bike and rickshaw rental",
    description: "Book your quality vehicle quickly for an hour or all day!",
  },
  {
    image: "/assets/images/Service2.jpg",
    title: "Guided tour of the countryside",
    description:
      "Live the real Lucchese experience by visiting the suburbs by bike!",
  },
  {
    image: "/assets/images/Service3.jpg",
    title: "Taxi and NCC service",
    description:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    image: "/assets/images/Service4.png",
    title: "Bus Package",
    description:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
];

export const inputsFields = [
  {
    type: "text",
    label: "Name and Surname",
    placeholder: "Enter your name and surname",
  },
  {
    type: "email",
    label: "Email Address",
    placeholder: "Enter your email address",
  },
  {
    type: "text",
    label: "Telephone Number",
    placeholder: "Enter your telephone number",
  },
  {
    label: "Service Type",
    placeholder: "Select the service types",
    options: ["Bike Rental", "Guided Tour", "Taxi Service", "Bus Package"],
  },
  { label: "Date", placeholder: "Select the date", type: "date" },
  { label: "Time", placeholder: "Select the time", type: "time" },
];

export const packageCards = [
  {
    image: "/assets/images/Package1.png",
    title: "BIKE / RICKSHAW",
    price: "10",
    features: [
      { Icon: CiCalendarDate, text: "Your bike for a day" },
      { Icon: TfiMapAlt, text: "City App" },
      { Icon: LuTicketPercent, text: "Discount on Rickshaw" },
      { Icon: BiSupport, text: "Guaranteed Support" },
    ],
  },
  {
    image: "/assets/images/Package2.png",
    title: "BIKE TOURS",
    price: "30",
    features: [
      { Icon: LuBike, text: "A Mountain Bike Included" },
      { Icon: FaPersonMilitaryRifle, text: "A Guide For You" },
      { Icon: FaBottleWater, text: "Bottle of water" },
      { Icon: BiSupport, text: "Guaranteed Support" },
    ],
  },
  {
    image: "/assets/images/Package3.png",
    title: "BUS TRIPS",
    price: "45",
    features: [
      { Icon: LuTickets, text: "Park ticket" },
      { Icon: IoBusOutline, text: "Return bus" },
      { Icon: TbFriends, text: "Companion" },
      { Icon: BiSupport, text: "Guaranteed Support" },
    ],
  },
  {
    image: "/assets/images/Package4.png",
    title: "TRANSFER ",
    price: "10",
    features: [
      { Icon: FaPersonMilitaryPointing, text: "Personal Driver" },
      { Icon: SlLocationPin, text: "Wherever You Want" },
      { Icon: FaHandHoldingDollar, text: "At the best price" },
      { Icon: BiSupport, text: "Guaranteed Support" },
    ],
  },
];

export const testimonialsCards = [
  {
    image: "/assets/images/user.png",
    name: "Lyod Gomez1",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    image: "/assets/images/user.png",
    name: "Lyod Gomez2",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    image: "/assets/images/user.png",
    name: "Lyod Gomez3",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    image: "/assets/images/user.png",
    name: "Lyod Gomez4",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
];
