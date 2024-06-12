import { Link, useParams } from "react-router-dom";
import { Card } from "./cards/card";

const light = [
    {
        name: "Малое количество света",
        photo: "../../light/lesslight.jpg",
        audio: "../../light/lesslight.mp3",
    }, 
    {
        name: "Среднее количество света",
        photo: "../../light/meanlight.jpg",
        audio: "../../light/meanlight.mp3",
    }, 
    {
        name: "Большое количество света",
        photo: "../../light/lotlight.jpg",
        audio: "../../light/lotlight.mp3",
    }];

export function Light () {
  let { plant } = useParams();

  return (
     <div className="game__window">
      <Link to="/">
        <button className="close-btn">
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </Link>
      <div className="soil cards">
        {light.map((el, id) => (<Card card={el} id={id} corAnsw={2} key={id} />))}
      </div>
      <div className="buttons">
        <Link to={`/fertilizer/${plant}`} className="before-btn">Назад</Link>
        <Link to={`/complication`} className="next-btn">Далее</Link>
      </div>
     </div>
  );
}
