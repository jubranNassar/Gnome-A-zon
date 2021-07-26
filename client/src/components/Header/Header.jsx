import Nav from "../Nav/Nav.jsx";
import './Header.css'
import Dabber from "../../images/dabberlogogreen.jpg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <div className="quote-box">
        <div className="quote">
          <p>“Home is where our story begins…”</p>
        </div>
        <div className="location">
          <p>Scandinavia, Norway</p>
        </div>
      </div>
      <div className="title">
        <Link to="/">
        < img id="dabber_logo" src= {Dabber} alt="gnome-logo"/> 
        </Link>
        
      </div>
      <Nav user={props.user}/>
    </div>
  );
}

export default Header;
