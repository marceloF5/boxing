const express = require('express');
const path = require('path');

const app = express();

app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'apps/app-portal')));

// Listen for requests
const server = app.listen(app.get('port'), function () {
    const { port } = server.address();
    console.log(`Demo running in http://localhost:${port}`);
});
