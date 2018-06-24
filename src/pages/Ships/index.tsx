import * as React from "react";
import { Connect } from "../../containers/Connect";
import { Dispatch } from "../../store/types";

import { addShip } from "./actions";
import { ShipsData } from "./types";

interface ShipsProps {
  data: ShipsData;
  dispatch: Dispatch<ShipsData>;
}

export class Ships extends React.Component<ShipsProps, {}> {
  input: HTMLInputElement | null;
  handleAdd = () => {
    let value = "";
    if (this.input && this.input.value) {
      value = this.input.value;
      this.input.value = "";
    }
    this.props.dispatch(addShip(value));
  };
  render() {
    const { ships } = this.props.data;
    return (
      <div>
        <h2>Ships</h2>
        <ul>
          {ships.map(({ name }, index) => (
            <li key={`${name}_${index}`}>{name}</li>
          ))}
          <li>
            <input
              ref={el => {
                this.input = el;
              }}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  this.handleAdd();
                }
              }}
            />
            <button onClick={this.handleAdd}>Add</button>
          </li>
        </ul>
      </div>
    );
  }
}

export const ShipsPage = () => (
  <Connect<ShipsData> to={ShipsData}>
    {(data: ShipsData, dispatch: Dispatch<ShipsData>) => (
      <Ships data={data} dispatch={dispatch} />
    )}
  </Connect>
);
