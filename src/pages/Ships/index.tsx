import * as React from "react";
import { Connect } from "../../containers/Connect";

import { ShipsData } from "./types";

export const Ships = () => (
  <Connect<ShipsData> to="Ships">
    {(data: ShipsData) => (
      <div>
        <h2>Ships</h2>
        <ul>{data.ships.map(({ name }) => <li key="name">{name}</li>)}</ul>
      </div>
    )}
  </Connect>
);
