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
  const [cityLabel, setCityLabel] = React.useState(); //Подпись города в TrackTile
  function handleClickSearch() {
    getChart(city.id);
  }
  //Зависимость упущена намеренно, подпись города поиска меняется при смене трэклиста, а не при смене города
  React.useEffect(() => {
    setCityLabel(city.label);
  }, [trackList]);
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
        setTrackList([...data.tracks]);
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
                  title={track.title}
                  place={index + 1}
                  author={track.subtitle}
                  city={cityLabel}
                />
              );
            })
          : null}
      </>
    </Provider>
  );
}

export default Charts;
