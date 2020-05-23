import { IInitialState } from './IInitialState';

export interface ITemplate {
    slice: string;
    initialState: IInitialState;
    title: string;
    html: string;
}
