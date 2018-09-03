import * as React from "react";
import { Connect } from "../../containers/Connect";
import { Dispatch } from "../../store/types";

import { changeFirstName, changeLastName } from "./actions";
import { IdentityData } from "./store";

interface IdentityProps {
  data: IdentityData;
  dispatch: Dispatch<IdentityData>;
}

export class Identity extends React.Component<IdentityProps, {}> {
  firstName: HTMLInputElement | null;
  lastName: HTMLInputElement | null;
  changeFirstName = () => {
    let value = "";
    if (this.firstName && this.firstName.value) {
      value = this.firstName.value;
      this.firstName.value = "";
    }
    this.props.dispatch(changeFirstName(value));
  };
  changeLastName = () => {
    let value = "";
    if (this.lastName && this.lastName.value) {
      value = this.lastName.value;
      this.lastName.value = "";
    }
    this.props.dispatch(changeLastName(value));
  };
  render() {
    const { firstName, lastName } = this.props.data.properties;
    return (
      <div>
        <h2>Identity</h2>
        <ul>
          <li>
            {firstName}
            <input
              ref={el => {
                this.firstName = el;
              }}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  this.changeFirstName();
                }
              }}
            />
          </li>
          <li>
            {lastName}
            <input
              ref={el => {
                this.lastName = el;
              }}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  this.changeLastName();
                }
              }}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export const IdentityScreen = () => (
  <Connect<IdentityData> to={IdentityData}>
    {(data: IdentityData, dispatch: Dispatch<IdentityData>) => (
      <Identity data={data} dispatch={dispatch} />
    )}
  </Connect>
);
