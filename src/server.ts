// src/server.ts

import 'dotenv/config';
import express from 'express';
import sequelize from './sequelizeConfig';

const app = express();
const port = 3000;

// Sync Sequelize with the database
sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });



app.get('/', async (req, res) => {
  try {
    res.send(`Hello, Tanvir`);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
