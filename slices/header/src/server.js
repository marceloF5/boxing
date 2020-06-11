import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './layout/app';

/* ==========================================================================
   Server side rendering
   - Exports function that receives a view model and outputs rendered html as a string
   ========================================================================== */

function render(initialState = {}) {
    console.log('SSR rendered');
    const html = renderToString(<App countInitial={initialState.data.count} />);

    return html;
}

export default render;
