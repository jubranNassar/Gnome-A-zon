import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const authenticatedOptions = (
  <>
    <NavLink className="link shrink" to="/create">
      Rehome a Gnome
    </NavLink>
    <NavLink className="link shrink" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link shrink" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link shrink" to="/sign-in">
      Sign In
    </NavLink>
  </>
);
const alwaysOptions = (
  <>
    <NavLink className="link shrink" to="/">
      Home
    </NavLink>
    <NavLink className="link shrink" to="/gnomes">
      Gnomes
    </NavLink>
  </>
);

const upperCase = (username) => {
  let userArr = username.split("");
  userArr[0] = userArr[0].toUpperCase();
  return userArr.join("");
};
function Nav({ user }) {
  const [visible, setVisible] = useState(true);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 707) {
        setVisible(true);
        setHamburger(false);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="nav-outer-container">
      <FontAwesomeIcon
          icon={faBars}
          onClick={() => setHamburger(!hamburger)}
        />
        
      <nav className="nav-container"
        style={{ display: visible || hamburger ? "flex" : "none" }}>
        <div className="nav-container">
          <div className="nav">
            <div className="links">
              {user && (
                <div className="link welcome shrink">
                  Welcome, {upperCase(user.username)}
                </div>
              )}
              {alwaysOptions}
              {user ? authenticatedOptions : unauthenticatedOptions}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
