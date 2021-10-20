import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/Shop/shop.component";
import { Header } from "./components/header/header.component";
import SigninAndSignUpPage from "./pages/Sign-in-up/sign-in-up";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
