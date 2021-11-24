import React from "react";

import "./App.css";
import Bookmark from "../components/Bookmark/Bookmark";
import Charts from "../components/Charts/Charts";
import Header from "../components/Header/Header";
import "../layouts/bookmarks.css";
import "../layouts/page-content.css";

const AddedTracksContext = React.createContext({
  addedTracks: [],
  setAddedTracks: () => {},
});

const Provider = AddedTracksContext.Provider;

export const useAddedTracksContext = () => React.useContext(AddedTracksContext);

function App() {
  const [addedTracks, setAddedTracks] = React.useState([]);
  React.useEffect(() => {
    if (localStorage.getItem("addedTracks")) {
      setAddedTracks(addedTracks);
    } else {
      localStorage.setItem("addedTracks", addedTracks);
    }
  }, [addedTracks]);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(localStorage.getItem("addedTracks"));
  });

  return (
    <Provider>
      <div className="app">
        <Header />
        <section className="page-content">
          <p className="page-content__text">
            SoundTracker - это интерфейс Shazam API, где можно посмотреть чарты
            по городам мира
          </p>
          <div className="bookmarks">
            <Bookmark className="bookmark" text="Смотреть чарты" />
            <Bookmark className="bookmark" text="Добавленные треки" />
          </div>
          <Charts />
        </section>
      </div>
    </Provider>
  );
}

export default App;
