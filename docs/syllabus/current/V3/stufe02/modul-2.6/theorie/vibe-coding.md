---
title: "Vibe-Coding-Plattformen"
module: "2.6"
type: theorie
fast_track: false
effort: "15min"
stability: live
expires: "2026-08"
---

# Vibe-Coding-Plattformen

## Kernidee

Andrej Karpathy hat den Begriff "Vibe Coding" Anfang 2025 geprägt: "You fully give in to the vibes, embrace exponentials, and forget that the code even exists." Du beschreibst in natürlicher Sprache, was du willst -- die KI generiert den Code. Statt Programmieren wird die Fähigkeit, präzise zu beschreiben, zum entscheidenden Skill. In Minuten statt Wochen zu einer funktionierenden Web-App.

## Im Detail

### Überblick: Die wichtigsten Vibe-Coding-Plattformen 2026

| Tool | Anbieter | Stack | Pricing | Best for |
|------|----------|-------|---------|----------|
| Bolt.new | StackBlitz | React/Next.js/Vite | Free (Limits) / ab $20/Mo | Schnellstes Prototyping |
| Lovable | Lovable | React + Supabase | Free (Limits) / $20/Mo | Full-Stack mit Datenbank |
| v0.dev | Vercel | React/Next.js/Shadcn | Free (Credits) / $20/Mo | UI-Komponenten |
| Replit Agent | Replit | Flexibel (Python, Node, etc.) | Free / $20/Mo Pro | Komplette Apps + Hosting |
| Claude Artifacts | Anthropic | HTML/CSS/JS, React | Im Claude-Abo enthalten | Quick-Demos, Prototypen |

### Bolt.new -- Der Schnellstarter

**Was es kann:**

- Full-Stack Web-Apps direkt im Browser generieren (StackBlitz WebContainer)
- Kein lokales Setup nötig -- alles läuft in der Browser-Sandbox
- Unterstützt React, Next.js, Vite, Node.js und mehr
- Iteratives Arbeiten: "Mach den Button größer", "Füge eine Suchfunktion hinzu"
- One-Click-Deploy zu Netlify oder Vercel
- Über $20M ARR (2025) -- einer der am schnellsten wachsenden KI-Builder

**Stärke:** Geschwindigkeit. Von Idee zu lauffähiger App in unter 10 Minuten. Der beste Einstieg in Vibe-Coding.

**Limitation:** Komplexe Business-Logik oder Datenbank-Migrationen erfordern oft manuelle Nacharbeit. Bei großen Projekten wird die Iteration langsamer.

### Lovable -- Der Full-Stack-Spezialist

**Was es kann:**

- Generiert React-Anwendungen mit sauberem, lesbarem Code
- Native Supabase-Integration: Datenbank, Auth und Storage out-of-the-box
- GitHub-Integration: Code wird direkt ins Repository gepusht
- Visueller Editor für Feintuning nach der Generierung
- Fokus auf "Developer-Handoff-Ready" -- der Code soll weiterverwendbar sein

**Stärke:** Wenn deine App Daten speichern muss (User-Accounts, Formulardaten, Inhalte), ist Lovable die beste Wahl. Die Supabase-Integration spart Stunden Setup.

**Limitation:** Stark auf React/Supabase-Stack fokussiert. Andere Frameworks oder Backends weniger gut unterstützt.

### v0.dev -- Der UI-Generator

**Was es kann:**

- Generiert React-UI-Komponenten per Text-Beschreibung
- Basiert auf Shadcn/UI -- die generierten Komponenten sind direkt in Next.js-Projekte integrierbar
- Copy-Paste-Ready: Code sofort in eigenes Projekt übernehmbar
- Von Vercel -- perfekte Integration ins Next.js-Ökosystem

**Stärke:** Ideal, wenn du einzelne Komponenten brauchst (ein Dashboard, ein Formular, eine Sidebar), nicht eine ganze App. Die Qualität der generierten UI ist oft beeindruckend.

**Limitation:** Kein Full-Stack-Builder -- generiert nur Frontend-Komponenten, kein Backend. Für ganze Apps brauchst du Bolt oder Lovable.

### Replit Agent -- Die Komplettlösung

**Was es kann:**

- Full-Stack-Apps per Prompt: Frontend, Backend, Datenbank
- Integriertes Hosting: Apps laufen direkt auf Replit (kein externes Deployment nötig)
- Flexibler Stack: Python, Node.js, Go, Ruby -- nicht auf React festgelegt
- Community: Code teilen, remixen, zusammenarbeiten
- Agent plant die Architektur und implementiert schrittweise

**Stärke:** Alles in einem: Code-Generierung, Editor, Terminal und Hosting. Keine Konfiguration, keine Deployment-Fragen.

**Limitation:** Apps laufen auf Replit-Infrastruktur -- Vendor-Lock-in für Hosting. Performance und Skalierbarkeit begrenzt.

### Claude Artifacts -- Die Quick-Demo

**Was es kann:**

- Interaktive HTML/CSS/JS- und React-Demos direkt im Claude-Chat
- Kein separates Tool nötig -- alles innerhalb von claude.ai
- Gut für Visualisierungen, Prototypen, interaktive Erklärungen
- Im Claude-Abo (Free und Pro) enthalten

**Stärke:** Die niedrigste Einstiegshürde überhaupt. Du brauchst kein separates Tool, kein Account, kein Setup. "Baue mir einen interaktiven Rechner" -- und er ist sofort da.

**Limitation:** Kein Deployment, keine Persistenz, kein Backend. Rein für Quick-Demos und Prototypen, nicht für echte Apps.

### Vibe-Coding vs. Coding-Assistenten

Wichtige Abgrenzung: Vibe-Coding-Tools (Bolt, Lovable) sind **nicht** dasselbe wie Coding-Assistenten (Cursor, GitHub Copilot, Claude Code). Der Unterschied:

| | Vibe-Coding | Coding-Assistenten |
|---|---|---|
| **Zielgruppe** | Nicht-Programmierer, Prototyper | Entwickler |
| **Input** | Natürliche Sprache | Code + natürliche Sprache |
| **Output** | Komplette App | Code-Vorschläge, Edits |
| **Kontrolle** | Gering (Black Box) | Hoch (du siehst jeden Edit) |
| **Skalierung** | Prototypen, MVPs | Production-Code |

Coding-Assistenten sind Thema in Stufe 4 (Engineering). Hier geht es um Vibe-Coding als No-Code-Alternative.

### Wann welches Tool?

- **Schneller Web-App-Prototyp:** Bolt.new -- am schnellsten von Idee zu lauffähiger App
- **App mit Datenbank und Auth:** Lovable -- Supabase-Integration out-of-the-box
- **Nur UI-Komponenten:** v0.dev -- perfekt für Einzelteile im Next.js-Stack
- **App + Hosting in einem:** Replit Agent -- alles inklusive, kein Setup
- **Quick-Demo im Chat:** Claude Artifacts -- kein separates Tool nötig

*Verfallsdatum: August 2026 -- die Tool-Landschaft ändert sich schnell.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Bolt.new](https://bolt.new) | Schnellstes Web-App-Prototyping |
| :hammer_and_wrench: | [Lovable](https://lovable.dev) | Full-Stack mit Supabase |
| :hammer_and_wrench: | [v0.dev](https://v0.dev) | React-Komponenten von Vercel |
| :hammer_and_wrench: | [Replit](https://replit.com) | Komplette Apps mit Hosting |
| :book: | [Karpathy — Vibe Coding Tweet](https://x.com/kabortnern/status/1886192184808149383) | Der Original-Tweet, der den Begriff prägte |
| :book: | [Simon Willison — Vibe Coding](https://simonwillison.net/2025/Feb/6/vibe-coding/) | Kritische Einordnung |

## Teste dein Verständnis

- [ ] Baue mit Bolt.new oder Lovable eine einfache App (z.B. Todo-Liste, Notiz-Tool). Wie lange brauchst du von der Beschreibung zur lauffähigen App?
- [ ] Was unterscheidet Vibe-Coding von Coding-Assistenten wie Cursor oder GitHub Copilot?
- [ ] Für welche Szenarien eignet sich Vibe-Coding -- und wo stößt es an Grenzen?
