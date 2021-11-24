import React from "react";

import AddButton from "../AddButton/AddButton";
import PlayButton from "../PlayButton/PlayButton";
import "./track-tile.css";

function TrackTile(props) {
  return (
    <div className="track-tile">
      <div className="track-tile__place">#{props.place}</div>
      <div className="track-tile__text-container">
        <h3 className="track-tile__title">{props.title}</h3>
        <p className="track-tile__author">{props.author}</p>
        <p className="track-tile__city">{props.city}</p>
      </div>
      <div className="track-tile__buttons-container">
        <PlayButton title={props.title} author={props.author} />
        <AddButton />
      </div>
    </div>
  );
}

export default React.memo(TrackTile);
