---
title: "Memory-Architekturen"
module: "6.0"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Memory-Architekturen

## Kernidee

Nicht jedes Wissen hat dieselbe Zeitskala. Session-Kontext, Benutzer-Präferenzen und organisationsweites Wissen sind drei verschiedene Schichten mit verschiedenen Speicher- und Retrieval-Anforderungen. Wer alle drei in einen einzigen Context-Window-Blob wirft, verliert Effizienz und Übersicht.

## Im Detail

**Drei Zeitskalen für Memory:**

**Kurzfristig (Session-Memory)**
- Aktuelle Konversation, Compaction-Buffer.
- Lebt im Context-Window oder in einem temporären File.
- Wird nach Session gelöscht oder zu Mittelfristig komprimiert.
- Typische Implementierung: in-memory Liste, LRU-Buffer.

**Mittelfristig (User-/Projekt-Profil)**
- Persistente Präferenzen, Domain-Vokabular, Brand-Voice, Decisions-Log.
- Typisch als File (CLAUDE.md-Pattern) oder als Memory-Framework (Letta).
- Wird pro User oder Projekt gepflegt, evolviert über Wochen.
- Cross-Session: bleibt zwischen Sitzungen erhalten.

**Langfristig (organisationsweit)**
- Geteiltes Wissen, geteilte Skills, geteilte Decisions-Logs.
- Vektordatenbank oder Knowledge-Graph.
- Zugriffssteuerung: wer darf lesen, wer schreiben?
- Brücke zu Modul 6.7 (Agentic OS): persistente Memory-Schicht ist Kern eines Agentic OS.

**Praktische Frage für deine App:** Welche der drei Zeitskalen ist für deinen Use-Case relevant? Skizziere, welche Daten auf welcher Schicht leben.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Framework | [Letta (vormals MemGPT)](https://letta.com) | OSS, strukturierte Memory-Schichten |
| 📖 Pattern | [CLAUDE.md-Pattern](https://www.mindstudio.ai/blog/agentic-os-architecture-claude-code-business-brain) | Mittelfristiges Memory als Markdown |

## Teste dein Verständnis

- [ ] Kannst du die drei Memory-Zeitskalen mit je einem konkreten Beispiel belegen?
- [ ] Welche Zeitskala ist für deinen Capstone-Agent relevant?
- [ ] Wie unterscheidet sich CLAUDE.md als Memory-Pattern von einer Vektordatenbank?
