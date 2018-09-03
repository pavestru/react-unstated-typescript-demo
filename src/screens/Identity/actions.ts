import { ActionCreator } from "../../store/types";
import { IdentityData } from "./types";

export const addExplorer: ActionCreator<IdentityData> = (name: string) => (
  oldState: IdentityData
) => ({
  ...oldState,
  explorers: [...oldState.explorers, { name }]
});
