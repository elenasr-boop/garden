import { Link, useParams } from "react-router-dom";
import { Card } from "./cards/card";

const temp = [
    {
        name: "Низкая температура",
        photo: "../../temp/lesstemp.jpg",
        audio: "../../temp/lesstemp.mp3",
    }, 
    {
        name: "Средняя температура",
        photo: "../../temp/meantemp.png",
        audio: "../../temp/meantemp.mp3",
    }, 
    {
        name: "Высокая температура",
        photo: "../../temp/lottemp.png",
        audio: "../../temp/lottemp.mp3",
    }];

export function Temp () {
  let { plant } = useParams();

  return (
    <div className="game__window">
      <Link to="/">
        <button className="close-btn">
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </Link>
      <div className="water cards">
        {temp.map((el, id) => (
          <Card card={el} id={id} corAnsw={2} key={id} />
        ))}
      </div>
      <div className="buttons">
        <Link to={`/water/${plant}`} className="before-btn">
          Назад
        </Link>
        <Link to={`/fertilizer/${plant}`} className="next-btn">
          Далее
        </Link>
      </div>
    </div>
  );
}
