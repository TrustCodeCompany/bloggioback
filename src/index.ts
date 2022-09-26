import 'reflect-metadata';

import app from './app';
import { AppDataSource } from './db/db';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main () {
  try {
    await AppDataSource.initialize();
    console.log('Database connected');
    app.listen(3000);
    console.log('server is listening on port ', 3000);
  } catch (e) {
    console.log('error ', e);
  }
}

main().catch(function (e) {
  console.log('Error -> ', e);
});
