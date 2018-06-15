import * as React from "react";
import { Subscribe } from "unstated";
import { AppStateContainer } from "../../store";

interface ConnectProps<D> {
  to: string;
  children: (data: D) => React.ReactNode;
}

export class Connect<D> extends React.Component<ConnectProps<D>, {}> {
  render() {
    return (
      <Subscribe to={[AppStateContainer]}>
        {(stateContainer: AppStateContainer) =>
          this.props.children(stateContainer.state[this.props.to])
        }
      </Subscribe>
    );
  }
}
