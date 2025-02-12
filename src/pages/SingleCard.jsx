import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function SingleCard() {
  const [card, setCard] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://dragonball-api.com/api/characters/${id} `)
      .then((res) => {
        setCard(res.data);
      });
  }, [id]);
  return (
    <>
      <div className="single-character">
        <Link to="/">←</Link>
        <div className="character-img">
          <img src={card.image} alt="img" />
        </div>
        <div className="character-info">
          <h2 className="character-name">{card.name}</h2>
          <div className="character-description">
            <p>{card.race}</p>
            <h3>Base KI</h3>
            <p>{card.ki}</p>
            <h3>Description</h3>
            <p>{card.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
