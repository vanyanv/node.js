import express from 'express';
import router from './router';
//morgan is a logging tool
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';
//makes the api/server
const app = express();

//use cors
app.use(cors());
//does logging
app.use(morgan('dev'));
//allows client to send json
app.use(express.json());
//allow client to add query string
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('hello from express');
  res.status(200);
  res.json({ message: 'hello' });
});
//use lets you apply a global option
app.use('/api', protect, router);
app.post('/user', createNewUser);
app.post('/signin', signin);
export default app;
