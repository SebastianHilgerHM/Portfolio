import readlineSync = require('readline-sync');

type Word = string;
type HiddenWord = string[];

const MAX_TRIES: number = 11;

enum GameStatus {
    Running = 'running',
    Won = 'won',
    Lost = 'lost',
    Exited = 'exited',
}

interface GameState {
    word: Word;
    hiddenWord: HiddenWord;
    guessedLetters: string[];
    triesLeft: number;
    status: GameStatus;
}

class HangmanGame {
    private words: Word[];

    constructor(words: Word[] = []) {
        this.words = words.map(w => w.toLowerCase());
    }

    // public entrypoint to start the game loop
    public start(): void {
        if (!this.promptYesNo('Do you want to play? (y/n): ')) {
            console.log('Goodbye!');
            return;
        }

        if (this.words.length === 0) {
            this.words = this.getWords();
        }

        let keepPlaying = true;
        while (keepPlaying && this.words.length > 0) {
            const word = this.chooseRandomWord(this.words);
            let state = this.createGameState(word);

            while (state.hiddenWord.includes('_') && state.triesLeft > 0) {
                console.log('Current word:', state.hiddenWord.join(' '));
                console.log(`Tries left: ${state.triesLeft}`);
                const guessed = this.guessLetter();
                state = this.updateHiddenWordState(state, guessed);
                if (state.status === GameStatus.Won) {
                    console.log(`Congratulations — you guessed the word: ${state.word}`);
                } else if (state.status === GameStatus.Lost) {
                    console.log(`You've run out of tries. The word was: ${state.word}`);
                }
            }

            if (this.words.length === 0) {
                console.log('No more words left. Thanks for playing!');
                break;
            }

            keepPlaying = this.promptYesNo('Do you want to play another round? (y/n): ');
        }
    }

    private createGameState(word: Word): GameState {
        return {
            word,
            hiddenWord: this.createHiddenWord(word),
            guessedLetters: [],
            triesLeft: MAX_TRIES,
            status: GameStatus.Running,
        };
    }

    private createHiddenWord(word: Word = ''): HiddenWord {
        return new Array(word.length).fill('_');
    }

    private updateHiddenWordState(state: GameState, guessedLetter: string): GameState {
        if (state.status !== GameStatus.Running) return state;

        if (!state.guessedLetters.includes(guessedLetter)) {
            state.guessedLetters.push(guessedLetter);
            let found = false;
            for (let i = 0; i < state.word.length; i++) {
                if (state.word[i] === guessedLetter) {
                    state.hiddenWord[i] = guessedLetter;
                    found = true;
                }
            }
            if (!found) {
                state.triesLeft -= 1;
            }
        }

        if (!state.hiddenWord.includes('_')) {
            state.status = GameStatus.Won;
        } else if (state.triesLeft <= 0) {
            state.status = GameStatus.Lost;
        }

        return state;
    }

    private chooseRandomWord(words: Word[] = []): Word {
        if (!Array.isArray(words) || words.length === 0) {
            throw new Error('No words available to choose from');
        }
        const idx = Math.floor(Math.random() * words.length);
        const chosen = words[idx]!;
        words.splice(idx, 1);
        return chosen;
    }

    private filterLongWords(words: Word[] = [], maxLength: number = 12): void {
        let i = 0;
        while (i < words.length) {
            const w = words[i];
            if (w !== undefined && w.length > maxLength) {
                words.splice(i, 1);
            } else {
                i++;
            }
        }
    }

    private getWords(): Word[] {
        const numWords = parseInt(readlineSync.question('How many Words would you like to guess? '), 10) || 0;
        const entered: Word[] = [];
        for (let i = 0; i < numWords; i++) {
            const w = readlineSync.question(`Enter word ${i + 1}: `);
            entered.push(w.toLowerCase());
        }
        const rejected = entered.filter(w => w.length > 12);
        this.filterLongWords(entered, 12);
        if (rejected.length > 0) {
            console.log('Rejected words (too long):', rejected.join(', '));
        }
        return entered;
    }

    private promptYesNo(question: string): boolean {
        while (true) {
            const answer = readlineSync.question(question).toLowerCase();
            if (answer === 'y') return true;
            if (answer === 'n') return false;
            console.log('Invalid input. Please enter y or n.');
        }
    }

    private guessLetter(): string {
        while (true) {
            const letter = readlineSync.question('Guess a letter: ').toLowerCase();
            if (letter.length === 1) return letter;
            console.log('Please enter a single letter.');
        }
    }
}

// Create a game and start it when this file is run directly with node/ts-node.
const game = new HangmanGame();
game.start();
