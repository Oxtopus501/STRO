import React from "react";

import "./select-place.css";
import idListArray from "../../utils/idListArray";
import { useCityContext } from "../Charts/Charts";

function SelectPlace() {
  const cityContext = useCityContext();
  const handleChange = (event) => {
    const newCity = idListArray.filter(
      (item) => item.id === event.target.value
    )[0];
    cityContext.setCity(newCity);
    //cityStore.setCityId(event.target.value);
    // eslint-disable-next-line no-console
    //console.log(cityStore.cityId);
  };

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(cityContext.city);
  }, [cityContext.city]);

  return (
    <select className="select-place" onChange={handleChange}>
      {idListArray.map((city) => (
        <option value={city.id}>{city.label}</option>
      ))}
    </select>
  );
}

export default SelectPlace;
