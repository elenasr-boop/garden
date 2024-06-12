import { Link } from "react-router-dom";

export function Complication() {
  return (
    <div className="game__window">
      <Link to="/">
        <button className="close-btn">
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </Link>
      <div className="choice cards">
        <Link to="/pest" className={`card`}>
          <div className="card__main">
            <p className="card__name">Насекомые</p>
            <img src="../pests/insect/insect.jpg" alt="Насекомые" className="card__img" />
          </div>
        </Link>
        <Link to="/weather" className={`card`}>
          <div className="card__main">
            <p className="card__name">Погодные условия</p>
            <img src="./weather/frost/frost.jpg" alt="Погодные условия" className="card__img" />
          </div>
        </Link>
      </div>
    </div>
  );
}
