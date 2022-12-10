import hero from "../assets/hero.png";
import "../styles/hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="Airbnb" />
      <div className = "hero-title-summary">
      <h1> Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
      </div>
    </div>
  );
};

export default Hero;
