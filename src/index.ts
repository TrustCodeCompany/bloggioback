import express from 'express';
// se puso el @ para configurarlo como ruta absoluta
import indexRoute from '@routes/index.route';

// function dff(params) {}

const app = express();

app.get('/', (req, res) => {
  res.json('CALLA CHIPIIIIIIIIIIIII');
});

app.use('/', indexRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
