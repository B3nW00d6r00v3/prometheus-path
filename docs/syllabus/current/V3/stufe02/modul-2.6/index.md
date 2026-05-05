---
title: "Modul 2.6: No-Code & Vibe-Coding"
module: "2.6"
type: index
fast_track: true
effort: "8-10h"
---

# Modul 2.6: No-Code & Vibe-Coding

Bevor du Python lernst, **baust du etwas Sichtbares**. No-Code-Plattformen (Make.com, n8n) und Vibe-Coding-Tools (Bolt, Lovable, v0) erlauben dir, in Stunden statt Wochen funktionierende KI-Workflows und Web-Apps zu produzieren. Das ist nicht Spielerei -- es ist 2026 ein eigenstaendiger professioneller Skill fuer schnelle Prototypen, MVPs und Workflow-Automatisierung. Wer No-Code beherrscht, kann spaeter bewusst entscheiden, wann Code noetig wird (was in Modul 2.7 motiviert wird).

**Aufwand:** 8-10h  
**Voraussetzungen:** Module 2.1-2.5

## Lernziel

Du hast einen lauffaehigen No-Code-KI-Workflow gebaut, der dir taeglich Arbeit abnimmt, und eine kleine Web-App mit einem Vibe-Coding-Tool prototypisiert.

## Theorie-Uebersicht

| # | Thema | Fast-Track | Aufwand |
|---|-------|:----------:|---------|
| 1 | [No-Code-Workflow-Tools 2026](theorie/no-code-tools.md) | :material-minus: | 10min |
| 2 | [Vibe-Coding-Plattformen](theorie/vibe-coding.md) | :material-minus: | 10min |
| 3 | [Wann No-Code ausreicht, wann nicht](theorie/wann-no-code.md) | :material-minus: | 10min |
| 4 | [Workflow-Logik: Trigger, Aktion, Bedingung, Output](theorie/workflow-logik.md) | :material-check: | 10min |
| 5 | [LLM-Integration in No-Code-Workflows](theorie/llm-integration-no-code.md) | :material-check: | 10min |
| 6 | [Datenschutz bei No-Code mit KI](theorie/datenschutz-no-code.md) | :material-check: | 10min |
| 7 | [Vibe-Coding-Patterns](theorie/vibe-coding-patterns.md) | :material-minus: | 10min |

## Praxis: Hauptprojekt -- Waehle EINS aus den drei Optionen

**Option A: Newsletter-Workflow (eher Businesstrack)**

- Make.com oder n8n: taeglich definierte RSS-Feeds oder Newsletter parsen, mit LLM zusammenfassen, in dein E-Mail-Postfach oder Slack pushen.
- Erweiterung: nach Themen kategorisieren, nur relevante zusammenfassen, Bullet-Points erstellen.

**Option B: Persoenlicher KI-Assistent als Web-App (eher Engineertrack)**

- Mit Bolt.new oder Lovable.dev: einfache Chat-Oberflaeche, die deinen Use-Case loest (z.B. "Schreibe meine Lebenslauf-Versionen fuer unterschiedliche Stellen").
- Anbindung an OpenAI/Anthropic-API.
- Hosting auf der Plattform (kostenlos im Free-Tier).

**Option C: Datei-zu-Datei-Pipeline (eher Businesstrack)**

- n8n oder Make.com: Trigger ist Upload zu Cloud-Drive, KI verarbeitet Datei (z.B. Meeting-Transkript zu Protokoll, PDF zu Zusammenfassung), Ergebnis landet im Output-Ordner.
- Praxis-Wert fuer Wissensarbeiter.

Jede Option im Portfolio dokumentieren: was, warum, wie, Screenshots, Code/Workflow-Export.

## Mehrwert-Mini-Projekte

- **Taegliche Routine-Automatisierung** -- z.B. "jeden Morgen 6 Uhr fasst KI mir das Wetter, Termine, wichtige News in eine Slack-DM".
- **WhatsApp/Telegram-Bot** ueber Make.com oder n8n als persoenlicher KI-Assistent unterwegs.
- **Vibe-Coded Mini-Tool** fuer eine spezifische Aufgabe (z.B. "schoener Markdown-Tabellen-Editor", "Persoenlicher Decision-Log").

## Open-Source-Pfad (besonders empfohlen)

- **n8n self-hosted via Docker** auf eigenem Server oder lokal mit lokalem Ollama als KI-Backend. Kein Cloud-API, kein Vendor-Lock-in. Anleitung: [n8n Docker Compose](https://docs.n8n.io/hosting/installation/docker/).
- **Open WebUI mit Pipelines** ([Open WebUI Docs](https://docs.openwebui.com)) als komplett selbst-gehostete Chat-Plattform mit Workflow-Logik.
- **Vibe-Coding-Alternative**: lokales Coding mit Cline-Extension in VS Code plus Ollama als Backend -- etwas muehsamer, aber 100% lokal und kostenfrei.

## Outcome-Check

- [ ] Mindestens ein lauffaehiger Workflow / eine Web-App im Portfolio
- [ ] Workflow / App loest echtes Problem aus deinem Alltag
- [ ] README erklaert: Was tut es? Warum? Wie? Stack?
- [ ] Du nutzt das Projekt taeglich oder mehrfach pro Woche
- [ ] OSS-Pfad mindestens einmal getestet (auch wenn du Cloud bleibst)
