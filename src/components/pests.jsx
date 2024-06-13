import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Cards } from "./cards/cards";

let pests = [
  [
    {
      img: "../../pests/insect/img/wrong.jpg",
      isCorrect: false,
    },
    {
      img: "../../pests/insect/img/clipping.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/clipping2.png",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/collectingInsects1.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/collectingInsects2.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/wrong2.jpg",
      isCorrect: false,
    },
    {
      img: "../../pests/insect/img/plan.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/collectingInsects3.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/predator1.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/predator2.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/toxic1.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/toxic2.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/treatment1.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/treatment2.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/weeding.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/weeding2.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/insect/img/whitewash.jpg",
      isCorrect: true,
    },
  ],
  [
    {
      img: "../../pests/weed/img/digging.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/weed/img/greenManure1.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/weed/img/greenManure2.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/weed/img/wrong1.jpg",
      isCorrect: false,
    },
    {
      img: "../../pests/weed/img/wrong2.jpg",
      isCorrect: false,
    },
    {
      img: "../../pests/weed/img/wrong3.jpg",
      isCorrect: false,
    },
    {
      img: "../../pests/weed/img/herbicide.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/weed/img/mulching1.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/weed/img/mulching2.png",
      isCorrect: true,
    },
    {
      img: "../../pests/weed/img/phytophage.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/weed/img/weeding1.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/weed/img/weeding2.jpg",
      isCorrect: true,
    },
  ],
  [
    {
      img: "../../pests/rodent/img/biologist.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/rodent/img/chem.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/rodent/img/mech1.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/rodent/img/mech2.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/rodent/img/wrong1.jpg",
      isCorrect: false,
    },
    {
      img: "../../pests/rodent/img/wrong2.jpg",
      isCorrect: false,
    },
    {
      img: "../../pests/rodent/img/phys1.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/rodent/img/phys2.jpg",
      isCorrect: true,
    },
    {
      img: "../../pests/rodent/img/wrong3.jpg",
      isCorrect: false,
    },
    {
      img: "../../pests/rodent/img/wrong4.png",
      isCorrect: false,
    },
  ],
];

export function Pests() {
  let { pestChoice } = useParams();

  return (
    <div className="game__window">
      <Link to="/">
        <button className="close-btn">
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </Link>

      <div className="cards pests">
        {pests[pestChoice].map((el, id) => {
          return (
            <Cards key={id} card={el} />
          )
        })}
      </div>

      <div className="buttons">
        <Link to={`/pest`} className="before-btn">
          Назад
        </Link>
      </div>
    </div>
  );
}
