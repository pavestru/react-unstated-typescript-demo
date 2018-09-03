import * as React from "react";
import { Provider, Subscribe } from "unstated";

import "./App.css";

import { IdentityScreen } from "../../screens/Identity";
import { PlaceOfResidenceScreen } from "../../screens/PlaceOfResidence";
import { AppStateContainer } from "../../store";

import logo from "../../logo.svg";

class App extends React.Component {
  public render() {
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Subscribe to={[AppStateContainer]}>
            {(stateContainer: AppStateContainer) => (
              <div>
                <p className="App-intro">
                  Are you happy?
                  <button onClick={stateContainer.changeMood}>
                    {stateContainer.state.happy ? "Yes" : "No"}
                  </button>
                </p>
              </div>
            )}
          </Subscribe>
          <IdentityScreen />
          <PlaceOfResidenceScreen />
        </div>
      </Provider>
    );
  }
}

export default App;
