// CHANGE: import typed `readline-sync` via TypeScript's CommonJS import syntax.
// Added a local declaration file `types/readline-sync.d.ts` to provide minimal typing
// for the `question()` function. This avoids needing `@types/readline-sync`.
import readlineSync = require('readline-sync');

// CHANGE: introduced domain-specific type aliases for clarity
type Word = string;
type HiddenWord = string[];

// CHANGE: extracted constant for maximum tries to avoid magic numbers
const MAX_TRIES: number = 11;

// Improve: central GameState object to pass between functions
interface GameState {
    word: string;
    hiddenWord: string[];
    guessedLetters: string[];
    triesLeft: number;
}

// Create a new GameState for a given word
function createGameState(word: Word): GameState {
    return {
        word,
        hiddenWord: createHiddenWord(word),
        guessedLetters: [],
        triesLeft: MAX_TRIES,
    };
}

// Update state with a guessed letter and return the mutated/updated state
function updateHiddenWordState(state: GameState, guessedLetter: string): GameState {
    // avoid duplicate processing
    if (!state.guessedLetters.includes(guessedLetter)) {
        state.guessedLetters.push(guessedLetter);
        let found: boolean = false;
        for (let i: number = 0; i < state.word.length; i++) {
            if (state.word[i] === guessedLetter) {
                state.hiddenWord[i] = guessedLetter;
                found = true;
            }
        }
        if (!found) {
            state.triesLeft = state.triesLeft - 1;
        }
    }
    return state;
}

// CHANGE: added explicit parameter and return types (string[] -> string)
// CHANGE: accept array of Words and return a Word. Uses non-null assertion after
// checking array is non-empty to satisfy `noUncheckedIndexedAccess`.
function chooseRandomWord(words: Word[] = []): Word {
    if (!Array.isArray(words) || words.length === 0) {
        throw new Error("Invalid input: Please provide an array of words.");
    }
    const randomIndex: number = Math.floor(Math.random() * words.length);
    // CHANGE: use non-null assertion `!` because we've checked words.length > 0
    const chosenWord: Word = words[randomIndex]!;
    words.splice(randomIndex, 1);
    return chosenWord;
}

// CHANGE: added explicit types and a defensive check for possible undefined
// when indexing into the `words` array.
// CHANGE: explicit types + defensive check for possible undefined indexing
function filterLongWords(words: Word[] = [], maxLength: number = 9): void {
    let i: number = 0;
    while (i < words.length) {
        // CHANGE: capture words[i] in a local and check for undefined before use
        const w: Word | undefined = words[i];
        if (w !== undefined && w.length > maxLength) {
            words.splice(i, 1);
        } else {
            i++;
        }
    }
}

// CHANGE: explicitly typed return as string[] instead of implicit any[]
// CHANGE: return a HiddenWord (string[]) and use const where possible
function createHiddenWord(word: Word = ""): HiddenWord {
    return new Array(word.length).fill("_");
}

// CHANGE: added explicit types for parameters and return value
// CHANGE: clearly typed params/return and small local typing
function updateHiddenWord(hiddenWord: HiddenWord = [], word: Word = "", guessedLetter: string = ""): HiddenWord {
    for (let i: number = 0; i < word.length; i++) {
        if (word[i] === guessedLetter) {
            hiddenWord[i] = guessedLetter;
        }
    }
    return hiddenWord;
}

// CHANGE: typed the local `readlineSync` variable so TS knows the shape of question(...)
function getWords(): Word[] {
    // CHANGE: use imported, typed `readlineSync`
    const numWords: number = parseInt(readlineSync.question('How many Words would you like to guess? '), 10);

    const enteredWords: Word[] = [];
    for (let i: number = 0; i < numWords; i++) {
        const word: Word = readlineSync.question(`Enter word ${i + 1}: `);
        enteredWords.push(word.toLowerCase());
    }

    const rejectedWords: Word[] = enteredWords.filter((w: Word) => w.length > 12);
    filterLongWords(enteredWords, 12);

    if (rejectedWords.length > 0) {
        console.log('Rejected words (too long):', rejectedWords.join(', '));
    }

    return enteredWords;
}

// CHANGE: clarified control flow and added types; removed implicit global `input`/assignment
function startGame(): boolean {
    while (true) {
        const answer: string = readlineSync.question('Do you want to play? (y/n): ').toLowerCase();
        if (answer === 'n') {
            console.log('Goodbye!');
            return false;
        }
        if (answer === 'y') {
            console.log('Starting the game...');
            return true;
        }
        console.log('Invalid input. Please enter y or n.');
    }
}

// CHANGE: added explicit param and return types, and typed the readlineSync local
function guessLetter(is_test: boolean = false): string {
    let is_single_char: boolean = false;
    let letter: string = "";

    while (is_single_char === false) {
        if (is_test === true) {
            console.log("Guess a letter: a");
            return "a";
        }
        letter = readlineSync.question('Guess a letter: ').toLowerCase();
        if (letter.length === 1) {
            is_single_char = true;
        } else {
            console.log('Please enter a single letter.');
        }
    }
    return letter;
}

// CHANGE: removed implicit globals and declared typed locals inside main.
// This block centralizes game flow with properly typed variables.
function main(): void {
    const playerChoice: boolean = startGame();

    if (playerChoice === true) {

        // demo setup using GameState
        const demoWord: Word = "airplane";
        let demoState: GameState = createGameState(demoWord);
        console.log('Current word:', demoState.hiddenWord.join(' '));
        console.log(`Tries left: ${demoState.triesLeft}`);
        const guessedLetterDemo: string = guessLetter(true); // explicit typed call for test
        demoState = updateHiddenWordState(demoState, "a");
        console.log('Current word:', demoState.hiddenWord.join(' '));

        const wordList: Word[] = getWords();

        // outer loop: allow multiple rounds in sequence
        let keepPlaying: boolean = true;
        while (keepPlaying && wordList.length > 0) {
            const word: Word = chooseRandomWord(wordList);
            let state: GameState = createGameState(word);

            while (state.hiddenWord.includes("_") && state.triesLeft > 0) {
                console.log('Current word:', state.hiddenWord.join(' '));
                console.log(`Tries left: ${state.triesLeft}`);
                const guessedLetter: string = guessLetter();
                const prevTries = state.triesLeft;
                state = updateHiddenWordState(state, guessedLetter);
                if (state.triesLeft < prevTries) {
                    console.log(`The letter "${guessedLetter}" is not in the word.`);
                }
            }

            console.log(`The word was: ${word}`);

            // if no words remain, inform player and stop
            if (wordList.length === 0) {
                console.log('No more words left. Thanks for playing!');
                break;
            }

            // ask the user if they want another round
            const playAgain: string = readlineSync.question('Do you want to play another round? (y/n): ').toLowerCase();
            if (playAgain !== 'y') {
                keepPlaying = false;
            }
        }
    }
}
main();