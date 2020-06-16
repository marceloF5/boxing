import { Router } from 'express';

const routes = Router();

routes.get('/hello', (_req, res) => {
    return res.send('<h1>Hello</h1>');
});

export default routes;
