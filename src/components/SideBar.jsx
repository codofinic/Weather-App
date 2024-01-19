import React, { useState } from "react";
import "../components/Style/SideBar.css";

const SideBar = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { day, temp, img, desc } = data;
  const handelHover = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <div
        id="container"
        onClick={handelHover}
        className={isClicked ? "borderHover" : " "}
      >
        <p>{day}</p>
        <p>{temp}</p>
        <img src={img} alt={img} className="image" />
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SideBar;