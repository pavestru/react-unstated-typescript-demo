import * as React from "react";
import { Connect } from "../../containers/Connect";
import { Dispatch } from "../../store/types";

import { addShip } from "./actions";
import { PlaceOfResidenceData } from "./types";

interface PlaceOfResidenceProps {
  data: PlaceOfResidenceData;
  dispatch: Dispatch<PlaceOfResidenceData>;
}

export class PlaceOfResidence extends React.Component<
  PlaceOfResidenceProps,
  {}
> {
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
        <h2>PlaceOfResidence</h2>
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

export const PlaceOfResidenceScreen = () => (
  <Connect<PlaceOfResidenceData> to={PlaceOfResidenceData}>
    {(data: PlaceOfResidenceData, dispatch: Dispatch<PlaceOfResidenceData>) => (
      <PlaceOfResidence data={data} dispatch={dispatch} />
    )}
  </Connect>
);
