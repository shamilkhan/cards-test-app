import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import { Card } from "./card";
import { List } from "./list";

const data = [
  {
    name: "Hazmat",
    image:
      "https://s3.amazonaws.com/com.goalspring.savvymoney.static/images/icons/test/014-hazmat.svg",
  },
  {
    name: "Soap",
    image:
      "https://s3.amazonaws.com/com.goalspring.savvymoney.static/images/icons/test/013-soap.svg",
  },
  {
    name: "Paper",
    image:
      "https://s3.amazonaws.com/com.goalspring.savvymoney.static/images/icons/test/008-tissue_paper.svg",
  },
  {
    name: "Desinfectant",
    image:
      "https://s3.amazonaws.com/com.goalspring.savvymoney.static/images/icons/test/019-desinfectant.svg",
  },
];

const initialTab =
  data.find(({ name }) => `#/${name}` === window.location.hash) || data[0];

function App() {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <Router>
      <Card card={activeTab} />
      <List data={data} setActiveTab={setActiveTab} activeTab={activeTab} />
    </Router>
  );
}

export { App };
