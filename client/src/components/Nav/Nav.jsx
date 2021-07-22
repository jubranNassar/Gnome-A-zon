import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink className="link shrink" to="/create">Rehome a Gnome</NavLink>
    <NavLink className="link shrink" to="/sign-out">Sign Out</NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link shrink" to="/sign-up">Sign Up</NavLink>
    <NavLink className="link shrink" to="/sign-in">Sign In</NavLink>
  </>
);
const alwaysOptions = (
  <>
    <NavLink className="link shrink" to="/">Home</NavLink>
    <NavLink className="link shrink" to="/gnomes">Gnomes</NavLink>
  </>
);

const upperCase = (username) =>{
let userArr = username.split('')
userArr[0] = userArr[0].toUpperCase()
return userArr.join('')
}
function Nav({ user }) {
  return (
    <nav>
      <div className="nav-container">
      <div className="nav">
        <div className="links">
          {user && <div className="link welcome">Welcome, {upperCase(user.username)}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
</div>
    </nav>
  );
}

export default Nav;
