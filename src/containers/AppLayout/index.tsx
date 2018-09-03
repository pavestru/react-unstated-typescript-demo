import * as React from "react";

import { IdentityScreen } from "../../screens/Identity";
import { PlaceOfResidenceScreen } from "../../screens/PlaceOfResidence";
import { AppStateContainer } from "../../store";

interface AppLayoutProps {
  stateContainer: AppStateContainer;
}

export class AppLayout extends React.Component<AppLayoutProps, {}> {
  componentDidMount() {
    this.props.stateContainer.initialise();
  }
  render() {
    const { stateContainer } = this.props;
    return stateContainer.state ? (
      <div>
        <p className="App-intro">
          Are you happy?
          <button onClick={stateContainer.changeMood}>
            {stateContainer.state.happy ? "Yes" : "No"}
          </button>
        </p>
        <IdentityScreen />
        <PlaceOfResidenceScreen />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}
