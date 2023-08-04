import express from 'express';
//makes the api/server
const app = express();

app.get('/', (req, res) => {
  console.log('hello from express');
  res.status(200);
  res.json({ message: 'hello' });
});

export default app;
