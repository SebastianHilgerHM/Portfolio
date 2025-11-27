"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HangmanGame_1 = require("../game/HangmanGame");
const router = (0, express_1.Router)();
const game = new HangmanGame_1.HangmanGame();
router.post('/game', (_req, res) => {
    game.reset();
    res.json({ message: 'game created' });
});
router.post('/words', (req, res) => {
    const { words } = req.body;
    if (!Array.isArray(words)) {
        return res.status(400).json({ message: '"words" must be an array.' });
    }
    const result = game.setWords(words);
    res.json(result);
});
router.post('/game/start', (_req, res) => {
    try {
        const state = game.startRound();
        res.json({ state });
    }
    catch (error) {
        res.status(400).json({ message: error.message, state: game.getPublicState() });
    }
});
router.get('/game/state', (_req, res) => {
    res.json({ state: game.getPublicState() });
});
router.post('/game/guess', (req, res) => {
    const { letter } = req.body;
    if (!letter) {
        return res.status(400).json({ message: 'Please provide a letter.' });
    }
    try {
        const state = game.guess(letter);
        res.json({ state });
    }
    catch (error) {
        res.status(400).json({ message: error.message, state: game.getPublicState() });
    }
});
router.post('/game/next', (_req, res) => {
    try {
        const state = game.nextRound();
        res.json({ state });
    }
    catch (error) {
        if (!game.hasWordsRemaining()) {
            return res.json({ done: true });
        }
        res.status(400).json({ message: error.message, state: game.getPublicState() });
    }
});
exports.default = router;
