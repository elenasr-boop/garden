import { useEffect, useState } from "react";

export function Card({ id, card, corAnsw }) {
  const [correctAnsw, setCorrectAnsw] = useState(false);
  const [firstClick, setFirstClick] = useState(0);

  function choice(id) {
    setFirstClick(firstClick + 1);

    if (id === corAnsw) {
      setCorrectAnsw(true);
      return;
    }

    setCorrectAnsw(false);
  }

  useEffect(() => {
    if (correctAnsw) {
      return;
    }

    setTimeout(() => {
      setFirstClick(0);
    }, 1000);
  }, [firstClick]);

  return (
    <div
      onClick={() => choice(id)}
      className={`card ${
        !firstClick ? null : correctAnsw ? "correct" : "wrong"
      }`}
      key={id}
    >
      <div className="card__main">
        <p className="card__name">{card.name}</p>
        <img src={card.photo} alt={card.name} className="card__img" />
        <figure className="card__audio">
          <audio controls src={card.audio}></audio>
        </figure>
      </div>
      <p className="card__desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis minima
        sint autem laborum, in minus.
      </p>
    </div>
  );
}
