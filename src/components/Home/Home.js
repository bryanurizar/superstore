import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import ProductsList from "./ProductsList/ProductsList";
import Item from "../Item/Item";

function Home(props) {
  let match = useRouteMatch();

  <ul>
    <li>
      <Link to={`${match.url}/items`}>Components</Link>
    </li>
  </ul>;

  <Switch>
    <Route path={`${match.path}/:topicId`}>
      <Item />
    </Route>
    <Route path={match.path}>
      <h3>Please select a topic.</h3>
    </Route>
  </Switch>;

  return <ProductsList products={props.products} />;
}

export default Home;
