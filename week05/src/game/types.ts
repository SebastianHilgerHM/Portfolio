// @author Sebastian Hilger
export type Word = string;
export type HiddenWord = string[];

export type GameStatus = 'idle' | 'running' | 'won' | 'lost' | 'finished';

export interface GameState {
  word: Word;
  hiddenWord: HiddenWord;
  guessedLetters: string[];
  triesLeft: number;
  status: GameStatus;
}

export interface PublicGameState {
  hiddenWord: HiddenWord;
  guessedLetters: string[];
  triesLeft: number;
  status: GameStatus;
  wordLength: number;
  remainingWords: number;
}
