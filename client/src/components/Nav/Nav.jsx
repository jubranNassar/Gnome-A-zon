import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOption = (
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
const alwaysOption = (
  <>
    <NavLink to="/gnomes">Gnomes</NavLink>
  </>
);
function Nav({ user }) {
  return (
    <nav>
      <div className="nav"> 

      </div>
    </nav>
  );
}

export default Nav;
