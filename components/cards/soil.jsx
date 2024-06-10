import { Link, useParams } from "react-router-dom";

const soil = [
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
        {soil.map((el, id) => {
          function handleClick ( {id} ) {
            console.log("Вы нажали на ", soil[id].name);
          }

          return (
            <button onClick={handleClick({ id })} className="card" key={id}>
              <div className="card__main">
                <p className="card__name">{el.name}</p>
                <img src={el.photo} alt={el.name} className="card__img" />
                <figure className="card__audio">
                  <audio controls src={el.audio}></audio>
                </figure>
              </div>
              <p className="card__desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
                minima sint autem laborum, in minus.
              </p>
            </button>
          );
        })}
      </div>
      <div className="buttons">
        <Link to="/plants" className="before-btn">Назад</Link>
        <button type="submit" className="before-btn">Проверить</button>
        <Link to={link} className="next-btn">Далее</Link>
      </div>
     </div>
  );
}
