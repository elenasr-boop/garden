const temp = [
    {
        name: "Низкая температура",
        photo: "../../temp/lesstemp.jpg",
        audio: "../../temp/lesstemp.mp3",
    }, 
    {
        name: "Средняя температура",
        photo: "../../temp/meantemp.png",
        audio: "../../temp/meantemp.mp3",
    }, 
    {
        name: "Высокая температура",
        photo: "../../temp/lottemp.png",
        audio: "../../temp/lottemp.mp3",
    }];

export function Temp ({ plant: string }) {
  return (
    <div className="temp cards">
      {temp.map((el, id) => {
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
