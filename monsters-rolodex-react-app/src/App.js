import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    // console.log("constructor");
    super();

    this.state = {
      monsters: [
        { name: "Devang", id: 1 },
        { name: "Naman", id: 2 },
        { name: "Abheest", id: 3 },
      ],
    };
  }

  render() {
    // console.log("render");
    return (
      <div className="App">
        <header className="App-header">
          {this.state.monsters.map((monster) => {
            return <h2 key={monster.id}>{monster.name}</h2>;
          })}
        </header>
      </div>
    );
  }
}

export default App;
