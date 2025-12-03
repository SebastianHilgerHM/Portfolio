// @author Sebastian Hilger
import { Request, Response, Router } from 'express';
import { HangmanGame } from '../game/HangmanGame';

const router = Router();
const game = new HangmanGame();

type WordsRequestBody = { words?: string[] };
type GuessRequestBody = { letter?: string };

router.post('/game', (_req: Request, res: Response) => {
  game.reset();
  res.json({ message: 'game created' });
});

router.post('/words', (req: Request, res: Response) => {
  const { words } = req.body as WordsRequestBody;
  if (!Array.isArray(words)) {
    return res.status(400).json({ message: '"words" must be an array.' });
  }

  const result = game.setWords(words);
  res.json(result);
});

router.post('/game/start', (_req: Request, res: Response) => {
  try {
    const state = game.startRound();
    res.json({ state });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message, state: game.getPublicState() });
  }
});

router.get('/game/state', (_req: Request, res: Response) => {
  res.json({ state: game.getPublicState() });
});

router.post('/game/guess', (req: Request, res: Response) => {
  const { letter } = req.body as GuessRequestBody;
  if (!letter) {
    return res.status(400).json({ message: 'Please provide a letter.' });
  }

  try {
    const state = game.guess(letter);
    res.json({ state });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message, state: game.getPublicState() });
  }
});

router.post('/game/next', (_req: Request, res: Response) => {
  try {
    const state = game.nextRound();
    res.json({ state });
  } catch (error) {
    if (!game.hasWordsRemaining()) {
      return res.json({ done: true });
    }
    res.status(400).json({ message: (error as Error).message, state: game.getPublicState() });
  }
});

export default router;
