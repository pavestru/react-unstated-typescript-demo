import { PlaceOfResidenceData } from "./types";

export const changeAddress = (address: string) => (
  oldState: PlaceOfResidenceData
) => ({
  ...oldState,
  address
});
