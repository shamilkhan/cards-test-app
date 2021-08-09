import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { CardItem } from "../shared";
import "./List.css";

const List = React.memo(
  ({
    data,
    setActiveTab,
    activeTab,
  }: {
    data: CardItem[];
    setActiveTab: (card: CardItem) => void;
    activeTab: CardItem;
  }) => (
    <nav className="cards">
      <ul className="cards__list">
        {data.map(({ name, image }) => (
          <li
            className={clsx("card_item", {
              "card_item-active": activeTab.name === name,
            })}
            onClick={() => setActiveTab({ name, image })}
          >
            <Link className="card_item__link" to={name} key={name}>
              <img width={50} height={50} src={image} alt={name} />
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
);

export { List };
