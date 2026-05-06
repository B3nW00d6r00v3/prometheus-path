---
title: "Modul 2.8: KI-Workspaces für Teams & Unternehmen"
module: "2.8"
type: index
fast_track: false
effort: "3-4h"
---

# Modul 2.8: KI-Workspaces für Teams & Unternehmen

Teams und Unternehmen brauchen mehr als individuelle ChatGPT-Accounts. Dieses Modul zeigt dir, was Enterprise KI-Workspaces sind, warum sie existieren und wann sie sich lohnen. Du lernst die DSGVO-Anforderungen kennen, vergleichst die wichtigsten Anbieter im DACH-Raum und entscheidest, ob Cloud oder Self-Hosting für dein Szenario passt.

**Aufwand:** 3-4h
**Voraussetzungen:** Module 2.1-2.2 (Tool-Landschaft), idealerweise 2.6 (No-Code-Erfahrung hilfreich aber nicht zwingend)

## Lernziel

Du verstehst, was Enterprise KI-Workspaces sind, wann sie sich gegenüber individuellen Chatbot-Abos lohnen, wie du sie nach DSGVO-Kriterien bewertest und welcher Anbieter zu welchem Unternehmenstyp passt.

## Theorie-Übersicht

| # | Thema | Fast-Track | Aufwand |
|---|-------|:----------:|---------|
| 1 | [Was sind KI-Workspaces?](theorie/was-sind-ki-workspaces.md) | :material-minus: | 15min |
| 2 | [DSGVO & Datenschutz bei KI-Tools](theorie/dsgvo-datenschutz.md) | :material-minus: | 15min |
| 3 | [Anbieter-Vergleich](theorie/anbieter-vergleich.md) | :material-minus: | 15min |
| 4 | [Wann lohnt sich ein Workspace?](theorie/wann-lohnt-sich-workspace.md) | :material-minus: | 15min |
| 5 | [Self-Hosting vs. Cloud](theorie/selbst-hosten-vs-cloud.md) | :material-minus: | 15min |

## Praxis: Einen Enterprise-Workspace testen

Teste mindestens einen der folgenden Anbieter im kostenlosen Tier oder Trial:

- **Beyond the Loop** -- Free-Tier verfügbar, sofort nutzbar. Chat, Dokument-Analyse und Bildgenerierung in einem Interface testen. [beyondtheloop.ai](https://beyondtheloop.ai)
- **Langdock** -- 7-Tage-Trial für Teams. Teste Multi-Modell-Routing und Integrationen. [langdock.com](https://langdock.com)
- **Synaplan** -- Kostenloses Self-Hosting (Docker). Wenn du technisches Setup nicht scheust, die Variante mit maximaler Datenkontrolle. [synaplan.com](https://synaplan.com)

Dokumentiere im Portfolio:

1. Welchen Anbieter hast du getestet?
2. Welche Modelle standen zur Verfügung?
3. Wie unterscheidet sich die Erfahrung von deinem bisherigen ChatGPT/Claude-Einzelabo?
4. Für welches Team/Szenario würdest du diesen Workspace empfehlen -- und warum?

## Open-Source-Pfad

- **Synaplan self-hosted:** Docker-basiert, PHP 8.3+. Multi-Modell via API-Keys oder komplett lokal via Ollama. RAG auf eigene Dokumente, einbettbare Chatbots. Anleitung: [Synaplan Docs](https://synaplan.com/docs)
- **LibreChat:** Open-Source-Alternative zu ChatGPT Teams. Multi-Modell-Support (OpenAI, Anthropic, Google, lokale Modelle). Selbst hostbar auf eigenem Server, Azure oder AWS. [github.com/danny-avila/LibreChat](https://github.com/danny-avila/LibreChat)
- **Open WebUI:** Wenn du nur ein lokales Chat-Interface über Ollama brauchst, ohne Team-Verwaltung. [openwebui.com](https://openwebui.com)

## Outcome-Check

- [ ] Mindestens eine Theorie-Seite gelesen und verstanden
- [ ] Einen Enterprise-Workspace im Free-Tier oder Trial getestet
- [ ] Kannst erklären, warum Firmen nicht einfach ChatGPT-Plus-Accounts für alle kaufen
- [ ] Weißt, wann ein Enterprise-Workspace sich lohnt und wann nicht
- [ ] DSGVO-Anforderungen an KI-Tools benennbar (Server-Standort, AVV, Zero-Retention)
- [ ] Entscheidung Self-Hosting vs. Cloud für ein konkretes Szenario begründbar
