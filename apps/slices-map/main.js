// eslint-disable-next-line import/no-extraneous-dependencies
import 'babel-polyfill';
import axios from 'axios';

// console.log('ENTROU AQUI no FICHEIRO');
// eslint-disable-next-line no-console
const handleError = (error) => console.error(error);
const handleSucess = (directory, { data: manifest }) => {
    // eslint-disable-next-line no-console
    console.log('Manifest configuration loaded:', manifest);

    const style = document.createElement('link');
    const script = document.createElement('script');

    style.rel = 'stylesheet';
    style.href = `${directory}/${manifest.maincss}`;

    script.type = 'text/javascript';
    script.src = `${directory}/${manifest.mainjs}`;

    manifest.maincss && document.head.appendChild(style);
    manifest.mainjs && document.body.appendChild(script);
};
const loadManifest = (name) => {
    axios
        .get(`${name}/manifest.json`)
        .then(handleSucess.bind(this, name))
        .catch(handleError);
};

loadManifest('header');
loadManifest('footer');
