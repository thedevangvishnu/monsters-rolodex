import { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
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

  handleChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState({ searchField: searchString });
  };

  render() {
    // console.log("render");
    const { monsters, searchField } = this.state;
    const { handleChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="app__title">Monsters Rolodex</h1>
          <SearchBox
            changeHandler={handleChange}
            placeholderText="search monster"
          />
          <div>
            <CardList monsters={filteredMonsters} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
