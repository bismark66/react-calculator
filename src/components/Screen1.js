/** @format */

import React from "react";
import "./Screen1.css";

function Screen1(props) {
  return (
    <>
      <div className="screen1">
        <input
          type="text"
          readOnly
          value={props.clickHandle ? props.clickHandle : 0}
        />
        <input type="text" readOnly value={props.ans} />
      </div>
    </>
  );
}

export default Screen1;
