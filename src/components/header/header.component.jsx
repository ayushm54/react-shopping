import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

// in mapStateToProps we receive the rootreducer state
// and read and map the required fields from this state
// so now this current user from the state would act as a prop for this component
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// connect is a higher order function which would modify the header component to access redux store
export default connect(mapStateToProps)(Header);
