import "../styles/navbar.css";
import logo from "../assets/airbnb.png";
const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="logo" className="logo" />
    </nav>
  )
};

export default Navbar;
