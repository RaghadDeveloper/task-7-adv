import { GiGolfFlag } from "react-icons/gi";
import { IoCarSportOutline, IoTimeOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";

export const formData = [
  {
    Icon: PiUsersThree,
    label: "Number of people",
    options: ["Choose number", "1", "2", "3", "more"],
  },
  {
    Icon: LuCalendarDays,
    label: "Date",
    options: ["Choose Date", "2024-07-01", "2024-07-02", "2024-07-03"],
  },
  {
    Icon: IoTimeOutline,
    label: "Time",
    options: ["Choose Time", "08:00 AM", "10:00 AM", "12:00 PM"],
  },
  {
    Icon: GiGolfFlag,
    label: "Tour",
    options: ["Choose Tour", "City Tour", "Museum Tour", "Nature Tour"],
  },
  {
    Icon: IoCarSportOutline,
    label: "Transportation",
    options: ["Select Transportation", "Car", "Bus", "Bike"],
  },
];

export const aboutData = {
  image: "/assets/images/AboutPicture.png",
  subTitle: "WELCOME TO OUR SITE!",
  title: "We are the best company for your visit",
  description:
    "After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!",
  aboutInfos: [
    { value: 20, text: "Years Experience" },
    { value: 100, text: "Happy Customer" },
    { value: 15, text: "Choice of Services" },
    { value: 10, text: "Professional Guides" },
  ],
  page: "home",
};
