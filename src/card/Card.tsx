import React from "react";
import { CardItem } from "../shared";
import "./Card.css";

const Card = React.memo(({ card }: { card: CardItem }) => (
  <>
    <h1>{card.name}</h1>
    <img width={250} height={250} src={card.image} alt={card.name} />
  </>
));

export { Card };
