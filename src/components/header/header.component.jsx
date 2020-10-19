import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// not needed as now we are using styled components
//import "./header.styles.scss";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  // OptionDiv,
} from "./header.styles";
const Header = ({ currentUser, hidden }) => (
  // <div className="header">
  //   <Link to="/" className="logo-container">
  //     <Logo className="logo" />
  //   </Link>
  //   <div className="options">
  //     <Link to="/shop" className="option">
  //       SHOP
  //     </Link>
  //     <Link to="/shop" className="option">
  //       CONTACT
  //     </Link>
  //     {currentUser ? (
  //       <div className="option" onClick={() => auth.signOut()}>
  //         {" "}
  //         SIGN OUT
  //       </div>
  //     ) : (
  //       <Link to="/signin" className="option">
  //         SIGN IN
  //       </Link>
  //     )}
  //     <CartIcon />
  //   </div>
  //   {hidden ? null : <CartDropdown />}
  // </div>

  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        //<OptionDiv onClick={() => auth.signOut()}> SIGN OUT</OptionDiv>
        // we could even use the same styled component as OptionLink but can render it as a div
        <OptionLink as="div" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// in mapStateToProps we receive the rootreducer state
// and read and map the required fields from this state
// so now this current user from the state would act as a prop for this component
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden,
// });

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

// the above mapStateToProps could be rewritten using createStructuredSelector as below
// createStructuredSelector woud automatically pass the state to individual selectors
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// connect is a higher order function which would modify the header component to access redux store
export default connect(mapStateToProps)(Header);
