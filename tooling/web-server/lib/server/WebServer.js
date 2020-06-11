"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const compression = require("compression");
class WebServer {
    constructor(template, buildDir, _staticPath = '') {
        this.app = express();
        this.template = template;
        this.buildDir = path.resolve(buildDir);
        this.staticPath = _staticPath;
        this.createHttpServer();
        this.staticFile();
        this.ssrHandler();
    }
    staticFile() {
        this.app.use(express.static(this.buildDir));
    }
    createHttpServer() {
        this.app.use(compression());
    }
    ssrHandler() {
        this.app.get('/', (_req, res) => {
            res.setHeader('Cache-Control', 'assets, max-age=604800');
            res.send(this.template);
        });
    }
    start() {
        return this.app;
    }
}
exports.default = WebServer;
//# sourceMappingURL=WebServer.js.map