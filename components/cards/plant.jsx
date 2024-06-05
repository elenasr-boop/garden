const plantsArr = [
  {
    name: "Акация",
    audio: "../../public/plants/acacia.mp3",
    photo: "../../public/plants/acacia.png"
  },
  {
    name: "Яблоня",
    audio: "../../public/plants/apple.mp3",
    photo: "../../public/plants/apple.jpg"
  },
  {
    name: "Ель",
    audio: "../../public/plants/fir.mp3",
    photo: "../../public/plants/fir.jpg"
  },
  {
    name: "Клубника",
    audio: "../../public/plants/strawberry.mp3",
    photo: "../../public/plants/strawberry.jpg"
  },
  {
    name: "Помидор",
    audio: "../../public/plants/tomato.mp3",
    photo: "../../public/plants/tomato.jpg"
  },
  {
    name: "Пшеница",
    audio: "../../public/plants/wheat.mp3",
    photo: "../../public/plants/wheat.jpg"
  },
];
const water = [{}, {}, {}];
const soil = [{}, {}, {}, {}, {}];
const temp = [{}, {}, {}];
const weather = [{}, {}, {}, {}, {}];
const pests = [{}, {}, {}];

export function Plants() {
  return (
    <>
      <div className="plants cards">
        {plantsArr.map((el, id) => {
          return (
            <div className="card" >
              <div className="card__main">
                <p className="card__name">{el.name}</p>
                <img src={el.photo} alt={el.name} className="card__img"/>
                <figure className="card__audio">
                  <audio controls src={el.audio}></audio>
                </figure>
              </div>
              <p className="card__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis minima sint autem laborum, in minus.</p>
            </div>
          )
        })}
      </div>

      {/* <div className="buttons">
        <a href="">
            <button className="next-btn">Дальше</button>
        </a>
      </div> */}
    </>
  );
}
