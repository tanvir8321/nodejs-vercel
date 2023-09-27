// src/sequelizeConfig.ts

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('aurobil1_aurobil_cars', 'aurobil1_aurobil_cars', 'aurobil1_aurobil_cars', {
  host: '103.210.56.114',
  dialect: 'mysql', // or another supported database dialect
});

export default sequelize;
