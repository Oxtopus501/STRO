import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Bookmark from "../components/Bookmark/Bookmark";
import Charts from "../components/Charts/Charts";
import Header from "../components/Header/Header";
import "../layouts/bookmarks.css";
import "../layouts/page-content.css";
import Library from "../components/LIbrary/Library";
import NavMenu from "../components/NavMenu/NavMenu";

const AddedTracksContext = React.createContext({
  addedTracks: [],
  setAddedTracks: () => {},
});

const Provider = AddedTracksContext.Provider;

export const useAddedTracksContext = () => React.useContext(AddedTracksContext);

const BurgerButtonContext = React.createContext({
  isBurgerButtonActive: false,
  setIsBurgerButtonActive: () => {},
});

const BurgerButtonProvider = BurgerButtonContext.Provider;

export const useBurgerButtonContext = () =>
  React.useContext(BurgerButtonContext);

function App() {
  /*Первым значением состояния с добавленными треками становится значение из localStorage
  если такого ключа в localStorage нет, значением становится null, 
  тогда в useEffect присвоим ему пустой массив*/
  const [addedTracks, setAddedTracks] = React.useState(
    JSON.parse(localStorage.getItem("addedTracks"))
  );
  const [isBurgerButtonActive, setIsBurgerButtonActive] = React.useState(false);
  //После каждого обновления добавленных треков обновляем localStorage
  React.useEffect(() => {
    localStorage.setItem("addedTracks", JSON.stringify(addedTracks));
  }, [addedTracks]);
  //Хук, проверяющий addedTrack на null
  React.useEffect(() => {
    if (addedTracks === null) {
      setAddedTracks([]);
    }
  }, []);

  return (
    <BrowserRouter>
      <Provider value={{ addedTracks, setAddedTracks }}>
        <BurgerButtonProvider
          value={{ isBurgerButtonActive, setIsBurgerButtonActive }}
        >
          <div className="app">
            <Header />
            <section className="page-content">
              {isBurgerButtonActive ? <NavMenu /> : null}
              <p className="page-content__text">
                SoundTracker - это интерфейс Shazam API, где можно посмотреть
                чарты по городам мира
              </p>
              <Routes>
                <Route exact path="/STRO" element={<Charts />} />
                <Route path="/library" element={<Library />} />
              </Routes>
            </section>
          </div>
        </BurgerButtonProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
