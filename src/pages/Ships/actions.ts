import { ShipsData } from "./types";

export const addShip = (shipName: string) => (oldState: ShipsData) => ({
  ...oldState,
  ships: [...oldState.ships, { name: shipName }]
});
