import LogoGW from "../../img/LogoGW.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={LogoGW} alt="" />
      <h1>Global Warming Dashboard</h1>
    </header>
  );
};

export default Header;
