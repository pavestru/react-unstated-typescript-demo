import { PlaceOfResidenceData } from "./types";

export const addShip = (shipName: string) => (
  oldState: PlaceOfResidenceData
) => ({
  ...oldState,
  ships: [...oldState.ships, { name: shipName }]
});
