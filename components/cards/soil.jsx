const soil = [
    {
        name: "Глина",
        photo: "../../soil/clay.png",
        audio: "../../soil/clay.mp3",
    }, 
    {
        name: "Гумус",
        photo: "../../soil/humus.png",
        audio: "../../soil/humus.mp3",
    }, 
    {
        name: "Известь",
        photo: "../../soil/lime.png",
        audio: "../../soil/lime.mp3",
    },
    {
        name: "Песок",
        photo: "../../soil/sand.png",
        audio: "../../soil/sand.mp3",
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
