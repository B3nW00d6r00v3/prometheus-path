---
title: "Vibe-Coding-Patterns"
module: "2.6"
type: theorie
fast_track: false
effort: "15min"
stability: live
expires: null
---

# Vibe-Coding-Patterns

## Kernidee

Vibe-Coding funktioniert wie ein Gespräch mit einem Architekten: "Baue mir ein Haus" klappt nicht, aber "Baue mir ein zweistöckiges Haus, Erdgeschoss offen, Küche links, Bad oben rechts" klappt hervorragend. Präzise Beschreibungen, ein Feature pro Iteration, klare Stack-Vorgaben -- das sind die Patterns, die funktionieren. Die Qualität deiner App hängt direkt von der Qualität deiner Beschreibungen ab.

## Im Detail

### Pattern 1: Präzise Erstbeschreibung

Der erste Prompt entscheidet über die Grundstruktur deiner App. Je präziser, desto besser.

**Schlecht:**

```
Mach mir eine App für meine Notizen.
```

Das Ergebnis: eine generische Notiz-App ohne klare Struktur, die dir nicht wirklich hilft.

**Gut:**

```
Erstelle eine Notiz-App mit folgenden Features:
- Dunkles Theme (Hintergrund #1a1a2e, Akzentfarbe #e94560)
- Startseite zeigt alle Notizen als Karten-Grid
- Jede Karte zeigt Titel, die ersten 2 Zeilen, und Erstellungsdatum
- Klick auf Karte öffnet Editor mit Markdown-Unterstützung
- Oben rechts ein "+" Button für neue Notiz
- Suche über alle Notizen per Suchleiste oben
- Stack: React + Tailwind CSS
- Daten im localStorage (kein Backend)
```

Das Ergebnis: eine App, die sofort nutzbar ist und deiner Vorstellung entspricht.

**Die Formel für den Erstprompt:**

1. **Was** soll die App tun? (Hauptfunktion)
2. **Wie** soll sie aussehen? (Design-Vorgaben)
3. **Welche** Features braucht sie? (Konkretes Feature-Liste)
4. **Welcher** Stack? (React, Tailwind, etc.)
5. **Wo** werden Daten gespeichert? (localStorage, Supabase, etc.)

### Pattern 2: Ein Feature pro Iteration

Nachdem die Grundstruktur steht, fügst du Features Schritt für Schritt hinzu. Jede Iteration hat genau eine klare Änderung.

**Schlecht:**

```
Füge jetzt Tagging, Favoriten, Export, Sortierung und Dark/Light-Mode-Toggle hinzu.
```

Zu viel auf einmal. Das Tool wird verwirrt, Features interferieren, das Ergebnis ist chaotisch.

**Gut -- Iteration 1:**

```
Füge eine Tag-Funktion hinzu: Jede Notiz kann 1-5 Tags haben.
Tags werden als farbige Chips unter dem Titel angezeigt.
Neuer Filter-Bereich links, der alle Tags auflistet.
Klick auf einen Tag filtert die Notizen.
```

**Gut -- Iteration 2:**

```
Füge eine Favoriten-Funktion hinzu: Jede Karte hat ein Stern-Icon
oben rechts. Klick togglet Favorit. Neuer Tab "Favoriten" zeigt
nur favorisierte Notizen.
```

**Die Regel:** Eine Iteration = ein testbares Feature. Teste nach jeder Iteration, bevor du weitermachst.

### Pattern 3: Stack und Design vorgeben

Ohne explizite Vorgaben wählt das Tool einen zufälligen Stack und ein generisches Design. Das führt zu Inkonsistenz.

**Vorgaben, die sich lohnen:**

- **Framework:** "Nutze React mit Tailwind CSS" oder "Vue.js mit DaisyUI"
- **Farben:** "Hintergrund #1a1a2e, Akzent #e94560, Text #ffffff"
- **Fonts:** "Nutze Inter als Hauptfont"
- **Layout:** "Mobile-first, responsive, Cards statt Listen"
- **Stil-Referenz:** "Aussehen wie Linear.app" oder "wie Notion, aber dunkler"

### Pattern 4: Screenshots und Referenzen nutzen

Viele Vibe-Coding-Tools (Bolt, Lovable, v0) akzeptieren Bilder als Input. Statt eine UI zu beschreiben, zeig sie.

**Effektive Referenzen:**

- Screenshot einer App, die dir gefällt: "Baue etwas, das so aussieht"
- Wireframe-Skizze (auch handgezeichnet): "Setze dieses Layout um"
- Figma-Export: "Implementiere dieses Design in React"

### Pattern 5: Fehler gezielt beschreiben

Wenn etwas nicht funktioniert, beschreibe den Fehler so präzise wie möglich.

**Schlecht:**

```
Das funktioniert nicht, fix es.
```

**Gut:**

```
Wenn ich auf "Speichern" klicke, passiert nichts.
Der Button sollte die Notiz in localStorage speichern
und zurück zur Übersicht navigieren.
Im Browser-Console sehe ich: "TypeError: Cannot read
property 'save' of undefined".
```

Je mehr Kontext du gibst (erwartetes Verhalten, tatsächliches Verhalten, Fehlermeldung), desto besser das Fix.

### Pattern 6: Architektur-Entscheidungen explizit machen

Für komplexere Apps lohnt es sich, Architektur-Entscheidungen vorzugeben, statt sie dem Tool zu überlassen.

**Beispiel:**

```
Trenne die App in folgende Bereiche:
- /components für wiederverwendbare UI-Komponenten
- /hooks für Custom Hooks (useNotes, useTags)
- /utils für Hilfsfunktionen
- /types für TypeScript-Interfaces
- State Management über React Context, kein Redux
```

### Anti-Patterns: Was nicht funktioniert

| Anti-Pattern | Warum es scheitert | Besser |
|-------------|-------------------|--------|
| "Mach eine coole App" | Zu vage, generisches Ergebnis | Konkretes Feature + Design beschreiben |
| Alles auf einmal | Tool verliert den Überblick | Ein Feature pro Iteration |
| Kein Stack angeben | Inkonsistente Technologie-Wahl | Stack im ersten Prompt definieren |
| "Fix alle Bugs" | Zu unspezifisch | Einen Bug mit Kontext beschreiben |
| Produktions-Reife erwarten | Vibe-Coding = Prototyp, nicht Production | Code-Review vor Deployment |
| Ohne Testen iterieren | Fehler schleppen sich durch | Nach jeder Iteration testen |

### Wann Vibe-Coding aufhört

Vibe-Coding hat Grenzen. Erkenne sie rechtzeitig:

- **Komplexe State-Logik:** Wenn du verschachtelte State-Updates, Race Conditions oder Cache-Invalidierung brauchst
- **Performance-Optimierung:** Wenn die App langsam wird und du spezifische Optimierungen brauchst
- **Sicherheit:** Auth-Systeme, Input-Sanitization, CSRF-Schutz -- hier brauchst du Fachwissen
- **Wartbarkeit:** Vibe-Coding-Code ist oft "write-only" -- schwer zu lesen, schwer zu ändern ohne das Tool
- **Tests:** Automatisierte Tests für Vibe-Coding-Output zu schreiben ist aufwändig

Ab diesem Punkt wechselst du zu einem Coding-Assistenten (Cursor, Claude Code) oder schreibst selbst Code -- Thema in Stufe 4.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Bolt.new](https://bolt.new) | Zum Ausprobieren der Patterns |
| :hammer_and_wrench: | [Lovable](https://lovable.dev) | Alternative zum Vergleichen |
| :hammer_and_wrench: | [v0.dev](https://v0.dev) | UI-Komponenten per Prompt |
| :book: | [Addy Osmani -- Vibe Coding Best Practices](https://addyosmani.com/blog/vibe-coding/) | Ausführlicher Guide zu Vibe-Coding-Patterns |

## Teste dein Verständnis

- [ ] Schreibe einen Erstprompt für eine App deiner Wahl -- nutze die 5-Punkte-Formel (Was, Wie, Welche Features, Stack, Datenspeicherung).
- [ ] Baue eine einfache App und iteriere dreimal mit je einem Feature. Halte dich an die "Ein Feature pro Iteration"-Regel.
- [ ] Wann solltest du von Vibe-Coding zu echtem Code wechseln? Nenne drei Anzeichen.
