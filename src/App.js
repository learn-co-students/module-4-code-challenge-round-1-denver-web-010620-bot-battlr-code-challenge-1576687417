import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import BotCollection from "./containers/BotCollection";
import BotCard from "./components/BotCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BotsPage />
        <BotCollection />
        <BotCard />
      </div>
    );
  }
}

export default App;
