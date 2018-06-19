import * as React from "react";
import { Connect } from "../../containers/Connect";
import { Dispatch } from "../../store/types";

import { addExplorer } from "./actions";
import { ExplorersData } from "./types";

interface ExplorersProps {
  data: ExplorersData;
  dispatch: Dispatch<ExplorersData>;
}

export class Explorers extends React.Component<ExplorersProps, {}> {
  input: HTMLInputElement | null;
  handleAdd = () => {
    let value = "";
    if (this.input && this.input.value) {
      value = this.input.value;
      this.input.value = "";
    }
    this.props.dispatch(addExplorer(value));
  };
  render() {
    const { explorers } = this.props.data;
    return (
      <div>
        <h2>Explorers</h2>
        <ul>
          {explorers.map(({ name }, index) => (
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

export const ExplorersPage = () => (
  <Connect<ExplorersData> to="Explorers">
    {(data: ExplorersData, dispatch: Dispatch<ExplorersData>) => (
      <Explorers data={data} dispatch={dispatch} />
    )}
  </Connect>
);
