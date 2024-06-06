const weather = [
  {
    name: "Засуха",
    photo: "../../public/weather/drought/drought.jpg",
    audio: "../../public/weather/drought/drought.mp3",
  },
  {
    name: "Наводнение",
    photo: "../../public/weather/flood/flood.jpg",
    audio: "../../public/weather/flood/flood.mp3",
  },
  {
    name: "Заморозок",
    photo: "../../public/weather/frost/frost.jpg",
    audio: "../../public/weather/frost/frost.mp3",
  },
  {
    name: "Зной",
    photo: "../../public/weather/heat/heat.jpg",
    audio: "../../public/weather/heat/heat.mp3",
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
