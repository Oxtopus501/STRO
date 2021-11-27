import React from "react";

import "./select-place.css";
import idListArray from "../../utils/idListArray";
import { useChartsContext } from "../Charts/Charts";

function SelectPlace() {
  const chartsContext = useChartsContext();
  const handleChange = (event) => {
    const newCity = idListArray.filter(
      (item) => item.id === event.target.value
    )[0];
    chartsContext.setCity(newCity);
    //cityStore.setCityId(event.target.value);
    // eslint-disable-next-line no-console
    //console.log(cityStore.cityId);
  };

  /*React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(chartsContext.city);
  }, [chartsContext.city]);*/

  return (
    <select className="select-place" onChange={handleChange}>
      {idListArray.map((city) => (
        <option key={city.id} value={city.id}>
          {city.label}
        </option>
      ))}
    </select>
  );
}

export default SelectPlace;
