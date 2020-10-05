import React from "react";
import "./menu-item.styles.scss";

// destructuring the props to retrieve title
const MenuItem = ({ title, imageUrl, size }) => (
  // here in class name we are also passing the size
  // received from the main menu component and can use it in
  // scss to apply additonal styles if this value matches with expected
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
