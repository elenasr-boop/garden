import { Link } from "react-router-dom";
import { Card } from "./cards/card";

const pest = [
    {
        name: "Насекомые",
        photo: "../../pests/insect/insect.jpg",
        audio: "../../pests/insect/insect.mp3"
    }, 
    {
        name: "Сорняки",
        photo: "../../pests/weed/weed.jpg",
        audio: "../../pests/weed/weed.mp3"
    }, 
    {
        name: "Грызуны",
        photo: "../../pests/rodent/rodent.jpg",
        audio: "../../pests/rodent/rodent.mp3"
    }];

export function Pest () {
  return (
    <div className="game__window">
      <Link to="/">
        <button className="close-btn">
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </Link>
      <div className="pest cards">
        {pest.map((el, id) => (
          <Link to={`/pests/${id}`} className={`card`}>
          <div className="card__main">
            <p className="card__name">{el.name}</p>
            <img src={el.photo} alt={el.name} className="card__img" />
            <figure className="card__audio">
              <audio controls src={el.audio}></audio>
            </figure>
          </div>
        </Link>
        ))}
      </div>
      <div className="buttons">
        <Link to={`/complication`} className="before-btn">
          Назад
        </Link>
        <Link to="/pests" className="next-btn">
          Далее
        </Link>
      </div>
    </div>
  );
}
