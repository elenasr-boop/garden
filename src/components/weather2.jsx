import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Cards } from "./cards/cards";

let weather2 = [
  [
    {
      img: "../../weather/drought/img/combination.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/drought/img/wrong.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/drought/img/conservation.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/drought/img/implementation.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/drought/img/wrong2.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/drought/img/plowing.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/drought/img/pre-sowing.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/drought/img/regulation1.webp",
      isCorrect: true,
    },
    {
      img: "../../weather/drought/img/regulation2.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/drought/img/wrong3.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/drought/img/regulation3.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/drought/img/wrong4.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/drought/img/slope.jpg",
      isCorrect: true,
    },
  ],
  [
    {
      img: "../../weather/flood/img/aeration.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/flood/img/aeration2.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/flood/img/fertilizers.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/flood/img/wrong.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/flood/img/trench.jpg",
      isCorrect: true,
    },
  ],
  [
    {
      img: "../../weather/frost/img/bottle.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/frost/img/wrong.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/frost/img/heating.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/frost/img/hilling.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/frost/img/wrong2.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/frost/img/mulching.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/frost/img/mulching2.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/frost/img/shelter.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/frost/img/wrong3.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/frost/img/shelter2.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/frost/img/shelter3.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/frost/img/wrong4.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/frost/img/warmBeds.jpg",
      isCorrect: true,
    },
  ],
  [
    {
      img: "../../weather/heat/img/automaticWatering.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/heat/img/wrong.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/heat/img/distantLanding.png",
      isCorrect: true,
    },
    {
      img: "../../weather/heat/img/wrong2.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/heat/img/mulching.png",
      isCorrect: true,
    },
    {
      img: "../../weather/heat/img/net.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/heat/img/wrong3.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/heat/img/weeding.png",
      isCorrect: true,
    },
  ],
  [
    {
      img: "../../weather/thaw/img/crust.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/thaw/img/wrong.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/thaw/img/self-pressing.png",
      isCorrect: true,
    },
    {
      img: "../../weather/thaw/img/shelter.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/thaw/img/wrong2.jpg",
      isCorrect: false,
    },
    {
      img: "../../weather/thaw/img/shelter1.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/thaw/img/shelter2.jpg",
      isCorrect: true,
    },
    {
      img: "../../weather/thaw/img/wrong3.jpg",
      isCorrect: true,
    },
  ],
];

export function Weather2() {
    let { weatherChoice } = useParams();

    return (
      <div className="game__window">
        <Link to="/">
          <button className="close-btn">
            <img src="../icons/circle-xmark.svg" className="close-img" />
          </button>
        </Link>
  
        <div className="cards pests">
          {weather2[weatherChoice].map((el, id) => {
            return (
                <Cards key={id} card={el} />
            );
          })}
        </div>
  
        <div className="buttons">
          <Link to={`/weather`} className="before-btn">
            Назад
          </Link>
        </div>
      </div>
    );
}
