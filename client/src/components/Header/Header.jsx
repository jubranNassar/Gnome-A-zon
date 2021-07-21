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
        <p>Gnome - A - Zon</p>
      </div>
      <Nav />;
    </div>
  );
}

export default Header;
