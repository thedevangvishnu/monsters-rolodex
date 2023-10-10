import { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    const { changeHandler, placeholderText } = this.props;
    return (
      <input
        className="search__box"
        type="search"
        placeholder={placeholderText}
        onChange={changeHandler}
      />
    );
  }
}

export default SearchBox;
