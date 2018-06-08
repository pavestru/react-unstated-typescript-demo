import { Container } from "unstated";
import { AppState } from "./types";

export class AppStateContainer extends Container<AppState> {
  state: AppState = {
    happy: true
  };
  changeMood = () =>
    this.setState(oldState => ({
      ...oldState,
      happy: !oldState.happy
    }));
}
