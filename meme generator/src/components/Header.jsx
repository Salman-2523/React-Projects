import trollface from "../assets/trollface.png";
import "../styles/header.css";
const Header = () =>{
    return (
        <header className = "header">
            <img src={trollface} alt="troll face" className="header--image"/>
            <h2 className = "header--title">Meme Generator</h2>
            <h4 className = "header--madeby">Made By - Salman </h4>
        </header>
    )
}

export default Header;