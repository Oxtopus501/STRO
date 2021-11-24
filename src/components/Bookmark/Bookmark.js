import React from "react";
import "./Bookmark.css";

function Mark(props) {
  return <button className="bookmark">{props.text}</button>;
}

export default React.memo(Mark);
