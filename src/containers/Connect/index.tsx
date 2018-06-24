import * as React from "react";
import { Subscribe } from "unstated";
import { AppStateContainer } from "../../store";
import {
  AppState,
  Reducer,
  Dispatch,
  PageData,
  SuperType
} from "../../store/types";

interface ConnectProps<D> {
  to: SuperType<D>;
  children: (data: D, dispatch: Dispatch<D>) => React.ReactNode;
}

export class Connect<D extends PageData> extends React.Component<
  ConnectProps<D>,
  {}
> {
  subStateDispatch = (stateContainer: AppStateContainer) => (
    subStateReducer: Reducer<D>
  ) => {
    const oldSubState = stateContainer.state.pages.get(this.props.to) as D;
    if (oldSubState) {
      stateContainer.setState((oldState: AppState) => {
        const newPages = new Map(oldState.pages);
        newPages.set(this.props.to, subStateReducer(oldSubState));
        return {
          ...oldState,
          pages: newPages
        };
      });
    }
  };
  render() {
    return (
      <Subscribe to={[AppStateContainer]}>
        {(stateContainer: AppStateContainer) => {
          const data = stateContainer.state.pages.get(this.props.to);
          const dispatch = this.subStateDispatch(stateContainer);
          return this.props.children(data as D, dispatch);
        }}
      </Subscribe>
    );
  }
}
