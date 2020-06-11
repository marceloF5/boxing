import React from 'react';
import ReactDom from 'react-dom';
import Entry from './entry';

/* ==========================================================================
   Client side rendering
   ========================================================================== */
const rootEl = document.getElementById('slice-header');

function render(Component) {
    console.log('Hydrate rendered');
    ReactDom.hydrate(<Component countInitial={10} />, rootEl);
}

render(Entry);
