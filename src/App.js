import React from "react";
import ReactDOM from "react-dom";

import Musicard from "./Musicard";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Musicard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
