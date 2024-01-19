import React from "react";
import SideBar from "./SideBar";
import data from "./Data.json";
import "../components/Style/SideBar.css";
const OneWeek = () => {
  return (
    <div className="main">
      {data.map((item, index) => (
        <SideBar key={index} data={item} />
      ))}
    </div>
  );
};

export default OneWeek;