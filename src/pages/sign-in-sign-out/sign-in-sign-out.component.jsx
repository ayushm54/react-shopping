import React from "react";
import Signin from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-sign-out.styles.scss";

const SignInSignOut = () => (
  <div className="sign-in-sign-out">
    <Signin />
    <SignUp />
  </div>
);

export default SignInSignOut;
