import express from 'express';

import { Routes } from '../src/homework2/types/Routes';

import { router } from '../src/homework2/api';

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.json());
app.use(Routes.USERS, router);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});