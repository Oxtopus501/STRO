import React from "react";
import "./burger-button.css";

function BurgerButton() {
  return (
    <button className="burger-button">
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="12" rx="8" fill="white"></rect>
        <rect y="30" width="100" height="12" rx="8" fill="white"></rect>
        <rect y="60" width="100" height="12" rx="8" fill="white"></rect>
      </svg>
    </button>
  );
}

export default React.memo(BurgerButton);
