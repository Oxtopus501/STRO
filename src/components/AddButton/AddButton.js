import React from "react";

import "./add-button.css";

function AddButton() {
  return (
    <button className="track-tile__add-button">
      <svg
        className="track-tile__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <g id="surface21955591">
          <path d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z M 11 2 " />
        </g>
      </svg>
    </button>
  );
}

export default React.memo(AddButton);
