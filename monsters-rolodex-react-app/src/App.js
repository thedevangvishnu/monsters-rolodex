import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    // console.log("constructor");
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    // console.log("render");
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchField)
    );
    // console.log(filteredMonsters);

    return (
      <div className="App">
        <header className="App-header">
          <input
            type="search"
            placeholder="search monster"
            onChange={(event) => {
              const searchString = event.target.value.toLocaleLowerCase();
              this.setState({ searchField: searchString });
            }}
          />
          {filteredMonsters.map((monster) => {
            return <h2 key={monster.id}>{monster.name}</h2>;
          })}
        </header>
      </div>
    );
  }
}

export default App;
