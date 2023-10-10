import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return monsters.map((monster) => {
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
    });
  }
}

export default CardList;
