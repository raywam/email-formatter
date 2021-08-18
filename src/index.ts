import express from 'express';
import emailRouter from './infrastructure/routers';

// rest of the code remains same
const app = express();

app.use(express.json())

const PORT = 3000;

app.use('/', emailRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});