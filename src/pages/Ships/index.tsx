import * as React from "react";
import { Connect } from "../../containers/Connect";
import { Dispatch } from "../../store/types";

import { addShip } from "./actions";
import { ShipsData } from "./types";

export class Ships extends React.Component {
  input: HTMLInputElement | null;
  handleAdd = (dispatch: Dispatch<ShipsData>) => () => {
    let value = "";
    if (this.input && this.input.value) {
      value = this.input.value;
      this.input.value = "";
    }
    dispatch(addShip(value));
  };
  render() {
    return (
      <Connect<ShipsData> to="Ships">
        {(data: ShipsData, dispatch: Dispatch<ShipsData>) => (
          <div>
            <h2>Ships</h2>
            <ul>
              {data.ships.map(({ name }, index) => (
                <li key={`${name}_${index}`}>{name}</li>
              ))}
              <li>
                <input
                  ref={el => {
                    this.input = el;
                  }}
                  onKeyPress={e => {
                    if (e.key === "Enter") {
                      this.handleAdd(dispatch)();
                    }
                  }}
                />
                <button onClick={this.handleAdd(dispatch)}>Add</button>
              </li>
            </ul>
          </div>
        )}
      </Connect>
    );
  }
}
