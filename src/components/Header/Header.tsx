import { Link } from "react-router-dom";
import LogoGW from "../../img/LogoGW.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div>
          <img src={LogoGW} alt="Dashboard Logo" />
          <h4>Home</h4>
        </div>
        <h1>Global Warming Dashboard</h1>
      </Link>
    </header>
  );
};

export default Header;
