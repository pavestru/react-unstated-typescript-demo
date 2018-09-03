import { IdentityData } from "../pages/Identity/types";
import { PlaceOfResidenceData } from "../pages/PlaceOfResidence/types";

export type PageData = IdentityData | PlaceOfResidenceData;

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
