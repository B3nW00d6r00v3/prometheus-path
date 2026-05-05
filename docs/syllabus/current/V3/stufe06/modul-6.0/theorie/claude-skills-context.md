---
title: "Claude Skills als Context-Engineering-Pattern"
module: "6.0"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Claude Skills als Context-Engineering-Pattern

## Kernidee

Claude Skills laden bei Bedarf zusätzlichen Context (Markdown + Code + Templates) — nicht permanent für jeden Run. Description-Engineering steuert, wann eine Skill geladen wird. Das ist das Lazy-Loading-Prinzip für Context-Inhalte: nur laden, was gerade gebraucht wird.

## Im Detail

**Was sind Claude Skills?**  
Skills sind Markdown-Files mit strukturierten Anweisungen, Code-Snippets und Templates, die ein Agent bei Bedarf lädt. Im Gegensatz zu fest im System-Prompt eingebetteten Anweisungen werden Skills on-demand geladen — nur wenn die Aufgabe es erfordert.

**Description-Engineering als Steuermechanismus:**  
Wie der Agent entscheidet, welche Skill zu laden ist: durch die `description`-Felder in den Skill-Metadaten. Schlechte Description → Skill wird nie geladen oder immer falsch ausgelöst. Gute Description → präzises, situationsabhängiges Laden.

**Context-Engineering-Perspektive:**  
Skills sind ein Lösungsansatz für Antipattern (5) aus der vorherigen Lektion (Skills naiv geladen). Statt alle Skills permanent im System-Prompt zu haben, Discovery + Lazy-Load reduziert den Baseline-Context-Verbrauch erheblich.

**Brücke zu Modul 6.4:** Claude Agent SDK unterstützt Skills nativ — Discovery und Laden werden automatisiert.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Claude Agent SDK — Skills Integration](https://docs.claude.com/en/api/agent-sdk) | SDK-native Skills |
| 📖 Vertiefung | [Modul 5.6: Skills-Pattern](../../modul-5.6/index.md) | Ausführliche Behandlung von Skills |

## Teste dein Verständnis

- [ ] Wie unterscheiden sich Skills von fest eingebetteten System-Prompt-Anweisungen?
- [ ] Was ist Description-Engineering, und warum ist es entscheidend für Skill-Quality?
- [ ] Wie reduzieren Skills den Baseline-Context-Verbrauch?
