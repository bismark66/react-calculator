/** @format */

import "./App.css";
import React, { useState, useEffect } from "react";
import Row from "./components/Row";
import value from "./value";
import Screen1 from "./components/Screen1";

function App() {
  //const [clickHandle, setClickHandle] = useState("");

  let [clickValue, setClickValue] = useState("");
  let [ans, setAns] = useState("");

  //the function to be trigered when a button is clicked
  function handleClick(e) {
    console.log("initiate click");
    console.log(e.currentTarget.value);
    let userValue = e.currentTarget.value;
    switch (userValue) {
      case "X":
        setClickValue(clickValue + "*");
        break;
      case "<":
        let allclickvalues = clickValue;
        allclickvalues = allclickvalues.substr(0, allclickvalues.length - 1);
        setClickValue(allclickvalues);
        break;
      case "C":
        setClickValue("");
        setAns("");
        break;
      case "%":
        setClickValue(clickValue + userValue);
        let percentmodify = clickValue / 100;
        setClickValue(percentmodify);
        setAns(percentmodify);
        break;
      case "=":
        let ans = eval(clickValue);
        console.log(ans);
        setAns(ans);
        break;
      default:
        setClickValue(clickValue + userValue);
    }
  }

  return (
    <div className="App">
      <Screen1 clickHandle={clickValue} ans={ans} />

      <Row val={value.row1} handleClick={handleClick} />
      <Row val={value.row2} handleClick={handleClick} />
      <Row val={value.row3} handleClick={handleClick} />
      <Row val={value.row4} handleClick={handleClick} hasEqual />
      <Row val={value.row5} handleClick={handleClick} clearBorder />
      {/* <Row val={value.row6} handleClick={handleClick} /> */}
    </div>
  );
}

export default App;
