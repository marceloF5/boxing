import * as express from 'express';
import * as net from 'net';
import { IWebServerOptions } from '../types/IWebServerOptions';
import { IInitialState } from '../types/IInitialState';
import { ITemplate } from '../types/ITemplate';
import { template } from '../helper/template';
import ssr from '../../../../slices/footer/src/server';

export default class WebServer {
    app: express.Application;
    options: IWebServerOptions;
    initialState: IInitialState;

    constructor(
        options: IWebServerOptions,
        initialState: IInitialState = { isFetching: false, apps: [] }
    ) {
        console.log('slice', process.argv);
        this.app = express();
        this.options = options;
        this.initialState = initialState;

        this.app.locals.environment = options.environment || 'development';
        this.app.locals.projectDir = options.project;
        this.app.locals.staticPath = options.staticPath;

        if (this.options.buildDir) {
            this.app.locals.buildDir = this.options.buildDir;
        }

        // Serving static files
        this.staticFile(this.app.locals.projectDir, this.app.locals.staticPath);
        // hide powered by express
        this.app.disable('x-powered-by');
        // start server
        this.start();
        // server rendered home page
        this.serverPage();
    }

    public start() {
        return new Promise<string>((resolve, reject) => {
            const server = this.app
                .listen(Number(this.options.port), 'localhost', () => {
                    const {
                        address,
                        port,
                    } = server.address() as net.AddressInfo;
                    const serverUrl = `http://${address}:${port}`;

                    resolve(serverUrl);
                })
                .on('error', (e) => {
                    reject(e);
                });
        });
    }

    private staticFile(endpoint: string, staticPath: string) {
        this.app.use(endpoint, express.static(staticPath));
    }

    private serverPage() {
        this.app.get('/', (req, res) => {
            const slice = this.app.locals.projectDir;
            const html = ssr(this.initialState);
            const title = 'Server Rendered Page';

            const templateContent: ITemplate = {
                slice,
                initialState: this.initialState,
                title,
                html,
            };

            const response = template(templateContent);
            res.setHeader('Cache-Control', 'assets, max-age=604800');
            res.send(response);
        });
    }
}
