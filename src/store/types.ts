import { IdentityData } from "../screens/Identity/store";
import { PlaceOfResidenceData } from "../screens/PlaceOfResidence/store";

export type ScreenData = IdentityData | PlaceOfResidenceData;

export interface SuperType<D> {
  // tslint:disable-next-line: no-any
  new (...args: any[]): D;
}

export interface SuperMap<T> extends Map<SuperType<T>, T> {}

export interface AppState {
  happy: boolean;
  screens: SuperMap<ScreenData>;
}

export interface AppStateJson {
  screens: ScreenData[];
}

export type Reducer<D> = (oldState: D) => D;

export type Dispatch<D> = (reducer: Reducer<D>) => void;

export type ActionCreator<D> = (param: string | number) => Reducer<D>;
