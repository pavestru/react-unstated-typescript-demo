import { Container } from "unstated";
import { AppState, Reducer } from "./types";
import { initialState } from "./initialState";

export class AppStateContainer extends Container<AppState> {
  state: AppState = initialState;
  dispatch = (reducer: Reducer<AppState>) => {
    this.setState(reducer);
  };
  changeMood = () =>
    this.setState(oldState => ({
      ...oldState,
      happy: !oldState.happy
    }));
}
