import express, { Request, Response, NextFunction } from 'express';


const cityroutes = express.Router();

cityroutes
  .get('/cities', (req: Request, res: Response, next: NextFunction) => {
    let data = [
      { id: 1, name: 'Nova Venécia', uf: "ES" },
      { id: 2, name: 'São Gabriel', uf: "ES" },
      { id: 3, name: 'Boa Esperança', uf: "ES" },
      { id: 4, name: 'São Mateus', uf: "ES" }
    ]

    return res.status(200).json(data);
  });


cityroutes
  .post('/cities', (req: Request, res: Response, next: NextFunction) => {
    let data = { id: 1, name: 'Nova Venécia', uf: "ES" }
    return res.status(200).json({ message: "Cadastrado com Sucesso!", data });
  });






export default cityroutes;