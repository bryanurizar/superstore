import { Link, NavLink } from "react-router-dom";

// test of gitpod
import "./Navbar.css";

function Navbar() {
  const activeStyles = {
    color: "#F38601",
  };
  const linkStyles = { textDecoration: "none", color: "white" };

  return (
    <nav>
      <div className="logo">
        <Link style={linkStyles} to="/">
          Superstore
        </Link>
      </div>
      <div className="routes">
        <ul>
          <li>
            <NavLink exact style={linkStyles} activeStyle={activeStyles} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={linkStyles} activeStyle={activeStyles} to="/deals">
              Deals
            </NavLink>
          </li>
          <li>
            <NavLink style={linkStyles} activeStyle={activeStyles} to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
