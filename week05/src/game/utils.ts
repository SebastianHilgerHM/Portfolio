import { HiddenWord, Word } from './types';

export const MAX_WORD_LENGTH = 12;
export const MAX_TRIES = 11;

export function normalizeWords(words: string[] = []): Word[] {
  return words
    .map((word) => word.trim().toLowerCase())
    .filter((word) => word.length > 0);
}

export function filterLongWords(words: Word[], maxLength: number = MAX_WORD_LENGTH): { accepted: Word[]; rejected: Word[] } {
  const accepted: Word[] = [];
  const rejected: Word[] = [];

  for (const word of words) {
    if (word.length <= maxLength) {
      accepted.push(word);
    } else {
      rejected.push(word);
    }
  }

  return { accepted, rejected };
}

export function createHiddenWord(word: Word): HiddenWord {
  return new Array(word.length).fill('_');
}

export function sanitizeLetter(letter: string): string {
  return (letter ?? '').trim().toLowerCase();
}
