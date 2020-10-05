import React from "react";
// withRouter is a Higher Order Component(HOC)
// a HOC is basically a function that takes
// a component as an argument and returns a modified component with same name as passed component
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

// destructuring the props to retrieve title
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  // here in class name we are also passing the size
  // received from the main menu component and can use it in
  // scss to apply additonal styles if this value matches with expected

  // here for routing we are first fetching the current url from match prop
  // and then appending the linkUrl for eachMenuItem we received from the parent component
  // when we push the new url to the history object, the browser changes the url and routing works
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

// withRouter HOC would now modify the MenuItem component
// and add the router props that is location, history and map
// to the MenuItem Component, so now we could read any of this props in our MenuItem Component
export default withRouter(MenuItem);
