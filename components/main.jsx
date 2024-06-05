import { useState } from "react";
import { Plants } from "./cards/plant";

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
          <Plants> </Plants>
        </div>
      )}
    </div>
  );
}
