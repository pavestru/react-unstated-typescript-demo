import * as React from "react";

import { ShipsData } from "./types";

export const Ships = ({ explorers }: ShipsData) => (
  <div>
    <h2>Ships</h2>
    <ul>{explorers.map(({ name }) => <li key="name">{name}</li>)}</ul>
  </div>
);
