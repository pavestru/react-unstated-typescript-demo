import { PlaceOfResidenceData } from "./store";

export const changeAddress = (address: string) => (
  oldState: PlaceOfResidenceData
) => ({
  ...oldState,
  address
});
