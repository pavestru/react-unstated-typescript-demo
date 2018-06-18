import { ExplorersData } from "../pages/Explorers/types";
import { ShipsData } from "../pages/Ships/types";

export interface AppState {
  happy: boolean;
  Explorers: ExplorersData;
  Ships: ShipsData;
}

export type Reducer<D> = (oldState: D) => D;

export type Dispatch<D> = (reducer: Reducer<D>) => void;
