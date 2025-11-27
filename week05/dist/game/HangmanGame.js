"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HangmanGame = void 0;
const utils_1 = require("./utils");
class HangmanGame {
    constructor() {
        this.availableWords = [];
        this.state = null;
    }
    reset() {
        this.availableWords = [];
        this.state = null;
    }
    setWords(words) {
        const normalized = (0, utils_1.normalizeWords)(words);
        const { accepted, rejected } = (0, utils_1.filterLongWords)(normalized);
        this.availableWords = [...accepted];
        this.state = null;
        return { accepted, rejected };
    }
    startRound() {
        if (this.state && this.state.status === 'running') {
            throw new Error('Round already running.');
        }
        return this.beginNewRound();
    }
    nextRound() {
        if (!this.state || (this.state.status !== 'won' && this.state.status !== 'lost')) {
            throw new Error('Current round is not finished yet.');
        }
        return this.beginNewRound();
    }
    guess(letter) {
        if (!this.state || this.state.status === 'idle') {
            throw new Error('No active round.');
        }
        if (this.state.status === 'won' || this.state.status === 'lost') {
            return this.toPublicState();
        }
        const normalizedLetter = (0, utils_1.sanitizeLetter)(letter);
        if (normalizedLetter.length !== 1) {
            throw new Error('Please provide a single letter.');
        }
        if (this.state.guessedLetters.includes(normalizedLetter)) {
            return this.toPublicState();
        }
        this.state.guessedLetters.push(normalizedLetter);
        if (this.state.word.includes(normalizedLetter)) {
            this.state.hiddenWord = this.state.hiddenWord.map((current, index) => this.state?.word[index] === normalizedLetter ? normalizedLetter : current);
        }
        else {
            this.state.triesLeft -= 1;
        }
        if (!this.state.hiddenWord.includes('_')) {
            this.state.status = 'won';
        }
        else if (this.state.triesLeft <= 0) {
            this.state.status = 'lost';
        }
        return this.toPublicState();
    }
    getPublicState() {
        return this.toPublicState();
    }
    hasWordsRemaining() {
        return this.availableWords.length > 0;
    }
    beginNewRound() {
        if (this.availableWords.length === 0) {
            this.state = null;
            throw new Error('No words available.');
        }
        const index = Math.floor(Math.random() * this.availableWords.length);
        const [word] = this.availableWords.splice(index, 1);
        this.state = {
            word,
            hiddenWord: (0, utils_1.createHiddenWord)(word),
            guessedLetters: [],
            triesLeft: utils_1.MAX_TRIES,
            status: 'running',
        };
        return this.toPublicState();
    }
    toPublicState() {
        if (!this.state) {
            return {
                hiddenWord: [],
                guessedLetters: [],
                triesLeft: utils_1.MAX_TRIES,
                status: this.hasWordsRemaining() ? 'idle' : 'finished',
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
exports.HangmanGame = HangmanGame;
