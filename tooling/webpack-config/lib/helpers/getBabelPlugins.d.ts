import { IOptions } from '../types/IOptions';
declare const _default: (options: IOptions, { isClient }?: {
    isClient?: boolean | undefined;
}) => (string | false | (string | {
    useBuiltIns: boolean;
})[] | (string | {
    removeImport: boolean;
})[])[];
export default _default;
