import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './layout/app';

/* ==========================================================================
   Server side rendering
   - Exports function that receives a view model and outputs rendered html as a string
   ========================================================================== */

function render(initialState) {
    const html = renderToString(<App {...initialState} />);

    return html;
}

export default render;
