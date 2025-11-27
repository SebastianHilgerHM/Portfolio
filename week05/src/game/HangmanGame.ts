import { GameState, PublicGameState, Word } from './types';
import { createHiddenWord, filterLongWords, MAX_TRIES, normalizeWords, sanitizeLetter } from './utils';

export class HangmanGame {
  private availableWords: Word[] = [];
  private masterWords: Word[] = [];
  private state: GameState | null = null;
  private sharedTries: number = MAX_TRIES;

  public reset(): void {
    this.availableWords = [];
    this.masterWords = [];
    this.state = null;
    this.sharedTries = MAX_TRIES;
  }

  public setWords(words: string[]): { accepted: Word[]; rejected: Word[] } {
    const normalized = normalizeWords(words);
    const { accepted, rejected } = filterLongWords(normalized);
    this.masterWords = [...accepted];
    this.availableWords = [...this.masterWords];
    this.state = null;
    this.sharedTries = MAX_TRIES;
    return { accepted, rejected };
  }

  public startRound(): PublicGameState {
    if (this.state && this.state.status === 'running') {
      throw new Error('Round already running.');
    }
    return this.beginNewRound({ resetSession: true });
  }

  public nextRound(): PublicGameState {
    if (!this.state || (this.state.status !== 'won' && this.state.status !== 'lost')) {
      throw new Error('Current round is not finished yet.');
    }
    if (this.state.status === 'lost' || this.sharedTries <= 0) {
      throw new Error('No tries remaining.');
    }
    return this.beginNewRound({ resetSession: false });
  }

  public guess(letter: string): PublicGameState {
    if (!this.state || this.state.status === 'idle') {
      throw new Error('No active round.');
    }

    if (this.state.status === 'won' || this.state.status === 'lost') {
      return this.toPublicState();
    }

    const normalizedLetter = sanitizeLetter(letter);
    if (normalizedLetter.length !== 1) {
      throw new Error('Please provide a single letter.');
    }

    if (this.state.guessedLetters.includes(normalizedLetter)) {
      return this.toPublicState();
    }

    this.state.guessedLetters.push(normalizedLetter);

    if (this.state.word.includes(normalizedLetter)) {
      this.state.hiddenWord = this.state.hiddenWord.map((current, index) =>
        this.state?.word[index] === normalizedLetter ? normalizedLetter : current
      );
    } else {
      this.sharedTries = Math.max(0, this.sharedTries - 1);
    }

    this.state.triesLeft = this.sharedTries;

    if (!this.state.hiddenWord.includes('_')) {
      this.state.status = 'won';
    } else if (this.state.triesLeft <= 0) {
      this.state.status = 'lost';
    }

    return this.toPublicState();
  }

  public getPublicState(): PublicGameState {
    return this.toPublicState();
  }

  public hasWordsRemaining(): boolean {
    return this.availableWords.length > 0;
  }

  public hasStoredWords(): boolean {
    return this.masterWords.length > 0;
  }

  private beginNewRound({ resetSession }: { resetSession: boolean }): PublicGameState {
    if (resetSession) {
      if (this.masterWords.length === 0) {
        this.availableWords = [];
        this.state = null;
        throw new Error('No words available.');
      }
      this.availableWords = [...this.masterWords];
      this.sharedTries = MAX_TRIES;
    } else if (this.availableWords.length === 0) {
      this.state = null;
      throw new Error('No words available.');
    }

    if (this.sharedTries <= 0) {
      this.state = null;
      throw new Error('No tries remaining.');
    }

    const index = Math.floor(Math.random() * this.availableWords.length);
    const [word] = this.availableWords.splice(index, 1);

    this.state = {
      word,
      hiddenWord: createHiddenWord(word),
      guessedLetters: [],
      triesLeft: this.sharedTries,
      status: 'running',
    };

    return this.toPublicState();
  }

  private toPublicState(): PublicGameState {
    if (!this.state) {
      return {
        hiddenWord: [],
        guessedLetters: [],
        triesLeft: this.sharedTries,
        status: this.availableWords.length > 0 ? 'idle' : 'finished',
        wordLength: 0,
        remainingWords: this.availableWords.length,
      };
    }

    return {
      hiddenWord: [...this.state.hiddenWord],
      guessedLetters: [...this.state.guessedLetters],
      triesLeft: this.state.triesLeft,
      status: this.state.status,
      wordLength: this.state.word.length,
      remainingWords: this.availableWords.length,
    };
  }
}
