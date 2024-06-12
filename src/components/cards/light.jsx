const light = [
    {
        name: "Малое количество света",
        photo: "../../light/lesslight.jpg",
        audio: "../../light/lesslight.mp3",
    }, 
    {
        name: "Среднее количество света",
        photo: "../../light/meanlight.jpg",
        audio: "../../light/meanlight.mp3",
    }, 
    {
        name: "Большое количество света",
        photo: "../../light/lotlight.jpg",
        audio: "../../light/lotlight.mp3",
    }];

export function Light ({ plant: string }) {
  return (
    <div className="light cards">
      {light.map((el, id) => {
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
