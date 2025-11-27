"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
const DEFAULT_PORT = 8000;
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : DEFAULT_PORT;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.use('/api', api_1.default);
app.use((err, _req, res, _next) => {
    res.status(500).json({ message: err.message });
});
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Hangman server listening on http://localhost:${PORT}`);
    });
}
exports.default = app;
