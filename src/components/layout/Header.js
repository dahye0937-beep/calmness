import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () =>{
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li><Link to="/" end>Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;