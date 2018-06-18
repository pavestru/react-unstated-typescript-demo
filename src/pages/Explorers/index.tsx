import * as React from "react";
import { Connect } from "../../containers/Connect";
import { Dispatch } from "../../store/types";

import { addExplorer } from "./actions";
import { ExplorersData } from "./types";

export class Explorers extends React.Component {
  input: HTMLInputElement | null;
  handleAdd = (dispatch: Dispatch<ExplorersData>) => () => {
    let value = "";
    if (this.input && this.input.value) {
      value = this.input.value;
      this.input.value = "";
    }
    dispatch(addExplorer(value));
  };
  render() {
    return (
      <Connect<ExplorersData> to="Explorers">
        {(data: ExplorersData, dispatch: Dispatch<ExplorersData>) => (
          <div>
            <h2>Explorers</h2>
            <ul>
              {data.explorers.map(({ name }, index) => (
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
