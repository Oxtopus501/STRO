import React from "react";

import idListArray from "../../utils/idListArray";
import SearchButton from "../SearchButton/SearchButton";
import SearchIcon from "../SearchIcon/SearchIcon";
import SelectPlace from "../SelectPlace/SelectPlace";
import TrackTile from "../TrackTile/TrackTile";
import "./Charts.css";

const CityContext = React.createContext({
  city: idListArray[0],
  setCity: () => {},
});

const Provider = CityContext.Provider;

export const useCityContext = () => React.useContext(CityContext);

function Charts() {
  const [trackList, setTrackList] = React.useState([]); //Трэклист для рендера
  const [city, setCity] = React.useState(idListArray[0]); //Город выбирается в SelectPlace, по умолчанию Москва
  function handleClickSearch() {
    getChart(city.id);
  }
  //Запрос к Shazam API по id города и обновление trackList ответом от сервера
  function getChart(listId) {
    fetch(
      `https://shazam.p.rapidapi.com/charts/track?locale=en-US&listId=${listId}&pageSize=20&startFrom=0`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key":
            "ee2ab30195msh36c4dde5ff52590p100112jsnb138dae00782",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const newTracks = data.tracks.map((track) => {
          track.city = city.label;
          return track;
        });
        // eslint-disable-next-line no-console
        console.log(newTracks);
        setTrackList([...newTracks]);
      });
  }

  return (
    <Provider value={{ city, setCity }}>
      <>
        <div className="charts__header">
          <SelectPlace />
          <SearchButton children={<SearchIcon />} onClick={handleClickSearch} />
        </div>
        {trackList.length > 0
          ? trackList.map((track, index) => {
              return (
                <TrackTile
                  key={track.key}
                  id={track.key}
                  title={track.title}
                  place={index + 1}
                  author={track.subtitle}
                  city={track.city}
                />
              );
            })
          : null}
      </>
    </Provider>
  );
}

export default Charts;
