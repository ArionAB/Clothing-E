import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/Shop/shop.component";
import { Header } from "./components/header/header.component";
import SigninAndSignUpPage from "./pages/Sign-in-up/sign-in-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useState } from "react";
import { useEffect } from "react";

import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsuscribeFromAuthh = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          console.log(snapShot); // has an ID
          console.log(snapShot.data()); //has information about user but no ID

          setCurrentUser({ id: snapShot.id, ...snapShot.data() }); //we created this object so the current user can have the ID and the DATA
          console.log(currentUser);
        });
      } else setCurrentUser(null);
    }); //equivalent of saying null if
    //  the user is not logged in
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninAndSignUpPage} />
      </Switch>
    </div>
  );
};
export default App;

/* import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/Shop/shop.component";
import { Header } from "./components/header/header.component";
import SigninAndSignUpPage from "./pages/Sign-in-up/sign-in-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          console.log(snapShot); // has an ID
          console.log(snapShot.data()); //has information about user but no ID

          this.setState(
            {
              //we created this object so the current user can have the ID and the DATA
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else this.setState({ currentUser: userAuth }); //equivalent of saying null if
      //  the user is not logged in
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
 */
