import React from "react";
import SimpleCounterComponent from "./components/SimpleCounterComponent";
import PureCounterComponent from "./components/PureCounterComponent";

function App() {
  return (
    <div>
      <h1>Simple Component</h1>
      <SimpleCounterComponent />
      <h1>Pure Component</h1>
      <PureCounterComponent />
    </div>
  );
}

export default App;
