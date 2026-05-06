---
title: "Spezialisierte Tools"
module: "2.2"
type: theorie
fast_track: false
effort: "20min"
stability: live
expires: "2026-11"
---

# Spezialisierte Tools

## Kernidee

Neben den grossen Chatbots gibt es hunderte spezialisierte KI-Tools, die jeweils eine Aufgabe besonders gut loesen. Der Vorteil gegenueber General-Purpose-Chatbots: Sie bringen domaenenspezifische Prompts, Workflows und Daten-Integrationen mit. NotebookLM versteht deine Dokumente tiefer als jeder Chatbot, Granola protokolliert Meetings besser als jede manuelle Notiz, und Gamma erstellt Praesentationen schneller als PowerPoint. Wichtiger als jedes Tool zu kennen ist die Faehigkeit, das richtige fuer deinen Use Case zu finden.

## Im Detail

### Ueberblick: Die wichtigsten Tools

| Tool | Anbieter | Kern-Features | Pricing | Best for |
|------|----------|---------------|---------|----------|
| NotebookLM | Google | Dokument-RAG, Audio-Podcasts aus PDFs | Kostenlos | Dokument-Analyse, Recherche |
| Gamma | Gamma | KI-Praesentationen aus Text | Free (mit Limits) / $10/Monat | Schnelle Praesentationen |
| Granola | Granola | KI-Meeting-Notizen, Zusammenfassung | Free / ab $10/Monat | Meeting-Dokumentation |
| Otter.ai | Otter | Meeting-Transkription + Action Items | Free / ab $17/Monat | Meeting-Transkripte |
| Fireflies.ai | Fireflies | Meeting-Archiv, durchsuchbar | Free / ab $10/Monat | Durchsuchbares Meeting-Archiv |

### NotebookLM -- Dein Dokument-Gehirn

**Was es kann:**

- Lade PDFs, Google Docs, Websites oder YouTube-Videos als Quellen
- RAG-basiert: Antworten basieren ausschliesslich auf deinen Dokumenten (nicht auf allgemeinem Wissen)
- Audio Overview: generiert einen natuerlich klingenden Podcast-Dialog ueber deine Dokumente
- Zitate und Quellenverweise direkt in den Antworten
- Notizen und Zusammenfassungen aus dem Material erstellen
- Kostenlos nutzbar (Google-Account reicht)

**Use Cases:**

- Forschungs-Papers und Fachbuecher tief analysieren
- Vorlesungsunterlagen zusammenfassen und Verstaendnisfragen stellen
- Meeting-Protokolle oder lange Reports durchsuchbar machen
- Podcast-artige Zusammenfassungen fuer unterwegs generieren (Audio Overview)

**Limitation:** Funktioniert nur mit explizit hochgeladenen Quellen -- kann nicht im Web suchen. Audio-Podcasts sind beeindruckend, aber manchmal oberflaechwlich bei komplexen Themen. Maximal 50 Quellen pro Notebook.

### Gamma -- Praesentationen in Minuten

**Was es kann:**

- Praesentationen, Docs und Websites aus Text-Beschreibung oder Paste generieren
- Professionelle Templates mit modernem Design
- Interaktive Elemente: eingebettete Videos, Charts, Bilder
- Bilder werden automatisch passend generiert oder aus Stock-Bibliothek gewaehlt
- Export als PDF, PowerPoint oder als gehostete Web-Praesentation
- AI-gesteuerte Design-Anpassungen (Farben, Layout, Stil)

**Use Cases:**

- Pitch-Decks und Investoren-Praesentationen in Minuten erstellen
- Interne Reports und Projekt-Updates visuell aufbereiten
- Workshop-Materialien und Schulungs-Slides generieren
- One-Pager fuer Kunden oder Stakeholder

**Limitation:** Design-Kontrolle eingeschraenkt gegenueber PowerPoint oder Figma. Bei sehr spezifischen Corporate-Design-Anforderungen stoeesst man an Grenzen. Kein vollwertiger App-Builder.

### Granola -- Der Meeting-Protokollant

**Was es kann:**

- Hoert bei Meetings zu und erstellt automatisch strukturierte Notizen
- Erkennt die Agenda und gliedert nach Themen
- Generiert automatische Zusammenfassungen nach dem Meeting
- Action Items werden extrahiert und zugewiesen
- Funktioniert mit Zoom, Google Meet, Microsoft Teams
- Deine eigenen Notizen werden mit dem KI-Transkript kombiniert

**Use Cases:**

- Meeting-Dokumentation ohne manuelles Protokollieren
- Nachbereitung: schnelle Zusammenfassung statt ganzes Transkript lesen
- Action-Item-Tracking: wer hat was zugesagt?
- Asynchrone Team-Updates: Kollegen koennen Meeting-Zusammenfassung lesen

**Limitation:** Braucht Mikrofon-Zugang (Datenschutz-Sensibilitaet in manchen Unternehmen). Free-Tier ist auf wenige Meetings begrenzt. Audio-Qualitaet beeinflusst die Ergebnisse stark.

### Otter.ai -- Transkription mit Intelligence

**Was es kann:**

- Echtzeit-Transkription waehrend Meetings
- Speaker-Erkennung: wer hat was gesagt
- Automatische Action Items und Zusammenfassung
- Integration in Zoom, Google Meet, Microsoft Teams
- Durchsuchbares Archiv aller vergangenen Meetings
- OtterPilot: kann Meetings selbststaendig beitreten und aufnehmen

**Use Cases:**

- Meetings transkribieren, auch wenn man nicht teilnehmen kann (OtterPilot)
- Zurueckblaetern und exakte Formulierungen finden
- Compliance: lueckenlose Meeting-Dokumentation

**Limitation:** Primaer auf Englisch optimiert -- deutsche Transkription funktioniert, ist aber weniger genau. Datenschutz: Audio wird in der Cloud verarbeitet. Kosten skalieren mit Meeting-Anzahl.

### Fireflies.ai -- Das Meeting-Archiv

**Was es kann:**

- Automatische Meeting-Aufnahme, Transkription und Zusammenfassung
- Durchsuchbares Archiv: finde jede Aussage in jedem vergangenen Meeting
- AskFred: KI-Assistent, der Fragen ueber alle Meetings hinweg beantwortet
- Sentiment-Analyse und Talk-Time-Tracking
- Integration mit CRMs (Salesforce, HubSpot) fuer automatische Meeting-Logs
- Auto-generierte Follow-up-E-Mails

**Use Cases:**

- Sales-Teams: Meeting-Notizen automatisch ins CRM schreiben
- Langfristiges Meeting-Archiv aufbauen und durchsuchen
- Onboarding: neue Team-Mitglieder koennen vergangene Meetings nachlesen
- Analyse: wer spricht wie viel, wie ist die Stimmung?

**Limitation:** Datenschutz-Bedenken bei permanenter Aufnahme. In manchen Laendern/Unternehmen rechtlich problematisch. Preis steigt schnell bei mehreren Nutzern.

### Wann welches Tool?

- **Dokumente analysieren und verstehen:** NotebookLM -- das Beste fuer dokumentenbasierte Recherche, kostenlos
- **Schnelle Praesentationen:** Gamma -- von Text zu Slides in Minuten
- **Meeting-Notizen (persoenlich):** Granola -- kombiniert deine Notizen mit KI-Transkript
- **Meeting-Transkription (Team):** Otter.ai -- OtterPilot fuer automatische Aufnahme
- **Durchsuchbares Meeting-Archiv:** Fireflies.ai -- AskFred beantwortet Fragen ueber alle Meetings
- **Generelle Regel:** Teste spezialisierte Tools fuer wiederkehrende Aufgaben. Wenn du etwas oefter als einmal pro Woche machst, gibt es wahrscheinlich ein spezialisiertes Tool, das es besser kann als ein Chatbot.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ | [NotebookLM](https://notebooklm.google.com) | Dokument-RAG mit Audio |
| 🛠️ | [Gamma](https://gamma.app) | KI-Praesentationen |
| 🛠️ | [Granola](https://granola.ai) | KI-Meeting-Notizen |
| 🛠️ | [Otter.ai](https://otter.ai) | Meeting-Transkription |
| 🛠️ | [Fireflies.ai](https://fireflies.ai) | Durchsuchbares Meeting-Archiv |
| 🛠️ | [There's An AI For That](https://theresanaiforthat.com) | 24.000+ Tools nach Kategorie |

## Teste dein Verstaendnis

- [ ] Lade ein laengeres PDF (z.B. ein Paper oder einen Report) in NotebookLM und stelle 5 spezifische Fragen dazu. Wie gut sind die Antworten im Vergleich zu einem Chatbot?
- [ ] Erstelle mit Gamma eine kurze Praesentation zu einem Thema deiner Wahl. Wie viel Nachbearbeitung brauchte das Ergebnis?
- [ ] Ueberlege: Welche deiner wiederkehrenden Aufgaben koennten von einem spezialisierten Tool profitieren, das du bisher mit einem General-Purpose-Chatbot erledigst?
