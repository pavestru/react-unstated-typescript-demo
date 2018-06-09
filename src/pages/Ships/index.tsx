import * as React from "react";

import { ShipsData } from "./types";

export const Ships = ({ ships }: ShipsData) => (
  <div>
    <h2>Ships</h2>
    <ul>{ships.map(({ name }) => <li key="name">{name}</li>)}</ul>
  </div>
);
