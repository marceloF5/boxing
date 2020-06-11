import { IInitialState } from './IInitialState';
export interface ISetupSliceTemplate {
    sliceName: string;
    initialState: IInitialState;
    component: string;
}
