# Hangman Web App (Express + TypeScript)

Dieses Projekt überführt das bestehende CLI-Hangman-Spiel in eine kleine REST-Webapplikation.

## Struktur

```
week05/
├── public/          # statische Seiten (index, words, game, end)
├── src/
│   ├── game/        # Spiellogik
│   ├── routes/      # REST-API
│   └── server.ts    # Express-Einstieg
├── package.json
└── tsconfig.json
```

## Entwicklung starten

```powershell
cd "c:/Users/Proud/Documents/Uni Docs/3. Semester/Webtechnologie/webtech_test/week05"
npm install
npm run dev
```

Der Server läuft danach standardmäßig unter `http://localhost:8000`. Die Seiten befinden sich unter `/index.html`, `/words.html`, `/game.html` und `/end.html`.

## Produktion

```powershell
npm run build
npm start
```

Dies erzeugt das kompiliere JavaScript im `dist/`-Ordner und startet den Express-Server daraus.
