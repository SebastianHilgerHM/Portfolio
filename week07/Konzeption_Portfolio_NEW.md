# Konzeption: Portfolio-Seite

## Autor
//@Author: Sebastian Hilger

---

## 1. Page-Flow (Seitenfluss)

```
                                ┌──────────────────┐
                                │  Seite 1: HOME   │
                                │  (Landing Page)  │
                                └────────┬─────────┘
                                         │
              ┌──────────────────────────┼──────────────────────────┐
              │                          │                          │
              ▼                          ▼                          ▼
    ┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
    │  Seite 2:       │       │  Seite 4:       │       │  Seite 6:       │
    │  ABOUT ME       │       │  RESUME         │       │  PROJECTS       │
    │                 │       │                 │       │                 │
    └─────────────────┘       └─────────────────┘       └─────────────────┘
             ┌─────────────────────────┬─────────────────────────┼
             ▼                         ▼                         ▼
    ┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
    │  Seite 3:       │       │  Seite 5:       │       │  Seite 7:       │
    │  PROJECT 1      │       │  PROJECT 2      │       │  PROJECT 3      │
    │                 │       │                 │       │                 │
    └─────────────────┘       └─────────────────┘       └─────────────────┘
```

### Navigationsstruktur

| Von                  | Nach                 | Aktion                     |
|----------------------|----------------------|----------------------------|
| Header (alle Seiten) | Home (Seite 1)       | Klick auf Logo oder "Home" |
| Header (alle Seiten) | About Me (Seite 2)   | Klick auf "About Me" Link  |
| Header (alle Seiten) | Resume (Seite 4)     | Klick auf "Resume" Link    |
| Header (alle Seiten) | Projects (Seite 6)   | Klick auf "Projects" Link  |
| Home (Seite 1)       | About Me (Seite 2)   | Klick auf About Section    |
| Home (Seite 1)       | Projects (Seite 6)   | Klick auf Projects Section |
| Projects (Seite 6)   | Project 1 (Seite 3)  | Klick auf Projekt-Karte    |
| Projects (Seite 6)   | Project 2 (Seite 5)  | Klick auf Projekt-Karte    |
| Projects (Seite 6)   | Project 3 (Seite 7)  | Klick auf Projekt-Karte    |

---

## 2. Komponentenkonzept

### 2.1 Layout-Komponenten

#### [1] Header/Navbar
**Datei:** `components/Header.tsx`

**Beschreibung:** 
Navigationsleiste am oberen Rand jeder Seite.

**Inhalt:**
- Logo (links)
- Navigation Links: About Me | Resume | Projects

**Begründung:**
- Konsistente Navigation auf allen 6 Seiten
- Wiederverwendbar
- Ermöglicht schnellen Wechsel zwischen Hauptbereichen

---

#### [2] TitleSection
**Datei:** `components/TitleSection.tsx`

**Beschreibung:**
Titel-Bereich unter dem Header.

**Props:**
- `title`: string - Seitentitel

**Begründung:**
- Einheitliche Titeldarstellung auf allen Seiten
- Wiederverwendbar

---

### 2.2 Card-Komponenten

#### [4] PictureCard
**Datei:** `components/PictureCard.tsx`

**Beschreibung:**
Große Bild-Karte mit Beschreibung für Featured Works.

**Props:**
- `image`: string - Bild-URL
- `title`: string - Titel
- `description`: string - Beschreibungstext
- `href`: string - Link zur Detail-Seite

**Begründung:**
- Verwendet auf Landing Page für Featured Works
- Kombiniert Bild und Text
- Klickbar für Navigation zu Details

---

#### [10] PicCard
**Datei:** `components/PicCard.tsx`

**Beschreibung:**
Kleinere Bild-Karte für Related Items und stacked Content.

**Props:**
- `image`: string - Bild-URL
- `title`: string - Optional
- `href`: string - Link

**Begründung:**
- Verwendet in Detail-Seiten (Seite 2, 3)
- Kompaktere Darstellung
- Für vertikale Listen

---

#### [13] ThumbnailCard
**Datei:** `components/ThumbnailCard.tsx`

**Beschreibung:**
Rechteckige Thumbnail-Karte für Gallery Grids.

**Props:**
- `image`: string - Bild-URL
- `href`: string - Link zur Detail-Ansicht

**Begründung:**
- Verwendet in Gallery Overview (Seite 4, 5)
- Optimiert für Grid-Layouts
- Nur Bild, kein Text

---

#### [16] SquareCard
**Datei:** `components/SquareCard.tsx`

**Beschreibung:**
Quadratische Karte für Kategorie-Grid.

**Props:**
- `image`: string - Bild-URL
- `title`: string - Kategorie-Name
- `href`: string - Link

**Begründung:**
- Verwendet auf Kategorie-Seite (Seite 6)
- Quadratisches Format
- Einheitliches Raster

---

### 2.3 Section-Komponenten

#### [3] FeaturedSection
**Datei:** `components/FeaturedSection.tsx`

**Beschreibung:**
Grid-Layout für Featured Works auf der Landing Page.

**Props:**
- `items`: Array von PictureCard-Daten

**Begründung:**
- Organisiert PictureCards in Grid
- Spezifisch für Landing Page

---

#### [5] TextSection
**Datei:** `components/TextSection.tsx`

**Beschreibung:**
Text-Block für Beschreibungen.

**Props:**
- `content`: string - Text-Inhalt

**Begründung:**
- Wiederverwendbar für About-Texte
- Einfache Text-Darstellung

---

#### [6] MainContent
**Datei:** `components/MainContent.tsx`

**Beschreibung:**
Zwei-Spalten Layout für Detail-Seiten (Bild + Text).

**Props:**
- `image`: string - Hauptbild
- `content`: ReactNode - Text-Content

**Begründung:**
- Spezifisch für Detail-Seiten (Seite 2)
- Side-by-side Layout

---

#### [9] RelatedItems
**Datei:** `components/RelatedItems.tsx`

**Beschreibung:**
Vertikale Liste von Related Items mit Pic Cards.

**Props:**
- `items`: Array von PicCard-Daten

**Begründung:**
- Verwendet auf Detail-Seite (Seite 2)
- Zeigt verwandte Projekte

---

#### [11] StackedContent
**Datei:** `components/StackedContent.tsx`

**Beschreibung:**
Abwechselnde Bilder und Text-Blöcke vertikal gestapelt.

**Props:**
- `blocks`: Array von {type: 'image' | 'text', content: string}

**Begründung:**
- Verwendet auf Detail Variant (Seite 3)
- Flexible Inhaltsdarstellung

---

#### [12] GalleryGrid
**Datei:** `components/GalleryGrid.tsx`

**Beschreibung:**
4-Spalten Grid für Thumbnail-Karten.

**Props:**
- `items`: Array von ThumbnailCard-Daten
- `columns`: number (default: 4)

**Begründung:**
- Verwendet auf Gallery Seiten (Seite 4)
- Konfigurierbare Spaltenanzahl

---

#### [14] DenseGrid
**Datei:** `components/DenseGrid.tsx`

**Beschreibung:**
Kompaktes Grid mit vielen kleinen Thumbnails (7+ Spalten).

**Props:**
- `items`: Array von Thumbnail-Daten

**Begründung:**
- Verwendet auf Gallery Variant (Seite 5)
- Maximale Übersicht

---

#### [15] SquareGrid
**Datei:** `components/SquareGrid.tsx`

**Beschreibung:**
Grid für quadratische Kategorie-Karten.

**Props:**
- `items`: Array von SquareCard-Daten

**Begründung:**
- Verwendet auf Kategorie-Seite (Seite 6)
- Einheitliches quadratisches Layout

---

## 3. Datenstrukturen

### PictureCard-Daten
```typescript
interface PictureCardData {
  id: string;
  image: string;
  title: string;
  description: string;
  href: string;
}
```

### PicCard-Daten
```typescript
interface PicCardData {
  id: string;
  image: string;
  title?: string;
  href: string;
}
```

### ThumbnailCard-Daten
```typescript
interface ThumbnailData {
  id: string;
  image: string;
  href: string;
}
```

### SquareCard-Daten
```typescript
interface SquareCardData {
  id: string;
  image: string;
  title: string;
  href: string;
}
```

### StackedBlock
```typescript
interface StackedBlock {
  type: 'image' | 'text';
  content: string;
}
```

---

## 4. Ordnerstruktur

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Seite 1: Home (Landing Page)
│   │   ├── layout.tsx            # Root Layout mit Header
│   │   ├── globals.css
│   │   ├── about/
│   │   │   └── page.tsx          # Seite 2: About Me
│   │   ├── resume/
│   │   │   └── page.tsx          # Seite 4: Resume
│   │   ├── projects/
│   │   │   └── page.tsx          # Seite 6: Projects (Übersicht)
│   │   └── project/
│   │       ├── 1/
│   │       │   └── page.tsx      # Seite 3: Project 1
│   │       ├── 2/
│   │       │   └── page.tsx      # Seite 5: Project 2
│   │       └── 3/
│   │           └── page.tsx      # Seite 7: Project 3
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── TitleSection.tsx
│   │   ├── cards/
│   │   │   ├── PictureCard.tsx
│   │   │   ├── PicCard.tsx
│   │   │   ├── ThumbnailCard.tsx
│   │   │   └── SquareCard.tsx
│   │   └── sections/
│   │       ├── FeaturedSection.tsx
│   │       ├── TextSection.tsx
│   │       ├── MainContent.tsx
│   │       ├── RelatedItems.tsx
│   │       ├── StackedContent.tsx
│   │       ├── GalleryGrid.tsx
│   │       ├── DenseGrid.tsx
│   │       └── SquareGrid.tsx
│   ├── types/
│   │   └── index.ts
│   └── data/
│       └── projects.ts
├── public/
│   └── images/
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

---

## 5. Zusammenfassung der Komponenten

| Komponente      | Typ     | Reuse | Seiten                              |
|-----------------|---------|-------|-------------------------------------|
| Header          | Layout  | ✅    | Alle 7 Seiten                       |
| TitleSection    | Layout  | ✅    | Alle 7 Seiten                       |
| PictureCard     | Card    | ✅    | Home, Projects                      |
| PicCard         | Card    | ✅    | About Me, Project 1/2/3             |
| ThumbnailCard   | Card    | ✅    | Projects, Resume                    |
| SquareCard      | Card    | ✅    | Projects                            |
| FeaturedSection | Section | ❌    | Home                                |
| TextSection     | Section | ✅    | Home, About Me, Project 1/2/3       |
| MainContent     | Section | ❌    | About Me                            |
| RelatedItems    | Section | ❌    | Project 1/2/3                       |
| StackedContent  | Section | ❌    | Project 1/2/3                       |
| GalleryGrid     | Section | ✅    | Projects                            |
| DenseGrid       | Section | ✅    | Resume                              |
| SquareGrid      | Section | ✅    | Projects                            |

---

## 6. Technologie-Stack

- **Framework:** Next.js 14+ mit App Router
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Bilder:** Next.js Image Optimization
- **Deployment:** Vercel

---

## 7. Feedback aus dem Praktikum

**Feedback:**
- Grundlegende Struktur und Komponentenaufteilung sind gut durchdacht.
- Komponenten sollten klar im Wireframe makiert werden.

**Änderungen basierend auf Feedback:**
- Wireframes überarbeitet mit klaren Komponentenmarkierungen.

---

## 8. Wireframe Farbcode

- **Blue:** - Header/Navbar
- **Red:** - TitleSection
- **Green:** - Section components (FeaturedSection, TextSection, MainContent, ...)
- **Yellow:** - Card components (PictureCard, ThumbnailCard, SquareCard, ...)
- **Purple:** - Image placeholders
- **Fuchsia:** - Buttons

---
