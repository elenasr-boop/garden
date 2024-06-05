const water = [
    {
        name: "Малое количество воды",
        photo: "../../public/water/lesswater.jpg",
        audio: "../../public/water/lesswater.mp3",
    }, 
    {
        name: "Среднее количество воды",
        photo: "../../public/water/meanwater.jpg",
        audio: "../../public/water/meanwater.mp3",
    }, 
    {
        name: "Большое количество воды",
        photo: "../../public/water/lotwater.jpg",
        audio: "../../public/water/lotwater.mp3",
    }];

export function Water ({ plant: string }) {
  return (
    <div className="light cards">
      {water.map((el, id) => {
        return (
          <div className="card">
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
          </div>
        );
      })}
    </div>
  );
}
