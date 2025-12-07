# Komponentenkonzept: Student Database

## 1. Übersicht

Die Student Database ist eine Web-Anwendung, die Studentendaten von der Random User API abruft und in einem 3x3 Grid darstellt. Die Anwendung besteht aus wiederverwendbaren Komponenten.

---

## 2. UI-Skizze mit Komponentenmarkierung

```
┌─────────────────────────────────────────────────────────────────────┐
│                         [1] HEADER                                  │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  Logo/Titel          [2] NAVIGATION                           │  │
│  │                      ┌─────────┬─────────┬─────────┐          │  │
│  │  Student DB          │Students │ Filter  │ Imprint │          │  │
│  │                      └─────────┴─────────┴─────────┘          │  │
│  └───────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────┤
│                         [3] MAIN CONTENT                            │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                    [4] STUDENT GRID                           │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │  │
│  │  │[5] STUDENT  │  │[5] STUDENT  │  │[5] STUDENT  │            │  │
│  │  │    CARD     │  │    CARD     │  │    CARD     │            │  │
│  │  │  ┌─────┐    │  │  ┌─────┐    │  │  ┌─────┐    │            │  │
│  │  │  │ IMG │    │  │  │ IMG │    │  │  │ IMG │    │            │  │
│  │  │  └─────┘    │  │  └─────┘    │  │  └─────┘    │            │  │
│  │  │  Name       │  │  Name       │  │  Name       │            │  │
│  │  │  Email      │  │  Email      │  │  Email      │            │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘            │  │
│  │                                                               │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │  │
│  │  │[5] STUDENT  │  │[5] STUDENT  │  │[5] STUDENT  │            │  │
│  │  │    CARD     │  │    CARD     │  │    CARD     │            │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘            │  │
│  │                                                               │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │  │
│  │  │[5] STUDENT  │  │[5] STUDENT  │  │[5] STUDENT  │            │  │
│  │  │    CARD     │  │    CARD     │  │    CARD     │            │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘            │  │
│  └───────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────┤
│                         [6] FOOTER                                  │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  © 2025 Student DB  |  Seitenaufruf: 07.12.2025, 14:30:00     │  │
│  └───────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 3. Komponentenbeschreibung

### [1] Header-Komponente
**Datei:** `Header.js` / `Header.vue` / `header.html`

**Beschreibung:** 
Enthält das Logo/Titel der Anwendung und die Navigation.

**Begründung:**
- Wird auf jeder Seite wiederverwendet
- Sorgt für konsistentes Erscheinungsbild
- Kapselung der Navigationslogik

---

### [2] Navigation-Komponente
**Datei:** `Navigation.js` / `Nav.vue`

**Beschreibung:**
Menü mit den Links zu:
- Students (Startseite)
- Filter (mit URL-Parameter)
- Imprint

**Begründung:**
- Separate Komponente für bessere Wartbarkeit
- Kann bei Bedarf auch in anderen Bereichen eingebunden werden (z.B. Mobile-Menü)
- Aktiver Menüpunkt kann hervorgehoben werden

---

### [3] Main Content Container
**Datei:** `App.js` / `main.html`

**Beschreibung:**
Container-Komponente, die je nach Route unterschiedliche Inhalte anzeigt:
- Students Page
- Filter Page  
- Imprint Page

**Begründung:**
- Zentrale Steuerung des Seiteninhalts
- Ermöglicht einfaches Routing zwischen Seiten

---

### [4] StudentGrid-Komponente
**Datei:** `StudentGrid.js` / `StudentGrid.vue`

**Beschreibung:**
Grid-Layout für die Darstellung von 9 Studenten (3x3).

**Props:**
- `students`: Array mit Studentendaten
- `filter` (optional): Filterparameter

**Begründung:**
- Wiederverwendbar auf Students- und Filter-Seite
- Kapselt das CSS-Grid-Layout
- Nimmt Daten als Props entgegen → flexibel

---

### [5] StudentCard-Komponente
**Datei:** `StudentCard.js` / `StudentCard.vue`

**Beschreibung:**
Einzelne Karte zur Darstellung eines Studenten.

**Inhalt:**
- Profilbild
- Name (Vor- und Nachname)
- E-Mail-Adresse
- Optional: weitere Infos (Alter, Land, etc.)

**Props:**
- `student`: Objekt mit Studentendaten

**Begründung:**
- Kleinste wiederverwendbare Einheit
- Single Responsibility Principle
- Einfach zu stylen und zu testen
- Wird 9x pro Seite verwendet

---

### [6] Footer-Komponente
**Datei:** `Footer.js` / `Footer.vue` / `footer.html`

**Beschreibung:**
Fußzeile mit:
- Copyright-Hinweis
- Datum und Uhrzeit des Seitenaufrufs

**Begründung:**
- Wird auf jeder Seite wiederverwendet
- Timestamp wird beim Laden der Seite generiert
- Konsistentes Layout

---

## 4. Seitenspezifische Komponenten

### StudentsPage
**Datei:** `StudentsPage.js`

**Beschreibung:**
Hauptseite, die 9 zufällige Studenten von der API lädt.

**API-Aufruf:**
```
https://randomuser.me/api/?results=9
```

---

### FilterPage
**Datei:** `FilterPage.js`

**Beschreibung:**
Gefilterte Ansicht der Studenten basierend auf URL-Parameter.

**Gewählter Filter:** `gender` (Geschlecht)

**API-Aufruf mit Filter:**
```
https://randomuser.me/api/?results=9&gender=female
https://randomuser.me/api/?results=9&gender=male
```

**URL-Struktur:**
```
/filter?gender=female
/filter?gender=male
```

**Begründung für Filterwahl:**
- Einfach zu implementieren
- Klare visuelle Unterscheidung der Ergebnisse
- Von der Random User API unterstützt

**Weitere mögliche Filter der Random User API:**
- `nat` (Nationalität, z.B. `?nat=de,fr,us`)
- `inc` / `exc` (Include/Exclude bestimmte Felder)

---

### ImprintPage
**Datei:** `ImprintPage.js`

**Beschreibung:**
Statische Seite mit Informationen über den Website-Autor.

**Inhalt:**
- Name des Autors
- E-Mail-Adresse
- Hochschule/Kurs
- Erstellungsdatum

---

## 5. Datenfluss-Diagramm

```
┌──────────────────┐
│  Random User API │
└────────┬─────────┘
         │ fetch()
         ▼
┌──────────────────┐
│   App-State      │ ◄── URL-Parameter (Filter)
│   (students[])   │
└────────┬─────────┘
         │ props
         ▼
┌──────────────────┐
│   StudentGrid    │
└────────┬─────────┘
         │ map()
         ▼
┌──────────────────┐
│   StudentCard    │ x9
└──────────────────┘
```

---

## 6. Ordnerstruktur

```
student-db/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js              # Hauptlogik & Routing
│   ├── api.js              # API-Aufrufe
│   └── components/
│       ├── Header.js
│       ├── Navigation.js
│       ├── Footer.js
│       ├── StudentGrid.js
│       ├── StudentCard.js
│       └── pages/
│           ├── StudentsPage.js
│           ├── FilterPage.js
│           └── ImprintPage.js
└── assets/
    └── images/
```

---

## 7. Zusammenfassung der Komponentenauswahl

| Komponente    | Wiederverwendbar | Begründung |
|---------------|------------------|------------|
| Header        | ✅ Ja            | Auf allen Seiten gleich |
| Navigation    | ✅ Ja            | Teil des Headers, könnte auch mobil anders dargestellt werden |
| Footer        | ✅ Ja            | Auf allen Seiten gleich |
| StudentGrid   | ✅ Ja            | Gleiche Struktur auf Students- und Filter-Seite |
| StudentCard   | ✅ Ja            | Wird 9x pro Grid verwendet |
| StudentsPage  | ❌ Nein          | Seitenspezifisch |
| FilterPage    | ❌ Nein          | Seitenspezifisch mit URL-Parameter |
| ImprintPage   | ❌ Nein          | Statischer Inhalt |

---

## 8. Technologie-Empfehlung

Für die Umsetzung bieten sich folgende Optionen an:

1. **Vanilla JavaScript** - Für einfache Projekte ohne Framework
2. **Vue.js** - Komponentenbasiert, einfach zu lernen
3. **React** - Weit verbreitet, funktionale Komponenten

Die Komponentenstruktur bleibt bei allen Optionen gleich.
