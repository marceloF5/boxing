import { IOptions } from '../types/IOptions';

export default (options: IOptions): boolean =>
    options.environment === 'production';
