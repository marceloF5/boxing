import { Environment } from './Environment';
import { ITemplateEntry } from './ITemplateEntry';
export interface IOptions {
    entries: ITemplateEntry[];
    environment: Environment;
}
