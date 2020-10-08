import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckOutItem = ({
  cartItem,
  clearItem,
  incrementItem,
  decrementItem,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={cartItem.imageUrl} />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <i
        className="fa fa-minus operator"
        aria-hidden="true"
        onClick={() => decrementItem(cartItem)}
      ></i>
      <div className="value">{cartItem.quantity}</div>
      <i
        className="fa fa-plus operator"
        aria-hidden="true"
        onClick={() => incrementItem(cartItem)}
      ></i>
    </span>
    <span className="price">{cartItem.price}</span>
    <div className="remove-button" onClick={() => clearItem(cartItem)}>
      <i className="fa fa-trash" aria-hidden="true"></i>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  incrementItem: (item) => dispatch(addItemToCart(item)),
  decrementItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
