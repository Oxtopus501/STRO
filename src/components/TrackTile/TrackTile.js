import React from "react";

import { useAddedTracksContext } from "../../App/App";
import AddButton from "../AddButton/AddButton";
import { useChartsContext } from "../Charts/Charts";
import PlayButton from "../PlayButton/PlayButton";
import "./track-tile.css";

function TrackTile(props) {
  const addedTracksContext = useAddedTracksContext();
  const chartsContext = useChartsContext();
  //Обработчик нажатия кнопки добавить/удалить
  function handleAddClick() {
    const tracksArray = addedTracksContext.addedTracks;
    //Получаем трек из контекста Charts по ключу
    let track;
    if (props.parent === "charts") {
      track = chartsContext.trackList.filter((track) => {
        if (track.key === props.id) {
          return track;
        }
      })[0];
    } else {
      track = addedTracksContext.addedTracks.filter((track) => {
        if (track.key === props.id) {
          return track;
        }
      })[0];
    }
    //Если трек нашёлся (иного пока не случалось)
    if (track) {
      //Добавленный трек удаляем через splice по индексу
      if (track.added) {
        let trackToDeleteIndex;
        tracksArray.forEach((item, index) => {
          if (item.key === track.key) {
            trackToDeleteIndex = index;
          }
        });
        tracksArray.splice(trackToDeleteIndex, 1);
        track.added = false;
        addedTracksContext.setAddedTracks([...tracksArray]);
      } else {
        //не добавленный добавляем
        track.added = true;
        addedTracksContext.setAddedTracks([
          ...addedTracksContext.addedTracks,
          track,
        ]);
      }
    }
  }

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
        <AddButton onClick={handleAddClick} />
      </div>
    </div>
  );
}

export default TrackTile;
