"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react'],
});
require("ignore-styles");
const path = require("path");
const template_1 = require("./helper/template");
const server_1 = require("../../../slices/footer/src/server");
const WebServer_1 = require("./server/WebServer");
const initialState = { isFetching: false, data: { count: 1 } };
const sliceName = 'footer';
const buildDir = path.resolve(__dirname, `../../../apps/app-portal/${sliceName}`);
const setupSliceTemplate = {
    sliceName,
    initialState,
    component: server_1.default(initialState),
};
const pageSlice = template_1.createTemplate(setupSliceTemplate);
const PORT = 8000;
const server = new WebServer_1.default(pageSlice, buildDir);
const app = server.start();
app.listen(PORT, 'localhost', () => {
    console.log(`Listening on:`);
    console.log(`  http://localhost:${PORT}/ - client only rendering`);
    console.log(`  http://localhost:${PORT}/server - ssr with hydration`);
});
//# sourceMappingURL=index.js.map