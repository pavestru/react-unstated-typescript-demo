import * as React from "react";
import { Connect } from "../../containers/Connect";

import { ExplorersData } from "./types";

export const Explorers = () => (
  <Connect<ExplorersData> to="Explorers">
    {(data: ExplorersData) => (
      <div>
        <h2>Explorers</h2>
        <ul>{data.explorers.map(({ name }) => <li key="name">{name}</li>)}</ul>
      </div>
    )}
  </Connect>
);
