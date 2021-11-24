import React from "react";

import "./Header.css";
import BurgerButton from "../BurgerButton/BurgerButton";

function Header() {
  return (
    <header className="header">
      <h2 className="header__logo">SoundTracker</h2>
      <BurgerButton />
    </header>
  );
}

export default React.memo(Header);
