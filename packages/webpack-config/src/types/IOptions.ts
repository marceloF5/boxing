import { Environment } from './Environment';
import { ITemplateEntry } from './ITemplateEntry';

export interface IOptions {
    pages: ITemplateEntry[];
    environment: Environment;
    esnext?: boolean;
    brotli?: boolean;
    mobileOptimized?: boolean;
    debug?: boolean;
    profile?: boolean;
    stats?: boolean;
    remoteCache?: boolean;
}
