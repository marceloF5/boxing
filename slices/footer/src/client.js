import React from 'react';
import ReactDom from 'react-dom';
import Entry from './entry';

/* ==========================================================================
   Client side rendering
   ========================================================================== */
const rootEl = document.getElementById('slice-footer');

function render(Component) {
    ReactDom.hydrate(<Component />, rootEl);
}

render(Entry);
