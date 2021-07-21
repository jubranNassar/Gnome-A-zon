import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink to="/create">Rehome a Gnome</NavLink>
    <NavLink to="/sign-out">Sign Out</NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink to="/sign-up">Sign Up</NavLink>
    <NavLink to="/sign-in">Sign In</NavLink>
  </>
);
const alwaysOptions = (
  <>
    <NavLink to="/gnomes">Gnomes</NavLink>
  </>
);
function Nav({ user }) {
  return (
    <nav>
      <div className="nav">
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
