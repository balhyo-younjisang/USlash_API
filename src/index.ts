import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
}); 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
