import express, { Request, Response, NextFunction } from 'express';

const routes = express.Router();

import cityroutes from './cityroutes';


routes
  .get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "Servico em Operação" })
  });

routes
  .get('/api/v1/home', (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "Servico em Operação Home Api V1" })
  });



routes.use('/api/v1', cityroutes);


routes
  .get('*', (req: Request, res: Response, next: NextFunction) => { return res.status(404).json({ message: `Não existe rota para a requisição solicitada ${req.url}, verifique.` }) })
  .post('*', (req: Request, res: Response, next: NextFunction) => { return res.status(404).json({ message: `Não existe rota para a requisição solicitada ${req.url}, verifique.` }) });


export default routes;

