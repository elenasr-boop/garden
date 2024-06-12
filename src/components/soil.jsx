import { Link, useParams } from "react-router-dom";
import { Card } from "./cards/card.jsx";

const soilArr = [
  {
    name: "Глина",
    photo: "../../soil/clay.png",
    audio: "../../soil/clay.mp3",
  },
  {
    name: "Гумус",
    photo: "../../soil/humus.png",
    audio: "../../soil/humus.mp3",
  },
  {
    name: "Известь",
    photo: "../../soil/lime.png",
    audio: "../../soil/lime.mp3",
    
  },
  {
    name: "Песок",
    photo: "../../soil/sand.png",
    audio: "../../soil/sand.mp3",
  },
];

export function Soil() {
  let { plant } = useParams();
  let link = "/water/" + plant;  

  return (
     <div className="game__window">
      <Link to="/">
        <button className="close-btn">
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </Link>
      <div className="soil cards">
        {soilArr.map((el, id) => (<Card card={el} id={id} corAnsw={2} key={id} />))}
      </div>
      <div className="buttons">
        <Link to="/plants" className="before-btn">Назад</Link>
        <Link to={link} className="next-btn">Далее</Link>
      </div>
     </div>
  );
}
