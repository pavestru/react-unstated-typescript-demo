import * as React from "react";

import { ExplorersData } from "./types";

export const Explorers = ({ explorers }: ExplorersData) => (
  <div>
    <h2>Explorers</h2>
    <ul>{explorers.map(({ name }) => <li key="name">{name}</li>)}</ul>
  </div>
);
