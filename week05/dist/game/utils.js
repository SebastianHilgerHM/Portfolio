"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_TRIES = exports.MAX_WORD_LENGTH = void 0;
exports.normalizeWords = normalizeWords;
exports.filterLongWords = filterLongWords;
exports.createHiddenWord = createHiddenWord;
exports.sanitizeLetter = sanitizeLetter;
exports.MAX_WORD_LENGTH = 12;
exports.MAX_TRIES = 11;
function normalizeWords(words = []) {
    return words
        .map((word) => word.trim().toLowerCase())
        .filter((word) => word.length > 0);
}
function filterLongWords(words, maxLength = exports.MAX_WORD_LENGTH) {
    const accepted = [];
    const rejected = [];
    for (const word of words) {
        if (word.length <= maxLength) {
            accepted.push(word);
        }
        else {
            rejected.push(word);
        }
    }
    return { accepted, rejected };
}
function createHiddenWord(word) {
    return new Array(word.length).fill('_');
}
function sanitizeLetter(letter) {
    return (letter ?? '').trim().toLowerCase();
}
