import { Environment } from './Environment';

export interface IWebServerOptions {
    environment?: Environment;
    project?: string;
    staticPath?: string;
    buildDir?: string;
    port?: number;
}
