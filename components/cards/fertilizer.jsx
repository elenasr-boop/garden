const fertilizer = [
    {
        name: "Малое количество удобрений",
        photo: "../../fertilizer/lessfertilizer.webp",
        audio: "../../fertilizer/lessfertilizer.mp3",
    }, 
    {
        name: "Среднее количество удобрений",
        photo: "../../ertilizer/meanfertilizer.png",
        audio: "../../fertilizer/meanfertilizer.mp3",
    }, 
    {
        name: "Большое количество удобрений",
        photo: "../../fertilizer/lotfertilizer.jpg",
        audio: "../../fertilizer/lotfertilizer.mp3",
    }];

export function Fertilizer({ plant: string }) {
  return (
    <div className="fertilizer cards">
      {fertilizer.map((el, id) => {
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
