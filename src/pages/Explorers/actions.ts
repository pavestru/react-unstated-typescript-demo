import { ActionCreator } from "../../store/types";
import { ExplorersData } from "./types";

export const addExplorer: ActionCreator<ExplorersData> = (name: string) => (
  oldState: ExplorersData
) => ({
  ...oldState,
  explorers: [...oldState.explorers, { name }]
});
