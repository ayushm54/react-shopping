import React from "react";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={cartItem.imageUrl} />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <i className="fa fa-minus" aria-hidden="true"></i>
      {cartItem.quantity}
      <i className="fa fa-plus" aria-hidden="true"></i>
    </span>
    <span className="price">{cartItem.price}</span>
    <div className="remove-button">
      <i className="fa fa-trash" aria-hidden="true"></i>
    </div>
  </div>
);

export default CheckOutItem;
