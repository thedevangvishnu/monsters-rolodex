import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { changeHandler, placeholderText } = this.props;
    return (
      <input
        type="search"
        placeholder={placeholderText}
        onChange={changeHandler}
      />
    );
  }
}

export default SearchBox;
