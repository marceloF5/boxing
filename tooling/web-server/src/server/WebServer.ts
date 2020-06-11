import * as path from 'path';
import * as express from 'express';
import * as compression from 'compression';
export default class WebServer {
    app: express.Application;
    template: string;
    buildDir: string;
    staticPath: string;

    constructor(template: string, buildDir: string, _staticPath: string = '') {
        this.app = express();
        this.template = template;
        this.buildDir = path.resolve(buildDir);
        this.staticPath = _staticPath;

        this.createHttpServer();
        this.staticFile();
        this.ssrHandler();
    }

    private staticFile(): void {
        this.app.use(express.static(this.buildDir));
    }

    private createHttpServer(): void {
        this.app.use(compression());
    }

    private ssrHandler(): void {
        this.app.get('/', (_req: express.Request, res: express.Response) => {
            res.setHeader('Cache-Control', 'assets, max-age=604800');
            res.send(this.template);
        });
    }

    public start(): express.Application {
        return this.app;
    }
}
