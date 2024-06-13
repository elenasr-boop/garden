import { Link } from "react-router-dom";

export function Main() {

  return (
    <>
      <div className="main">
        <Link to="/plants">
          <button className="start__btn">
            Начать игру
          </button>
        </Link>        
      </div>

      <div className="footer">
        <img src="../icons/greenhouse.png" className="logo" />
        <p className="credits">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          natus quis est ut reiciendis illo aspernatur labore.
        </p>
      </div>
    </>
  );
}