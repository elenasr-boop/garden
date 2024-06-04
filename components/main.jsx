import { useState } from "react";

export function Main() {
  const [isOnStartButton, setIsOnStartButton] = useState(false);
  
  const toggleDropdown = () => setIsOnStartButton((prevState) => !prevState);

  return (
    <div className="main">
      <button className="start__btn" onClick={toggleDropdown}>
        Начать игру
      </button>

      {isOnStartButton && (
      <div className="game__window">
        <Cards />

        <button className="close-btn" onClick={toggleDropdown}>
          <img src="../icons/circle-xmark.svg" className="close-img" />
        </button>
      </div>
      )}
    </div>
  );
}
