import { Link } from "react-router-dom";

const plantsArr = [
  {
    name: "Акация",
    audio: "../../plants/acacia.mp3",
    photo: "../../plants/acacia.png",
  },
  {
    name: "Яблоня",
    audio: "../../plants/apple.mp3",
    photo: "../../plants/apple.jpg",
  },
  {
    name: "Ель",
    audio: "../../plants/fir.mp3",
    photo: "../../plants/fir.jpg",
  },
  {
    name: "Клубника",
    audio: "../../plants/strawberry.mp3",
    photo: "../../plants/strawberry.jpg",
  },
  {
    name: "Помидор",
    audio: "../../plants/tomato.mp3",
    photo: "../../plants/tomato.jpg",
  },
  {
    name: "Пшеница",
    audio: "../../plants/wheat.mp3",
    photo: "../../plants/wheat.jpg",
  },
];

export function Plants() {
  return (
    <div className="game__window">
      <Link to="/">
        <button className="close-btn">
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </Link>
      <div className="plants cards">
        {plantsArr.map((el, id) => {
          let link = "/soil/"+id;
          return (
            <Link to={link} className="card" key={id}>
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}
