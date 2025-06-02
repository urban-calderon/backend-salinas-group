import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const RSA_KEY_SIZE = parseInt(process.env.RSA_KEY_SIZE || '2048');