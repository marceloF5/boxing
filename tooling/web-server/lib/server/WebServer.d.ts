import * as express from 'express';
export default class WebServer {
    app: express.Application;
    template: string;
    buildDir: string;
    staticPath: string;
    constructor(template: string, buildDir: string, _staticPath?: string);
    private staticFile;
    private createHttpServer;
    private ssrHandler;
    start(): express.Application;
}
