import { AppState } from "./types";
import * as Identity from "../screens/Identity/store";
import * as PlaceOfResidence from "../screens/PlaceOfResidence/store";

import { IdentityData } from "../screens/Identity/types";
import { PlaceOfResidenceData } from "../screens/PlaceOfResidence/types";

const getInitialScreens = () => {
  const kvArray = [
    [IdentityData, Identity.initialState],
    [PlaceOfResidenceData, PlaceOfResidence.initialState]
  ];
  const initialScreens = new Map();
  kvArray.forEach(kv => {
    initialScreens.set(kv[0], kv[1]);
  });
  return initialScreens;
};

export const initialState: AppState = {
  happy: false,
  // initial state from sub-screens
  screens: getInitialScreens()
};
