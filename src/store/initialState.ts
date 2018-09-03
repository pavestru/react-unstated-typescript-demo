import { AppStateJson } from "./types";
import { IdentityData } from "../screens/Identity/store";
import { PlaceOfResidenceData } from "../screens/PlaceOfResidence/store";

export const getInitialScreens = (state: AppStateJson) => {
  const initialScreens = new Map();
  state.screens.forEach(screen => {
    switch (screen.id) {
      case "Identity":
        initialScreens.set(IdentityData, screen);
        break;
      case "PlaceOfResidence":
        initialScreens.set(PlaceOfResidenceData, screen);
        break;
      default:
        break;
    }
  });
  return initialScreens;
};
