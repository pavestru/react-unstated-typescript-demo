import { ActionCreator } from "../../store/types";
import { IdentityData } from "./store";

export const changeFirstName: ActionCreator<IdentityData> = (name: string) => (
  oldState: IdentityData
) => ({
  ...oldState,
  firstName: name
});
export const changeLastName: ActionCreator<IdentityData> = (name: string) => (
  oldState: IdentityData
) => ({
  ...oldState,
  lastName: name
});
