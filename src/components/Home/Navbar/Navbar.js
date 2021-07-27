import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <navbar>
      <div className="logo">
        <Link to="/">Superstore</Link>
      </div>
      <div className="route">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/deals">Deals</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </div>
    </navbar>
  );
}

export default Navbar;
