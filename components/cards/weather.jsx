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
  }
];

export function Weather() {
  return (
    <div className="weather cards">
      {weather.map((el, id) => {
        return (
            <div className="card">
            <div className="card__main">
              <p className="card__name">{el.name}</p>
              <img src={el.photo} alt={el.name} className="card__img" />
              <figure className="card__audio">
                <audio controls src={el.audio}></audio>
              </figure>
            </div>
          </div>
        );
      })}
    </div>
  );
}
