import express from "express";
import cors from 'cors'
import userController from './controllers/userController.js';
import mongoose from 'mongoose';
import config from "./congif.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userController);

try {
  await mongoose.connect(config.db.mongo.connectionString);
  console.log('Connected to MongoDB');

  app.listen(config.server.port, () => {
    console.log(`Server is running on: http://localhost:${config.server.port}`)
  })
} catch (error) {
  throw new Error('Error connecting to DB');
}
