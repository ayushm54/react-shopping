import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // desructuring the firebase UserCredential object to pull out the newly created user
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      // clearing the form after creating the user
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signUp">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            handleChange={this.handleChange}
            type="text"
            name="displayName"
            value={this.state.displayName}
            required
          />
          <FormInput
            label="Email"
            handleChange={this.handleChange}
            type="email"
            name="email"
            value={this.state.email}
            required
          />
          <FormInput
            label="Password"
            handleChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <FormInput
            label="Confirm Password"
            handleChange={this.handleChange}
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            required
          />
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
