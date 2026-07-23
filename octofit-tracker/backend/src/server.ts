import express from 'express';
import db from './config/database';

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

db.once('open', () => {
  app.listen(port, () => {
    console.log(`OctoFit backend listening on port ${port}`);
  });
});
