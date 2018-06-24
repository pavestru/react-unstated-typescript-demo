import { ExplorersData } from "../pages/Explorers/types";
import { ShipsData } from "../pages/Ships/types";

export type PageData = ExplorersData | ShipsData;

export interface SuperType<D> {
  // tslint:disable-next-line: no-any
  new (...args: any[]): D;
}

export interface SuperMap<T> extends Map<SuperType<T>, T> {}

export interface AppState {
  happy: boolean;
  pages: SuperMap<PageData>;
}

export type Reducer<D> = (oldState: D) => D;

export type Dispatch<D> = (reducer: Reducer<D>) => void;

export type ActionCreator<D> = (param: string | number) => Reducer<D>;
