require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react'],
});
import 'ignore-styles';
import * as path from 'path';
import { IInitialState } from './types/IInitialState';
import { ISetupSliceTemplate } from './types/ISetupSliceTemplate';
import { createTemplate } from './helper/template';
import render from '../../../slices/header/src/server';
import WebServer from './server/WebServer';

const initialState: IInitialState = { isFetching: false, data: { count: 1 } };

const sliceName = 'header';
const buildDir = path.resolve(
    __dirname,
    `../../../apps/app-portal/${sliceName}`
);

const setupSliceTemplate: ISetupSliceTemplate = {
    sliceName,
    initialState,
    component: render(initialState),
};

console.log(setupSliceTemplate.component);

const pageSlice = createTemplate(setupSliceTemplate);

const PORT = 8000;
const server = new WebServer(pageSlice, buildDir);
const app = server.start();

app.listen(PORT, 'localhost', () => {
    console.log(`Listening on:`);
    console.log(`  http://localhost:${PORT}/ - client only rendering`);
    console.log(`  http://localhost:${PORT}/server - ssr with hydration`);
});
