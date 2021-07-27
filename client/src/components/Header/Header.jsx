import Nav from "../Nav/Nav.jsx";
import "./Header.css";
import Dabber from "../../images/dabberlogogreen.jpg";
import { Link } from "react-router-dom";


function Header(props) {


  const quoteBox = () => {
    let quote
    if (props.screen === 'home' || props.screen === 'products') {
      quote = "Home is where our story begins…"
    } else if (props.screen === 'detail') {
      quote =
        "My new home should be called Dream Land because it is really the stuff dreams are made of"
    } else if (props.screen === 'create') {
      quote =
        "Creating is about sharing ideas, sharing aesthetics, sharing what you believe in with other people."
    } else if (props.screen === 'edit') {
      quote = "To improve is to change; to be perfect is to change often."
    } else if (props.screen === 'sign-up') {
      quote = "Come in! come in !" 
    } else if (props.screen === 'sign-in') {
      quote = "Welcome back! This place hasn’t been the same without you"
    }
return quote 
};


  return (
    <div className="header">
      <div className="quote-box">
        <div className="quote">
          <p>{quoteBox()}</p>
        </div>
        <div className="location">
          <p>Scandinavia, Norway</p>
        </div>
      </div>
      <div className="title">
        <Link to="/">
          <img id="dabber_logo" src={Dabber} alt="gnome-logo" />
        </Link>
      </div>
      <Nav user={props.user} />
    </div>
  );
}

export default Header;
