import express from 'express';
import router from './router';
//morgan is a logging tool
import morgan from 'morgan';
//makes the api/server
const app = express();

//does logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
  console.log('hello from express');
  res.status(200);
  res.json({ message: 'hello' });
});
//use lets you apply a global option
app.use('/api', router);

export default app;
