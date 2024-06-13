import { Link, useParams } from "react-router-dom";
import { Card } from "./cards/card";

const waterArr = [
  {
    name: "Малое количество воды",
    photo: "../../water/lesswater.jpg",
    audio: "../../water/lesswater.mp3",
  },
  {
    name: "Среднее количество воды",
    photo: "../../water/meanwater.jpg",
    audio: "../../water/meanwater.mp3",
  },
  {
    name: "Большое количество воды",
    photo: "../../water/lotwater.jpg",
    audio: "../../water/lotwater.mp3",
  },
];

export function Water() {
  let { plant } = useParams();

  return (
    <div className="game__window">
      <Link to="/">
        <button className="close-btn">
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </Link>
      <div className="water cards">
        {waterArr.map((el, id) => (
          <Card card={el} id={id} corAnsw={2} key={id} />
        ))}
      </div>
      <div className="buttons">
        <Link to={`/soil/${plant}`} className="before-btn">
          Назад
        </Link>
        <Link to={`/temperature/${plant}`} className="next-btn">
          Далее
        </Link>
      </div>
    </div>
  );
}
