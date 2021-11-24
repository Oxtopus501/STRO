import React from "react";

import "./play-button.css";
import play from "../../images/play.png";
function PlayButton(props) {
  const prepareQuery = () => {
    // eslint-disable-next-line no-console
    return `${props.author.replace("&", "").split(" ").join("+")}+${props.title
      .replace("&", "")
      .split(" ")
      .join("+")}`;
  };
  return (
    <a
      className="track-tile__play-button"
      href={`https://www.youtube.com/results?search_query=${prepareQuery()}`}
      target="_blank"
      rel="noreferrer"
    >
      <img src={play} alt="play" className="track-tile__play-icon"></img>
    </a>
  );
}

export default React.memo(PlayButton);
