"use client";
import { MdPublic } from "react-icons/md";
import Tab from "./Tab";
import { useState } from "react";
import { PiUsersThree } from "react-icons/pi";

const HomeHeroTab = () => {
  const [activeTab, setActiveTab] = useState("public");

  return (
    <div className="flex">
      <Tab
        tabInfo={{
          label: "Public Tour",
          Icon: MdPublic,
        }}
        active={activeTab === "public"}
        onClick={() => setActiveTab("public")}
      />
      <Tab
        tabInfo={{
          label: "Private Tour",
          Icon: PiUsersThree,
        }}
        active={activeTab === "private"}
        onClick={() => setActiveTab("private")}
      />
    </div>
  );
};

export default HomeHeroTab;
