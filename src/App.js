import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignOut from "./pages/sign-in-sign-out/sign-in-sign-out.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// exact attribute on Route component matches the exact path
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  // here we are subscribing for changes in aut state
  // the subscription is offered by firebase
  // this subscribtion is available for all signin providers
  // like google, github and even direct email password signin
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // once the user s saved to firestore, we would subscribe to it
        userRef.onSnapshot((snapshot) => {
          // snapshot.data() would only return the actual data that we stored
          // but not the uid with whch it is stored, so we have to get it directly from snapshot
          // console.log(snapshot.data());
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      // if auth fails userAuth would be null so we directly set it to reflect that no user has logged in
      // this would be the case when user signout and the auth subscription returns null
      this.setState({ currentUser: userAuth });
    });
  }

  // we also need to clear the subscription to avoid memory leaks
  // when this component is no longer mounted
  componentWillUnmount() {
    // this would close the subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
