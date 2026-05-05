---
title: "Modul 1.3: Track-Wahl & Lern-Methodik"
module: "1.3"
type: index
fast_track: true
effort: "3-4h"
---

# Modul 1.3: Track-Wahl & Lern-Methodik

Dieses Curriculum hat **drei Track-Tiefen** (Engineer, Foundations, Strategist) und eine **Meister-Variante** (alle drei). Die Wahl ist nicht verbindlich — Wechsel sind erlaubt — aber bewusst zu treffen, ist wichtig: sie bestimmt deine Modul-Tiefen, deinen Capstone, deinen Zeitaufwand. Zusätzlich erlebst du am Ende des Moduls einen Vorgeschmack-Demo-Block (RAG + MCP + Eval) — drei vorbereitete Demos zum Klonen und Laufenlassen, damit du *siehst*, wohin du in Stufen 5-6 selbst kommst.

**Aufwand:** 🔧 3-4h · 🧮 3-4h · 💼 3-4h  
**Voraussetzungen:** Modul 1.2 (Portfolio aktiv)

## Lernziel

Track ist begründet gewählt und im Portfolio dokumentiert. Lern-Plan für die ersten 8 Wochen ist skizziert. Du hast einmal eine RAG-Anwendung, einen MCP-Server und eine Eval-Pipeline in Aktion gesehen — ohne sie selbst gebaut zu haben.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Drei Tracks, vier Möglichkeiten](theorie/drei-tracks.md) | ✅ | 10 min |
| 2 | [Track-Wahl ist nicht final](theorie/track-wahl-flexibilitaet.md) | ⏭️ | 5 min |
| 3 | [Realistische Zeit-Erwartungen](theorie/zeit-erwartungen.md) | ✅ | 10 min |
| 4 | [Lern-Methodik des Curriculums](theorie/lern-methodik.md) | ✅ | 10 min |
| 5 | [Querschnitte erklärt](theorie/querschnitte-erklaert.md) | ⏭️ | 5 min |
| 6 | [Capstone erklärt](theorie/capstone-erklaert.md) | ✅ | 10 min |
| 7 | [Outcome-Rubrik pro Track](theorie/outcome-rubrik.md) | ⏭️ | 5 min |
| 8 | [Lernroutinen & Methoden](theorie/lernroutinen.md) | ⏭️ | 10 min |

## Praxis: Track-Wahl + Lern-Plan + Vorgeschmack-Demo

### Teil 1 — Track-Wahl + Lern-Plan (1-2h)

- Datei `stufe-1_onboarding/track-wahl.md` schreiben mit:
    - Welcher Track? (🔧 / 🧮 / 💼 / 🥇)
    - Warum dieser Track? (3-5 ehrliche Sätze)
    - Konkretes Karriere-Ziel in 12-18 Monaten?
    - Vorerfahrung?
    - Zeit pro Woche?
    - Welcher Capstone wird Hauptprojekt?
    - Outcome-Rubrik deines Tracks lesen (`000_master.md`) und 1-2 Outcomes als persönliches Zwischenziel markieren.
- Datei `stufe-1_onboarding/lern-plan.md` für die ersten 8 Wochen skizzieren (Tabelle: Woche / Modul / geplante Stunden / Status).
- Portfolio-README aktualisieren: Track + Capstone-Platzhalter eintragen.
- Alles committen.

### Teil 2 — Vorgeschmack-Demo (2-3h)

Drei vorbereitete Demos zum Klonen und Laufenlassen. **Du musst sie nicht verstehen oder erweitern.** Ziel ist ausschließlich, dass du *siehst*, wie sich RAG, MCP und Eval anfühlen.

**Demo 1 — RAG (~45 Min):**

- Klone: [LangChain RAG Tutorial](https://github.com/langchain-ai/rag-from-scratch) oder [LlamaIndex Quickstart](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/)
- Folge dem Quickstart-Notebook: PDFs in Vector-Store laden, Frage stellen, Antwort mit Quellen-Verweis.
- **Was du erleben sollst:** Der Unterschied zwischen "LLM rät" und "LLM antwortet auf Basis deiner Dokumente".
- **Was du NICHT tun sollst:** Den Code verstehen oder modifizieren.

**Demo 2 — MCP (~45 Min):**

- Klone einen offiziellen MCP-Server: [MCP Quickstart](https://modelcontextprotocol.io/quickstart) — wähle "Filesystem"-Server oder "GitHub"-Server.
- Verbinde ihn mit Claude Desktop oder einem MCP-Client.
- Stelle eine Frage, die den Server nutzt.
- **Was du erleben sollst:** Wie ein LLM auf Basis eines Tool-Servers Echtweltzugriffe macht.

**Demo 3 — Eval (~45 Min):**

- Klone: [Promptfoo Quickstart](https://www.promptfoo.dev/docs/getting-started/) oder [DeepEval Quickstart](https://docs.confident-ai.com/docs/getting-started)
- Zwei verschiedene Prompts auf 5-10 Test-Cases laufen lassen, automatischen Vergleich sehen.
- **Was du erleben sollst:** Der Unterschied zwischen "ich hoffe, mein Prompt funktioniert" und "ich messe es".

**Reflektion (~30 Min):**

Schreibe in `stufe-1_onboarding/vorgeschmack-reflektion.md`:

- Welche der drei Demos hat dich am meisten beeindruckt? Warum?
- Welcher Use-Case in deinem eigenen Kontext wäre eine offensichtliche Anwendung?
- Was hast du nicht verstanden? *(Das ist okay — Stufen 2-6 erklären alles.)*

**Wichtig:** Wenn eine Demo nicht läuft, mach trotzdem weiter mit den anderen. Kein Demo-Failure ist ein Stufen-1-Blocker.

**Quellen Vorgeschmack-Demo:**

- [Model Context Protocol Quickstart](https://modelcontextprotocol.io/quickstart)
- [LangChain RAG From Scratch](https://github.com/langchain-ai/rag-from-scratch)
- [LlamaIndex Starter Example](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/)
- [Promptfoo Getting Started](https://www.promptfoo.dev/docs/getting-started/)
- [DeepEval Documentation](https://docs.confident-ai.com)

## 🎁 Mehrwert-Mini-Projekt

**Lern-Tagebuch** als `LERN_TAGEBUCH.md` im Repo-Root. Pro Lern-Session 2-3 Sätze: Was gelernt? Was überrascht? Wo gehadert? Wert: in 6 Monaten erkennst du Hadern-Muster und siehst, wie weit du gekommen bist.

## 🌱 Open-Source-Pfad

Track-Wahl ist tool-unabhängig — kein OSS-Pfad nötig.

**Vorgeschmack-Demos im OSS-Modus:** Alle drei Demos lassen sich rein OSS durchführen — Demo 1 mit Ollama statt Cloud-API (etwas langsamer), Demo 2 mit beliebigem MCP-Client, Demo 3 mit Promptfoo + Ollama-Backend. Wenn du den vollen OSS-Weg gehst, dauert die Demo-Phase 30-60 Min länger.

## Outcome-Check

- [ ] `track-wahl.md` mit klarer Begründung im Portfolio
- [ ] `lern-plan.md` für 8 Wochen skizziert
- [ ] Portfolio-README zeigt Track und Capstone-Platzhalter
- [ ] Outcome-Rubrik des gewählten Tracks gelesen, 1-2 Zwischenziele markiert
- [ ] Vorgeschmack-Demo: mindestens 2 von 3 Demos einmal erfolgreich gelaufen
- [ ] `vorgeschmack-reflektion.md` mit kurzer Notiz im Portfolio
- [ ] Optional: `LERN_TAGEBUCH.md` mit erstem Eintrag
