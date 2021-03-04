import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express'
import * as swaggerFile from './swagger/swagger.json'


import routes from './routes/index';


const app = express();

// Tratamento de Cors, lliberação ou bloqueio de acessos externos
app.use(cors());

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes);


const port = process.env.PORT || 3332;


app.listen(port, () => {
  console.log(`🏃 Server Running at http://localhost:${port}`);
});