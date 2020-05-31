import 'ignore-styles';
require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react'],
});
import WebServer from './server/WebServer';

const PORT = 8000;
const server = new WebServer();
const app = server.start();

app.listen(PORT, 'localhost', () => {
    console.log(`Listening on:`);
    console.log(`  http://localhost:${PORT}/ - client only rendering`);
    console.log(`  http://localhost:${PORT}/server - ssr with hydration`);
});
