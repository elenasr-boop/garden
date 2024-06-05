const soil = [
    {
        name: "Глина",
        photo: "../../public/soil/clay.png",
        audio: "../../public/soil/clay.mp3",
    }, 
    {
        name: "Гумус",
        photo: "../../public/soil/humus.png",
        audio: "../../public/soil/humus.mp3",
    }, 
    {
        name: "Известь",
        photo: "../../public/soil/lime.png",
        audio: "../../public/soil/lime.mp3",
    },
    {
        name: "Песок",
        photo: "../../public/soil/sand.png",
        audio: "../../public/soil/sand.mp3",
    }
];

export function Soil ({ plant: string }) {
  return (
    <div className="soil cards">
      {soil.map((el, id) => {
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
