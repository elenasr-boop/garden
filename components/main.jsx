import { useState } from "react";
import { Plants } from "./cards/plant";
import { Fertilizer } from "./cards/fertilizer";
import { Light } from "./cards/light.jsx";
import { Water } from "./cards/water.jsx";
import { Soil } from "./cards/soil.jsx";
import { Temp } from "./cards/temp.jsx";
import { Pests } from "./cards/pests.jsx";
import { Weather } from "./cards/weather.jsx";

export function Main() {
  const [isOnStartButton, setIsOnStartButton] = useState(false);
  // const gameWindowRef = useRef(null);

  const toggleDropdown = () => {
    setIsOnStartButton((prevState) => !prevState);
  };

  return (
    <div className="main">
      <button className="start__btn" onClick={toggleDropdown}>
        Начать игру
      </button>

      {isOnStartButton && (
        <div  className="game__window">
          <button className="close-btn" onClick={toggleDropdown}>
            <img src="../icons/circle-xmark.svg" className="close-img" />
          </button>
          {/* <Light></Light> */}
          {/* <Fertilizer> </Fertilizer> */}
          <Plants></Plants>
          {/* <Water></Water> */}
          {/* <Soil></Soil> */}
          {/* <Temp></Temp> */}
          {/* <Pests></Pests> */}
          {/* <Weather> </Weather> */}
        </div>
      )}
    </div>
  );
}
