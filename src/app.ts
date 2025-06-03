import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorMiddleware } from './middlerwares/error.middleware';
import encryptionRoutes from './routes/encryption.routes';

export const createApp = () => {
  const app = express();

  //Cors
  app.use(cors());

  // Middlewares
  app.use(bodyParser.json());

  // Routes
  app.use('/api', encryptionRoutes);

  // Error handling
  app.use(errorMiddleware);

  return app;
};