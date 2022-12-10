import star from "../assets/star.png";
import img1 from "../assets/img1.png";
import "../styles/card.css";
const Card = ({ item }) => {
  let badgeText;
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={img1} alt="card image" className="card--img" />
      <div className="card--star-text">
        <img src={star} alt="star" className="star" />
        <p>
          {item.stats.rating} ({item.stats.reviewCount}). {item.location}
        </p>
      </div>
      <p className="card--description">{item.title}</p>
      <p className="card--price">
        {" "}
        <span id="span">From ${item.price}</span> / person{" "}
      </p>
    </div>
  );
};

export default Card;
