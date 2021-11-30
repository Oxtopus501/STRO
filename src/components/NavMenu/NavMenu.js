import React from "react";

import { Link } from "react-router-dom";

import "./nav-menu.css";
import "../../layouts/link.css";

function NavMenu() {
  return (
    <ul className="nav-menu">
      <li className="nav-menu__item">
        <Link to="/STRO" className="link nav-menu__link">
          Чарты
        </Link>
      </li>
      <li className="nav-menu__item">
        <Link to="library" className="link nav-menu__link">
          Мои треки
        </Link>
      </li>
    </ul>
  );
}

export default NavMenu;
