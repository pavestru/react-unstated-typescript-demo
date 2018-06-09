import * as React from "react";
import { Provider, Subscribe } from "unstated";

import "./App.css";

import { Explorers } from "../pages/Explorers";
import { Ships } from "../pages/Ships";
import { AppStateContainer } from "../store";

import logo from "./logo.svg";

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
                <Explorers explorers={[{ name: "James Cook" }]} />
                <Ships explorers={[{ name: "Santa Maria" }]} />
              </div>
            )}
          </Subscribe>
        </div>
      </Provider>
    );
  }
}

export default App;
