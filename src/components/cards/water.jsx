import { Link } from "react-router-dom";

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
    }];

export function Water () {
  let { plant } = useParams();
  let linkBack = "/soil/" + plant;
  let linkNext = "/temperature/" + plant;

  return (
     <div className="game__window">
      <Link to="/">
        <button className="close-btn">
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </Link>
      <div className="soil cards">
        {waterArr.map((el, id) => {
          
          return (
            <button className="card" key={id}>
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
        <Link to={linkBack} className="before-btn">Назад</Link>
        <button type="submit" className="before-btn">Проверить</button>
        <Link to={linkNext} className="next-btn">Далее</Link>
      </div>
     </div>
  );
}
