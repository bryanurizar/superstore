import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Deals from "./Deals/Deals";

import "./Main.css";

function Main() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/deals">
        <Deals />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
}

export default Main;
