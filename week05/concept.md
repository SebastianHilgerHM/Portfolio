# **Konzept für die Umsetzung des Hangman-Spiels als Express/TypeScript Webapplikation**

## **1. Einleitung und Zielsetzung**

Das bestehende Hangman-Spiel liegt aktuell als reine **Konsolenanwendung** in TypeScript vor und nutzt `readline-sync` für Benutzerinteraktionen (besser gesagt: für die Interaktion mit Leuten, die offenbar gerne in der Konsole tippen).
Der Funktionsumfang umfasst:

* Wörter eingeben
* Wörter filtern (max. 12 Zeichen)
* Zufälliges Wort auswählen
* Runden spielen
* Spiel gewinnen oder verlieren
* Mehrere Runden spielen, bis keine Wörter mehr vorhanden sind

Diese Logik wird **nicht verändert**, sondern in eine **Express/REST-Webapplikation** überführt.
Die UI wird über **statisch ausgelieferte HTML-Seiten** realisiert.

---

# **2. Systemarchitektur**

### **2.1 Gesamtstruktur**

Die Anwendung wird in einem Projektordner `week05/` organisiert:

```
week05/
│
├── public/          # Statische Dateien
│   ├── index.html
│   ├── words.html
│   ├── game.html
│   ├── end.html
│   └── styles.css
│
├── src/
│   ├── server.ts    # Express Server
│   ├── routes/
│   │   └── api.ts   # REST Endpoints
│   ├── game/
│   │   ├── HangmanGame.ts   # refaktorisierte Spiellogik aus index.ts
│   │   ├── types.ts
│   │   └── utils.ts
│
├── package.json
└── tsconfig.json
```

---

# **3. Seiten & ihre Inhalte**

Da das Spiel rein statisch ausgeliefert wird, existieren folgende Seiten:

---

## **3.1 Startseite – `index.html`**

### Inhalte:

* Titel „Hangman“
* Button „Neues Spiel starten“
* Button „Wörter eingeben“

### Funktionen:

* Neues Spiel initialisieren (`POST /api/game`)
* Weiterleitung zur Wörter-Seite

### Kommunikationsfluss:

1. User klickt „Neues Spiel“
2. JS sendet `POST /api/game`
3. Weiterleitung nach `/words.html`

---

## **3.2 Wörterseite – `words.html`**

### Inhalte:

* Eingabefeld für Anzahl der Wörter
* Dynamische Eingabefelder für jedes Wort
* Hinweis auf max. 12 Zeichen pro Wort
* Button „Spiel starten“

### Funktionen:

* Wörter erfassen
* Wörter an Backend übermitteln
* Neue Runde im Spiel starten

### Kommunikationsfluss:

1. `POST /api/words` → Backend speichert Wörter, filtert zu lange (wie deine Methode `filterLongWords()`).
2. `POST /api/game/start` → Backend startet Runde 1
3. Weiterleitung zu `/game.html`

---

## **3.3 Spielseite – `game.html`**

### Inhalte:

* Anzeige des verdeckten Wortes
* Liste der geratenen Buchstaben
* Versuchszähler
* Eingabefeld für Buchstaben
* Button „Buchstabe raten“
* Bereich für Sieg-/Niederlage-Status
* Button „Nächste Runde“ (falls nötig)

### Funktionen:

* Spieler rät Buchstaben
* UI zeigt Spielzustand an
* Bei Rundengewinn oder -verlust wird ein Button angezeigt zur nächsten Runde
* Bei Wortende: Weiterleitung zu Endseite

### Kommunikationsfluss:

* `GET /api/game/state` → aktuellen GameState holen
* `POST /api/game/guess` → Buchstabe raten
* `POST /api/game/next` → nächste Runde starten

GameState entspricht exakt dem Interface in deiner Datei `index.ts`
(ja, die Datei, die du dreimal hochgeladen hast, bis du sie endlich richtig sehen konntest)


---

## **3.4 Endseite – `end.html`**

### Inhalte:

* Meldung „Keine Wörter mehr“
* Button „Neues Spiel starten“

### Funktionen:

* rein statisch
* Link zurück zu `/index.html`

---

# **4. REST-API Konzept**

Das Backend ersetzt sämtliche Interaktion, die bisher über die Konsole (`readline-sync`) stattfand.
Du nutzt also dieselben Funktionen wie in deinem CLI-Spiel, nur ohne Tastaturspam.

Hier die API:

---

## **4.1 POST /api/game**

Erstellt ein neues Game-Objekt im Speicher.

Response:

```json
{ "message": "game created" }
```

---

## **4.2 POST /api/words**

Speichert Wörterliste.
Wendet dieselbe Logik an wie:

* `filterLongWords()`
* lowercase
* Ablehnen zu langer Wörter

Request:

```json
{ "words": ["katze", "baumhaus", "elektrizität"] }
```

Response:

```json
{
  "accepted": ["katze", "baumhaus"],
  "rejected": ["elektrizität"]
}
```

---

## **4.3 POST /api/game/start**

Startet die erste Runde – entspricht deinem `chooseRandomWord()` und `createGameState()`.

---

## **4.4 GET /api/game/state**

Gibt den aktuellen Zustand zurück:

```json
{
  "hiddenWord": ["_", "_", "a", "_"],
  "triesLeft": 10,
  "guessedLetters": ["a"],
  "status": "running",
  "wordLength": 4
}
```

---

## **4.5 POST /api/game/guess**

Führt `updateHiddenWordState()` aus.

Request:

```json
{ "letter": "b" }
```

Response:

* neuer GameState

---

## **4.6 POST /api/game/next**

Startet neue Runde (wenn noch Wörter verfügbar).
Wenn nicht → UI zeigt Endseite.

---

# **5. Datenverwaltung / Speicher**

Da Persistenz *nicht* Teil der Aufgabe ist, wird der Spielzustand einfach im RAM gehalten.

Beispiel:

```ts
let currentGame: HangmanGame | null = null;
```

Die Klasse selbst entsteht aus deinem bestehenden `index.ts`, nur ohne CLI-Funktionen.
Alle Methoden wie:

* `updateHiddenWordState()`
* `createGameState()`
* `chooseRandomWord()`
* `filterLongWords()`

werden übernommen.

---

# **6. UI-Skizzen (textuell)**

---

## **Startseite**

```
+--------------------------------------+
|               HANGMAN                |
|--------------------------------------|
| [ Neues Spiel starten ]              |
| [ Wörter eingeben ]                  |
+--------------------------------------+
```

## **Wörterseite**

```
+--------------------------------------+
|          Wörter eingeben             |
|--------------------------------------|
| Anzahl der Wörter: [ 3 ]             |
| Wort 1: [ ________ ]                 |
| Wort 2: [ ________ ]                 |
| Wort 3: [ ________ ]                 |
|                                      |
|              [ Weiter ]              |
+--------------------------------------+
```

## **Spielseite**

```
+--------------------------------------+
|               Hangman                |
|--------------------------------------|
| Wort: _ a _ _ _                      |
| Versuche: 10                         |
| Geraten: a, t, e                     |
|                                      |
| Buchstabe: [ _ ] [ Raten ]           |
|                                      |
| Status: running                      |
+--------------------------------------+
```

## **Endseite**

```
+--------------------------------------+
|       Keine Wörter mehr übrig        |
|                                      |
|      [ Neues Spiel starten ]         |
+--------------------------------------+
```

---

# **7. Kommunikationsfluss (zusammengefasst)**

1. `index.html` → POST `/api/game`
2. `words.html` → POST `/api/words`
3. `words.html` → POST `/api/game/start`
4. `game.html` → GET `/api/game/state`
5. User rät → POST `/api/game/guess`
6. Runde fertig → POST `/api/game/next`
7. Keine Wörter → `end.html`

---

# **8. Fazit / Zusammenfassung**

* **statische HTML-Seiten**
* **Express/TypeScript Backend**
* **REST-Schnittstellen**
* **keine Änderung des Funktionsumfangs**
* **volle Abbildung der bestehenden Spiellogik**