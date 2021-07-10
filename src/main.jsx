import React from "react";
import ReactDOM from "react-dom";
import { DummyLogin } from "./DummyLogin";
import { Title } from "./Title";

const App = function () {
  return (
    <div>
      <Title />
      <DummyLogin />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
