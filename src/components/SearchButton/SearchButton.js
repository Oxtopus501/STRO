import React from "react";

import "./search-button.css";

const SearchButton = ({ onClick, children, disabled }) => {
  return (
    <button className="search-button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default React.memo(SearchButton);
