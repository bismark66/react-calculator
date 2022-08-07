/** @format */

import React from "react";
import "./Row.css";
//this component takes renders all the the buttons on the page
function Row(props) {
  return (
    <div className="row">
      {/* this takes the individual button values and map it unto the page */}
      {props.val.map((val) => {
        return (
          <button
            value={val}
            className={`row_item ${
              (props.hasEqual && "expandEqualto") ||
              (props.clearBorder && "clearBorder")
            }`}
            key={val}
            onClick={(e) => props.handleClick(e)}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
}

export default Row;
