import { Link, useParams } from "react-router-dom";
import { Card } from "./cards/card";

const fertilizer = [
    {
        name: "Малое количество удобрений",
        photo: "../../fertilizer/lessfertilizer.webp",
        audio: "../../fertilizer/lessfertilizer.mp3",
    }, 
    {
        name: "Среднее количество удобрений",
        photo: "../../fertilizer/meanfertilizer.png",
        audio: "../../fertilizer/meanfertilizer.mp3",
    }, 
    {
        name: "Большое количество удобрений",
        photo: "../../fertilizer/lotfertilizer.jpg",
        audio: "../../fertilizer/lotfertilizer.mp3",
    }];

export function Fertilizer() {
  let { plant } = useParams();

  return (
    <div className="game__window">
      <Link to="/">
        <button className="close-btn">
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </Link>
      <div className="water cards">
        {fertilizer.map((el, id) => (
          <Card card={el} id={id} corAnsw={2} key={id} />
        ))}
      </div>
      <div className="buttons">
        <Link to={`/temperature/${plant}`} className="before-btn">
          Назад
        </Link>
        <Link to={`/light/${plant}`} className="next-btn">
          Далее
        </Link>
      </div>
    </div>
  );
}
