import { AppState } from "./types";
import * as Explorers from "../pages/Explorers/store";
import * as Ships from "../pages/Ships/store";

export const initialState: AppState = {
  happy: false,
  // initial states from sub-pages
  Explorers: Explorers.initialState,
  Ships: Ships.initialState
};
