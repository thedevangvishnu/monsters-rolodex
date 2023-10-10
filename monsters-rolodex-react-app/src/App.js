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
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
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
            const { id, name, email } = monster;
            return (
              <div key={id}>
                <img
                  src={`https://robohash.org/${id}?set=set2&size=200x200`}
                  alt={name}
                />
                <h2>{name}</h2>
                <p>{email}</p>
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
