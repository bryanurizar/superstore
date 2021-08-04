import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Deals from "./Deals/Deals";

import "./Main.css";

function Main() {
  const [products, setProducts] = useState([]);

  async function getProductsData(url) {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getProductsData("https://gp-super-store-api.herokuapp.com/item/list")
      .then((data) => setProducts(data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home products={products} />
      </Route>
      <Route path="/deals">
        <Deals products={products} />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
}

export default Main;
