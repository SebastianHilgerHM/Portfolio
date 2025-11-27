import path from 'path';
import express from 'express';
import apiRouter from './routes/api';

const app = express();
const DEFAULT_PORT = 8000;
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : DEFAULT_PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api', apiRouter);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.status(500).json({ message: err.message });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Hangman server listening on http://localhost:${PORT}`);
  });
}

export default app;
