---
title: "Coding-Assistenten"
module: "2.2"
type: theorie
fast_track: false
effort: "20min"
stability: live
expires: "2026-11"
---

# Coding-Assistenten

## Kernidee

Ein Coding-Assistent ist 2026 fuer Software-Entwickler das, was Autokorrektur fuer Texte ist -- nur auf Steroiden. Das Modell versteht deinen Code, schlaegt Vervollstaendigungen vor, schreibt ganze Funktionen und kann Multi-File-Refactorings durchfuehren. Die Kernfrage ist nicht "ob", sondern "welcher Workflow passt zu dir": IDE-native (Cursor, Copilot), Terminal-first (Claude Code, Aider), oder Open Source (Continue, Cline).

## Im Detail

### Ueberblick: Die wichtigsten Tools

| Tool | Anbieter | Kern-Features | Pricing | Best for |
|------|----------|---------------|---------|----------|
| Cursor | Anysphere | VS Code Fork, Tab-Completion, Composer, Codebase-Awareness | Free / $20/Monat Pro | IDE-Power-User |
| Claude Code | Anthropic | CLI, agentic, ganzes Repo lesen, Tests ausfuehren | Per-Token (Claude API) | Terminal-Workflow |
| GitHub Copilot | Microsoft/GitHub | IDE-Integration, Chat, Code Review, Workspace | Free / $10/Monat Pro | Bestehende IDE behalten |
| Windsurf | Codeium | Cascade Agent, Flow-basiert, KI-native IDE | Free / $15/Monat Pro | Flow-basiertes Arbeiten |
| Continue | Continue.dev | OSS, VS Code + JetBrains, Ollama-Integration | Kostenlos (OSS) | Vendor-unabhaengig |
| Cline | Community | OSS, VS Code, autonomer Agent, Browser-Interaktion | Kostenlos (OSS) + API-Kosten | Autonome Agenten im Editor |
| Aider | Paul Gauthier | Terminal, Git-aware, Multi-File, OSS | Kostenlos (OSS) + API-Kosten | Git-zentrierter Workflow |

### Cursor -- Die KI-native IDE

**Was es kann:**

- VS Code Fork mit nativer KI-Integration -- alle VS Code Extensions funktionieren
- Tab-Completion: kontextbewusste Vorschlaege beim Tippen (besser als Copilot-Completion)
- Composer: Multi-File-Editing in einem Schritt ("aendere die API und alle Tests")
- Codebase-Awareness: @-Symbole referenzieren Dateien, Funktionen, Docs
- Rules-Files (.cursorrules): projektspezifische Anweisungen fuer das Modell
- Unterstuetzt Claude, GPT-4o, und eigene Modelle

**Use Cases:**

- Taegliches Coding mit maximaler KI-Unterstuetzung direkt in der IDE
- Grosse Refactorings ueber mehrere Dateien hinweg
- Schnelles Prototyping mit kontextbewussten Vorschlaegen

**Limitation:** Proprietaer, Vendor-Lock-in. Bei hoher Nutzung koennen die Premium-Anfragen schnell aufgebraucht sein.

### Claude Code -- Der Terminal-Agent

**Was es kann:**

- CLI-Tool: laeuft direkt im Terminal, keine IDE noetig
- Agentic: liest selbststaendig Dateien, navigiert die Codebase, fuehrt Befehle aus
- Versteht das gesamte Repository -- nicht nur die offene Datei
- Fuehrt Tests aus, prueft ob Aenderungen funktionieren
- Multi-File-Refactoring mit automatischem Git-Commit
- Per-Token-Abrechnung ueber Anthropic API (kein Abo-Zwang)

**Use Cases:**

- Komplexe Refactorings ("benenne dieses Interface um und passe alle Aufrufer an")
- Bug-Fixing: "finde und fixe den Fehler in den Tests"
- Code-Reviews und Architektur-Entscheidungen
- CI/CD-Integration fuer automatisierte Code-Aufgaben

**Limitation:** Kein visuelles Interface -- du siehst keinen Diff-View wie in einer IDE. Token-Kosten koennen bei grossen Repos hoch werden.

### GitHub Copilot -- Der Klassiker

**Was es kann:**

- Integration in VS Code, JetBrains, Neovim, und weitere IDEs
- Copilot Chat: Fragen zum Code direkt im Editor stellen
- Code Review: automatische PR-Reviews
- Workspace: versteht den gesamten Workspace-Kontext
- $10/Monat -- guenstigstes Paid-Angebot am Markt

**Use Cases:**

- Auto-Completion beim taeglichen Coding
- Schnelle Fragen zum bestehenden Code ("was macht diese Funktion?")
- Code-Reviews in GitHub-PRs automatisieren

**Limitation:** Weniger "agentic" als Cursor oder Claude Code. Fuehrt keine selbststaendigen Aktionen aus, sondern schlaegt vor.

### Windsurf -- Der Flow-Agent

**Was es kann:**

- KI-native IDE (Codeium) mit eigenem Cascade-Agent
- Flow-basiertes Arbeiten: der Agent plant und fuehrt mehrstufige Aufgaben aus
- Versteht Projekt-Kontext und beruecksichtigt vorherige Aktionen
- Wettbewerber zu Cursor mit eigenem Ansatz

**Use Cases:**

- Mehrstufige Aufgaben ("erstelle eine REST-API mit Tests und Dokumentation")
- Teams, die ein alternatives IDE-Oekosystem zu Cursor suchen

**Limitation:** Juengeres Oekosystem als Cursor. Noch weniger Community-Ressourcen und Tutorials.

### Continue -- OSS und vendor-unabhaengig

**Was es kann:**

- Open-Source VS Code und JetBrains Extension
- Unterstuetzt Ollama fuer komplett lokale KI (kein API-Key noetig)
- Funktioniert mit jedem LLM-Anbieter (OpenAI, Anthropic, lokale Modelle)
- Tab-Completion und Chat-Interface

**Use Cases:**

- Lokale KI-Nutzung ohne Cloud-Abhaengigkeit
- Unternehmen mit strengen Datenschutz-Anforderungen (DSGVO)
- Entwickler, die ihre bestehende IDE + eigene Modelle nutzen wollen

**Limitation:** Qualitaet abhaengig vom verwendeten Modell. Mit kleinen lokalen Modellen deutlich schwaecher als Cursor mit Claude.

### Cline -- Der autonome Agent

**Was es kann:**

- Open-Source VS Code Extension
- Autonomer Agent: plant Aufgaben, erstellt Dateien, fuehrt Terminal-Befehle aus
- Browser-Interaktion: kann Webseiten oeffnen und testen
- Verwendet beliebige LLM-APIs (du zahlst nur Token-Kosten)

**Use Cases:**

- Komplexe Aufgaben autonom erledigen lassen ("baue einen Login-Flow")
- End-to-End-Prototyping mit Browser-Testing
- Experimentieren mit verschiedenen LLMs

**Limitation:** API-Kosten koennen bei autonomem Arbeiten schnell steigen (viele Tokens pro Aufgabe). Weniger kontrolliert als manuelle Completion.

### Aider -- Der Git-Native

**Was es kann:**

- Terminal-basiert, reiner Text-Workflow
- Git-aware: macht automatisch Commits fuer jede Aenderung
- Multi-File-Editing mit Diff-basiertem Ansatz
- Open Source, funktioniert mit vielen LLM-Anbietern
- Architect-Modus fuer groessere Planungsaufgaben

**Use Cases:**

- Entwickler, die im Terminal leben und keine IDE brauchen
- Saubere Git-History: jede KI-Aenderung ist ein eigener Commit
- Pair-Programming-Stil im Terminal

**Limitation:** Kein visuelles Interface. Lernkurve fuer Nicht-Terminal-Nutzer. Bei sehr grossen Projekten kann die Kontext-Verwaltung schwierig werden.

### Wann welches Tool?

- **IDE-Fan, will maximale KI-Power:** Cursor -- KI-native IDE mit bestem Composer
- **Terminal-Workflow, grosse Codebases:** Claude Code -- agentic, versteht das ganze Repo
- **Bestehende IDE behalten, Budget:** GitHub Copilot -- $10/Monat, funktioniert ueberall
- **Vendor-unabhaengig, lokale Modelle:** Continue + Ollama -- komplett OSS, kein Vendor-Lock-in
- **Maximale Autonomie im Editor:** Cline -- autonomer Agent, plant und fuehrt aus

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ | [Cursor](https://cursor.com) | KI-native IDE (VS Code Fork) |
| 🛠️ | [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) | Terminal-basierter Coding-Agent |
| 🛠️ | [GitHub Copilot](https://github.com/features/copilot) | IDE-integrierter Assistent |
| 🛠️ | [Windsurf](https://windsurf.com) | KI-IDE mit Cascade-Agent |
| 🛠️ | [Continue](https://continue.dev) | OSS VS Code + JetBrains Extension |
| 🛠️ | [Cline](https://github.com/cline/cline) | OSS autonomer Agent im Editor |
| 🛠️ | [Aider](https://aider.chat) | OSS Terminal-Tool, Git-aware |

## Teste dein Verstaendnis

- [ ] Installiere mindestens einen Coding-Assistenten und lasse ihn eine Funktion schreiben. Wie gut versteht er den Kontext deines Projekts?
- [ ] Vergleiche Tab-Completion (Cursor/Copilot) mit agentic Coding (Claude Code/Cline) -- welcher Workflow passt besser zu dir?
- [ ] Pruefe: Koenntest du mit Continue + Ollama komplett lokal und ohne Cloud arbeiten? Was wuerden die Trade-offs sein?
