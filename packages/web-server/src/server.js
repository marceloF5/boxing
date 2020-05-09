import express from 'express';
import path from 'path';
import template from './template';
import ssr from '../../../slices/footer/src/server';

const data = [];

const app = express();

// Serving static files
app.use(
    '/footer',
    express.static(path.resolve(__dirname, '../../../apps/slices-build/footer'))
);

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000, () =>
    // eslint-disable-next-line no-console
    console.log(`Demo running in http://localhost:${process.env.PORT || 3000}`)
);

const initialState = {
    isFetching: false,
    apps: data || [],
};

// server rendered home page
app.get('/', (req, res) => {
    const slice = 'footer';
    const html = ssr(initialState);
    const title = 'Server Rendered Page';

    const response = template(slice, initialState, title, html);
    res.setHeader('Cache-Control', 'assets, max-age=604800');
    res.send(response);
});
