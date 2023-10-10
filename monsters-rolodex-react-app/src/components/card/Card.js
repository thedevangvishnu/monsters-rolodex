import { Component } from "react";

class Card extends Component {
  render() {
    const { monster } = this.props;
    const { id, email, name } = monster;
    return (
      <div>
        <img
          src={`https://robohash.org/${id}?set=set2&size=200x200`}
          alt={name}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
