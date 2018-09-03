import * as React from "react";
import { Connect } from "../../containers/Connect";
import { Dispatch } from "../../store/types";

import { changeAddress } from "./actions";
import { PlaceOfResidenceData } from "./types";

interface PlaceOfResidenceProps {
  data: PlaceOfResidenceData;
  dispatch: Dispatch<PlaceOfResidenceData>;
}

export class PlaceOfResidence extends React.Component<
  PlaceOfResidenceProps,
  {}
> {
  address: HTMLTextAreaElement | null;
  handleChange = () => {
    let value = "";
    if (this.address && this.address.value) {
      value = this.address.value;
      this.address.value = "";
    }
    this.props.dispatch(changeAddress(value));
  };
  render() {
    const { address } = this.props.data;
    return (
      <div>
        <h2>PlaceOfResidence</h2>
        <div>{address}</div>
        <textarea
          ref={el => {
            this.address = el;
          }}
        />
        <button onClick={this.handleChange}>Save</button>
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
