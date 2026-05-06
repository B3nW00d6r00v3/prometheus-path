---
title: "No-Code KI-App-Builder (Vibe Coding)"
module: "2.2"
type: theorie
fast_track: false
effort: "20min"
stability: live
expires: "2026-11"
---

# No-Code KI-App-Builder ("Vibe Coding")

## Kernidee

Du beschreibst eine App in Worten -- und sie existiert Minuten spaeter. Das ist "Vibe Coding": Statt Code zu schreiben, beschreibst du, was du willst, und die KI baut es. Bolt.new, Lovable und Replit Agent erzeugen Full-Stack-Web-Apps, v0.dev generiert UI-Komponenten, und Gamma erstellt Praesentationen. Der entscheidende Unterschied zu Coding-Assistenten: Hier brauchst du null Programmierkenntnisse zum Starten.

## Im Detail

### Ueberblick: Die wichtigsten Tools

| Tool | Anbieter | Kern-Features | Pricing | Best for |
|------|----------|---------------|---------|----------|
| Bolt.new | StackBlitz | Full-Stack Web-Apps, Browser-basiert, kein Setup | Free (mit Limits) / ab $20/Monat | Schnellstes Prototyping |
| Lovable | Lovable | React-Apps, GitHub-Integration, Supabase-Backend | Free (mit Limits) / $20/Monat | React-Apps mit Backend |
| v0.dev | Vercel | UI-Komponenten, React/Next.js, Shadcn-basiert | Free (Credits) / $20/Monat | UI-Komponenten generieren |
| Replit Agent | Replit | Full-Stack + Deployment + Community | Free / $20/Monat Pro | Komplette App inkl. Hosting |
| Gamma | Gamma | Praesentationen, Docs, Websites aus Text | Free (mit Limits) / $10/Monat | Praesentationen und Docs |
| Vercel | Vercel | Hosting + Deployment fuer Frontend-Apps | Free / ab $20/Monat | Deployment (kein Builder) |

### Bolt.new -- Der Schnellstarter

**Was es kann:**

- Full-Stack Web-Apps direkt im Browser generieren (StackBlitz-basiert)
- Kein lokales Setup noetig -- alles laeuft in der Browser-Sandbox
- Unterstuetzt React, Next.js, Vite, Node.js und mehr
- Iteratives Arbeiten: App beschreiben, testen, verfeinern
- One-Click-Deploy zu Netlify oder Vercel
- $20M ARR (2025) -- einer der am schnellsten wachsenden KI-Builder

**Use Cases:**

- MVP oder Prototyp in unter einer Stunde bauen
- Landing Pages und Marketing-Seiten generieren
- Interne Tools fuer Teams (Dashboards, Formulare, Admin-Panels)

**Limitation:** Komplexe Business-Logik oder Datenbank-Migrationen erfordern oft manuelle Nacharbeit. Die generierten Apps sind funktional, aber nicht immer production-ready.

### Lovable -- Der React-Spezialist

**Was es kann:**

- Generiert React-Anwendungen mit sauberem, lesbarem Code
- Native GitHub-Integration: Code wird direkt ins Repository gepusht
- Supabase-Backend-Integration fuer Datenbank und Auth
- Visueller Editor fuer Feintuning nach der Generierung
- Fokus auf "developer-handoff-ready" Code

**Use Cases:**

- Web-Apps, die spaeter von Entwicklern weiterentwickelt werden sollen
- Projekte mit Datenbank-Anforderungen (Supabase out of the box)
- Startups, die schnell iterieren und dann professionell weiterentwickeln

**Limitation:** Stark auf React/Supabase-Stack fokussiert. Andere Frameworks oder Backends weniger gut unterstuetzt.

### v0.dev -- Der UI-Generator

**Was es kann:**

- Generiert React-UI-Komponenten per Text-Beschreibung
- Basiert auf Shadcn/UI -- die generierten Komponenten sind direkt in Next.js-Projekte integrierbar
- Copy-Paste-ready: Code direkt in eigenes Projekt uebernehmen
- Kostenloser Einstieg mit Credits-System
- Von Vercel -- perfekte Integration ins Next.js-Oekosystem

**Use Cases:**

- Einzelne UI-Komponenten schnell prototypen (Formulare, Dashboards, Cards)
- Design-Ideen als funktionale Komponenten visualisieren
- Ergaenzung zu eigenem Coding: die KI baut die UI, du den Rest

**Limitation:** Kein Full-Stack-Builder -- generiert nur Frontend-Komponenten, kein Backend. Fuer ganze Apps brauchst du Bolt oder Lovable.

### Replit Agent -- Die Komplett-Loesung

**Was es kann:**

- Full-Stack-Apps per Prompt: Frontend, Backend, Datenbank
- Integriertes Hosting: Apps laufen direkt auf Replit (kein externes Deployment)
- Community: Code teilen, remixen, zusammenarbeiten
- Mobile App-Erstellung moeglich
- Agent plant die Architektur und implementiert schrittweise

**Use Cases:**

- Komplette App inklusive Hosting ohne externe Services
- Lern-Projekte: die Community bietet Templates und Inspiration
- Schnelle Experimente, die sofort online erreichbar sein sollen

**Limitation:** Apps laufen auf Replit-Infrastruktur -- Vendor-Lock-in fuer Hosting. Performance und Skalierbarkeit begrenzt.

### Gamma -- Der Praesentations-Profi

**Was es kann:**

- Praesentationen, Docs und Websites aus Text-Beschreibungen generieren
- Professionelle Templates mit modernem Design
- Interaktive Elemente (eingebettete Videos, Charts)
- Export als PDF oder PowerPoint
- $10/Monat fuer unbegrenzte Praesentationen

**Use Cases:**

- Schnelle Pitch-Decks und Praesentationen erstellen
- Interne Dokumente und Reports visuell aufbereiten
- One-Pager und Projekt-Zusammenfassungen

**Limitation:** Kein App-Builder -- rein fuer Dokumente und Praesentationen. Design-Kontrolle eingeschraenkt gegenueber PowerPoint/Figma.

### Wann welches Tool?

- **Schneller Web-App-Prototyp:** Bolt.new -- am schnellsten von Idee zu lauffaehiger App
- **React-App mit Backend und Git:** Lovable -- sauberer Code, GitHub-ready
- **Nur UI-Komponenten:** v0.dev -- perfekt fuer Einzelteile im Next.js-Stack
- **App + Hosting in einem:** Replit Agent -- alles inklusive, kein Setup
- **Praesentationen/Docs:** Gamma -- der einzige in dieser Liste, der nicht Apps baut
- **Wichtig:** Vibe Coding eignet sich fuer MVPs und Prototypen. Fuer production-grade Software brauchst du frueher oder spaeter echte Engineering-Skills oder einen Coding-Assistenten.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ | [Bolt.new](https://bolt.new) | Full-Stack Web-Apps im Browser |
| 🛠️ | [Lovable](https://lovable.dev) | React-Apps mit GitHub-Integration |
| 🛠️ | [v0.dev](https://v0.dev) | UI-Komponenten per Prompt |
| 🛠️ | [Replit](https://replit.com) | Komplette Apps mit Hosting |
| 🛠️ | [Gamma](https://gamma.app) | KI-Praesentationen und Docs |
| 🛠️ | [Vercel](https://vercel.com) | Deployment-Plattform |

## Teste dein Verstaendnis

- [ ] Baue mit Bolt.new oder Lovable eine einfache Web-App (z.B. eine Todo-Liste oder ein Kontaktformular). Wie lange dauert es von der Idee zur lauffaehigen App?
- [ ] Generiere mit v0.dev eine UI-Komponente und pruefe den Code -- ist er sauber genug, um ihn in ein echtes Projekt zu uebernehmen?
- [ ] Reflektiere: Wo liegen die Grenzen von Vibe Coding? Ab welchem Punkt brauchst du echte Programmier-Skills?
