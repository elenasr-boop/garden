import { useState } from "react";

export function Cards ({ id, card }) {
  const [correctAnsw, setCorrectAnsw] = useState(false);
  const [firstClick, setFirstClick] = useState(0);

  function choice(isTrue) {
    setFirstClick(firstClick + 1);

    if (isTrue) {
      setCorrectAnsw(true);
      return;
    }

    setCorrectAnsw(false);
  }

  return (
    <div
      onClick={() => choice(card.isCorrect)}
      className={`card ${
        !firstClick ? null : correctAnsw ? "correct" : "wrong"
      }`}
      key={id}
    >
      <div className="card__main">
        <img src={card.img} alt="" className="card__img" />
      </div>
    </div>
  );
}
