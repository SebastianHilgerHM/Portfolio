"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const MAX_TRIES = 11;
var GameStatus;
(function (GameStatus) {
    GameStatus["Running"] = "running";
    GameStatus["Won"] = "won";
    GameStatus["Lost"] = "lost";
    GameStatus["Exited"] = "exited";
})(GameStatus || (GameStatus = {}));
class HangmanGame {
    words;
    constructor(words = []) {
        this.words = words.map(w => w.toLowerCase());
    }
    // public entrypoint to start the game loop
    start() {
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
                }
                else if (state.status === GameStatus.Lost) {
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
    createGameState(word) {
        return {
            word,
            hiddenWord: this.createHiddenWord(word),
            guessedLetters: [],
            triesLeft: MAX_TRIES,
            status: GameStatus.Running,
        };
    }
    createHiddenWord(word = '') {
        return new Array(word.length).fill('_');
    }
    updateHiddenWordState(state, guessedLetter) {
        if (state.status !== GameStatus.Running)
            return state;
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
        }
        else if (state.triesLeft <= 0) {
            state.status = GameStatus.Lost;
        }
        return state;
    }
    chooseRandomWord(words = []) {
        if (!Array.isArray(words) || words.length === 0) {
            throw new Error('No words available to choose from');
        }
        const idx = Math.floor(Math.random() * words.length);
        const chosen = words[idx];
        words.splice(idx, 1);
        return chosen;
    }
    filterLongWords(words = [], maxLength = 12) {
        let i = 0;
        while (i < words.length) {
            const w = words[i];
            if (w !== undefined && w.length > maxLength) {
                words.splice(i, 1);
            }
            else {
                i++;
            }
        }
    }
    getWords() {
        const numWords = parseInt(readlineSync.question('How many Words would you like to guess? '), 10) || 0;
        const entered = [];
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
    promptYesNo(question) {
        while (true) {
            const answer = readlineSync.question(question).toLowerCase();
            if (answer === 'y')
                return true;
            if (answer === 'n')
                return false;
            console.log('Invalid input. Please enter y or n.');
        }
    }
    guessLetter() {
        while (true) {
            const letter = readlineSync.question('Guess a letter: ').toLowerCase();
            if (letter.length === 1)
                return letter;
            console.log('Please enter a single letter.');
        }
    }
}
// Create a game and start it when this file is run directly with node/ts-node.
const game = new HangmanGame();
game.start();
//# sourceMappingURL=index.js.map