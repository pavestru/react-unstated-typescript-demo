import { ExplorersData } from "../pages/Explorers/types";
import { ShipsData } from "../pages/Ships/types";

export interface AppState {
  happy: boolean;
  Explorers: ExplorersData;
  Ships: ShipsData;
}

export type Reducer = (oldState: AppState) => AppState;
