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
