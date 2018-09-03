import { Container } from "unstated";
import { AppState, AppStateJson } from "./types";
import { getInitialScreens } from "./initialState";

export class AppStateContainer extends Container<AppState> {
  changeMood = () =>
    this.setState(oldState => ({
      ...oldState,
      happy: !oldState.happy
    }));
  initialise = async () => {
    const state: AppStateJson = await new Promise<AppStateJson>(resolve => {
      setTimeout(resolve, 700, {
        screens: [
          {
            id: "Identity",
            properties: {
              firstName: "Christopher",
              lastName: "Columbus"
            }
          },
          {
            id: "PlaceOfResidence",
            properties: { address: "42 Market Street, San Francisco, CA" }
          }
        ]
      });
    });
    //tslint:disable
    this.setState(
      prevState => ({
        ...prevState,
        happy: true,
        screens: getInitialScreens(state)
      }),
      () => console.log(this.state)
    );
  };
}
