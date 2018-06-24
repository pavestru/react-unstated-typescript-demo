import { AppState } from "./types";
import * as Explorers from "../pages/Explorers/store";
import * as Ships from "../pages/Ships/store";

import { ExplorersData } from "../pages/Explorers/types";
import { ShipsData } from "../pages/Ships/types";

const getInitialPages = () => {
  const kvArray = [
    [ExplorersData, Explorers.initialState],
    [ShipsData, Ships.initialState]
  ];
  const initialPages = new Map();
  kvArray.forEach(kv => {
    initialPages.set(kv[0], kv[1]);
  });
  return initialPages;
};

export const initialState: AppState = {
  happy: false,
  // initial state from sub-pages
  pages: getInitialPages()
};
