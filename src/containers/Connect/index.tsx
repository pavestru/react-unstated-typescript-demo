import * as React from "react";
import { Subscribe } from "unstated";
import { AppStateContainer } from "../../store";
import {
  AppState,
  Reducer,
  Dispatch,
  ScreenData,
  SuperType
} from "../../store/types";

interface ConnectProps<D> {
  to: SuperType<D>;
  children: (data: D, dispatch: Dispatch<D>) => React.ReactNode;
}

export class Connect<D extends ScreenData> extends React.Component<
  ConnectProps<D>,
  {}
> {
  subStateDispatch = (stateContainer: AppStateContainer) => (
    subStateReducer: Reducer<D>
  ) => {
    const oldSubState = stateContainer.state.screens.get(this.props.to) as D;
    if (oldSubState) {
      stateContainer.setState((oldState: AppState) => {
        const newScreens = new Map(oldState.screens);
        newScreens.set(this.props.to, subStateReducer(oldSubState));
        return {
          ...oldState,
          screens: newScreens
        };
      });
    }
  };
  render() {
    return (
      <Subscribe to={[AppStateContainer]}>
        {(stateContainer: AppStateContainer) => {
          if (stateContainer.state) {
            const data = stateContainer.state.screens.get(this.props.to);
            const dispatch = this.subStateDispatch(stateContainer);
            return this.props.children(data as D, dispatch);
          } else {
            return <div>Loading...</div>;
          }
        }}
      </Subscribe>
    );
  }
}
