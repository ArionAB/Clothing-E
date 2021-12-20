import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/Shop/shop.component";
import Header from "./components/header/header.component";
import SigninAndSignUpPage from "./pages/Sign-in-up/sign-in-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

const App = ({ setCurrentUser, currrentUser }) => {
  useEffect(() => {
    const unsuscribeFromAuthh = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot); // has an ID
          // console.log(snapShot.data()); //has information about user but no ID

          setCurrentUser({ id: snapShot.id, ...snapShot.data() }); //we created this object so the current user can have the ID and the DATA
        });
      }
      setCurrentUser(userAuth);
    });
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currrentUser ? <Redirect to="/" /> : <SigninAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currrentUser: user.currrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
