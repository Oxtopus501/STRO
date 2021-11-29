import react from "react";

import { useAddedTracksContext } from "../../App/App";
import { useChartsContext } from "../Charts/Charts";
import TrackTile from "../TrackTile/TrackTile";

function Library() {
  const addedTracksContext = useAddedTracksContext();
  const addedTracks = addedTracksContext.addedTracks;
  const chartsContext = useChartsContext();
  return (
    <>
      {addedTracks.length > 0
        ? addedTracks.map((track, index) => {
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
  );
}

export default Library;
