import Nav from "../Nav/Nav.jsx";
import './Header.css'

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
        <p>Gnome -</p> <img src="../../images/Dabbing_Gnome.png" alt="gnome" /> <p>- Zon</p>
      </div>
      <Nav user={props.user}/>
    </div>
  );
}

export default Header;
