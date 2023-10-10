import { Component } from "react";
import Card from "../card/Card";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    });
  }
}

export default CardList;
