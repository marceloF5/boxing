import * as path from 'path';
import * as express from 'express';
import * as compression from 'compression';
import { IInitialState } from '../types/IInitialState';
import { ITemplate } from '../types/ITemplate';
import { template } from '../helper/template';
import render from '../../../../slices/footer/src/server';

export default class WebServer {
    app: express.Application;
    appRootDirectory: string;
    initialState: IInitialState;

    constructor() {
        this.app = express();
        this.appRootDirectory = path.resolve(
            __dirname,
            '../../../../apps/app-portal/footer'
        );

        this.initialState = {};
        this.staticFile();
        this.createHttpServer();
        this.ssrHandler();
    }

    public staticFile() {
        this.app.use(express.static(this.appRootDirectory));
    }

    public createHttpServer() {
        this.app.use(compression());
        this.ssrHandler();
    }

    public ssrHandler() {
        this.app.get('/', (_req: express.Request, res: express.Response) => {
            const slice = 'footer';
            const html = render(this.initialState);
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

    public start() {
        return this.app;
    }
}
