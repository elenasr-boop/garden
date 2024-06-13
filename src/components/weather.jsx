import { Link } from "react-router-dom";

const weather = [
  {
    name: "Засуха",
    photo: "../../weather/drought/drought.jpg",
    audio: "../../weather/drought/drought.mp3",
  },
  {
    name: "Наводнение",
    photo: "../../weather/flood/flood.jpg",
    audio: "../../weather/flood/flood.mp3",
  },
  {
    name: "Заморозок",
    photo: "../../weather/frost/frost.jpg",
    audio: "../../weather/frost/frost.mp3",
  },
  {
    name: "Зной",
    photo: "../../weather/heat/heat.jpg",
    audio: "../../weather/heat/heat.mp3",
  },
  {
    name: "Оттепель",
    photo: "../../weather/thaw/thaw.jpg",
    audio: "../../weather/thaw/thaw.mp3",
  }
];

export function Weather() {
  return (
    <div className="game__window">
      <Link to="/">
        <button className="close-btn">
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </Link>
      <div className="weather cards">
        {weather.map((el, id) => (
          <Link to={`/weather/${id}`} className={`card`}>
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
