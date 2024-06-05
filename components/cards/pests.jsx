const pests = [
    {
        name: "Насекомые",
        photo: "../../public/pests/insect/insect.jpg",
        audio: "../../public/pests/insect/insect.mp3"
    }, 
    {
        name: "Сорняки",
        photo: "../../public/pests/weed/weed.jpg",
        audio: "../../public/pests/weed/weed.mp3"
    }, 
    {
        name: "Грызуны",
        photo: "../../public/pests/rodent/rodent.jpg",
        audio: "../../public/pests/rodent/rodent.mp3"
    }];

export function Pests () {
  return (
    <div className="pests cards">
      {pests.map((el, id) => {
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
