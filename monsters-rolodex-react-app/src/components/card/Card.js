import { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { monster } = this.props;
    const { id, email, name } = monster;
    return (
      <div className="card__container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=220x220`}
          alt={name}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
