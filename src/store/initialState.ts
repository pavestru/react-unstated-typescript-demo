import { AppState } from "./types";
import * as Identity from "../pages/Identity/store";
import * as PlaceOfResidence from "../pages/PlaceOfResidence/store";

import { IdentityData } from "../pages/Identity/types";
import { PlaceOfResidenceData } from "../pages/PlaceOfResidence/types";

const getInitialPages = () => {
  const kvArray = [
    [IdentityData, Identity.initialState],
    [PlaceOfResidenceData, PlaceOfResidence.initialState]
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
