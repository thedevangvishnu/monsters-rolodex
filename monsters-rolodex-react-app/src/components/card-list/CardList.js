import { Component } from "react";
import Card from "../card/Card";
import "./CardList.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card__list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
