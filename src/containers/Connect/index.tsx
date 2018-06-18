import * as React from "react";
import { Subscribe } from "unstated";
import { AppStateContainer } from "../../store";
import { AppState, Reducer, Dispatch } from "../../store/types";

interface ConnectProps<D> {
  to: string;
  children: (data: D, dispatch: Dispatch<D>) => React.ReactNode;
}

export class Connect<D> extends React.Component<ConnectProps<D>, {}> {
  subStateDispatch = (globalDispatch: Dispatch<AppState>) => (
    subStateReducer: Reducer<D>
  ) => {
    globalDispatch((oldState: AppState) => ({
      ...oldState,
      [this.props.to]: subStateReducer(oldState[this.props.to])
    }));
  };
  render() {
    return (
      <Subscribe to={[AppStateContainer]}>
        {(stateContainer: AppStateContainer) => {
          const data: D = stateContainer.state[this.props.to];
          const dispatch = this.subStateDispatch(stateContainer.dispatch);
          return this.props.children(data, dispatch);
        }}
      </Subscribe>
    );
  }
}
