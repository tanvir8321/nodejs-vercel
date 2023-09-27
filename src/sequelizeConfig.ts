// src/sequelizeConfig.ts
import { Sequelize } from 'sequelize';

// Define the types for your environment variables
type Env = {
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
};

// Ensure that process.env contains the required variables
const env: Env = {
  DB_NAME: process.env.DB_NAME || '',
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_HOST: process.env.DB_HOST || '',
};

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: 'mysql',
});

export default sequelize;
