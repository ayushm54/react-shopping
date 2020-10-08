import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty.</span>
      )}
    </div>
    <CustomButton
      type="button"
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push("/checkout");
      }}
    >
      Go To Check out
    </CustomButton>
  </div>
);

// const mapStateToProps = (state) => ({
//   cartItems: state.cart.cartItems,
// });
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

// withRouter is a HOC which helps add routing to our component
// like adding history object to the component

// if we do not supply mapDispatchToProps as second arg to connect
// it passes dispatch as a prop to the component
export default withRouter(connect(mapStateToProps)(CartDropdown));
