const express = require('express');
const path = require('path');

const app = express();

app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'apps/slices-build')));

// Listen for requests
const server = app.listen(app.get('port'), () => {
    const { port } = server.address();
    // eslint-disable-next-line no-console
    console.log(`Demo running in http://localhost:${port}`);
});
