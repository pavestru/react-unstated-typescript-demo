import * as React from "react";
import { Connect } from "../../containers/Connect";
import { Dispatch } from "../../store/types";

import { addExplorer } from "./actions";
import { IdentityData } from "./types";

interface IdentityProps {
  data: IdentityData;
  dispatch: Dispatch<IdentityData>;
}

export class Identity extends React.Component<IdentityProps, {}> {
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
        <h2>Identity</h2>
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

export const IdentityPage = () => (
  <Connect<IdentityData> to={IdentityData}>
    {(data: IdentityData, dispatch: Dispatch<IdentityData>) => (
      <Identity data={data} dispatch={dispatch} />
    )}
  </Connect>
);
