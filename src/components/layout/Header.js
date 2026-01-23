import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
        <nav className="nav">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li>Contact</li>
            </ul>
        </nav>
  )
}

export default Header;