import React from "react";
import "./App.css";
import Stickies from "./components/Stickies";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Stickies</h1>
        <Stickies />
      </div>
    );
  }
}

export default App;
