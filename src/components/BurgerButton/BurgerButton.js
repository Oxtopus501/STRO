import React from "react";

import "./burger-button.css";
import { useBurgerButtonContext } from "../../App/App";

function BurgerButton() {
  const burgerButtonContext = useBurgerButtonContext();
  function handleClick() {
    burgerButtonContext.setIsBurgerButtonActive(
      !burgerButtonContext.isBurgerButtonActive
    );
  }
  return (
    <button className="burger-button" onClick={handleClick}>
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="12" rx="8" fill="white"></rect>
        <rect y="30" width="100" height="12" rx="8" fill="white"></rect>
        <rect y="60" width="100" height="12" rx="8" fill="white"></rect>
      </svg>
    </button>
  );
}

export default React.memo(BurgerButton);
