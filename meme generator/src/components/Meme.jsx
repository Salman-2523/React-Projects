import { useEffect, useState } from "react";
import "../styles/meme.css";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleGetNewMeme = () => {
    const random = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[random].url;
    setMeme((prevState) => {
      return { ...prevState, randomImage: url };
    });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setMeme((prevMeme) => {
      return { ...prevMeme, [name]: value };
    });
  };

  return (
    <>
      <div className="input">
        <div className="input--container">
          <input
            type="text"
            className="input--field"
            name="topText"
            onChange={handleChange}
            placeholder="Top Text"
            value={meme.topText}
          />
          <input
            type="text"
            className="input--field"
            name="bottomText"
            onChange={handleChange}
            placeholder="Bottom Text"
            value={meme.bottomText}
          />
        </div>
        <button className="input--btn" onClick={handleGetNewMeme}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
};

export default Meme;
