---
title: "Workflow-Automatisierung mit KI"
module: "2.2"
type: theorie
fast_track: false
effort: "20min"
stability: live
expires: "2026-11"
---

# Workflow-Automatisierung mit KI

## Kernidee

Workflow-Tools verbinden Apps miteinander und fuegen KI-Schritte dazwischen ein. Statt "Neue E-Mail kommt rein, ich lese sie, ich entscheide, ich antworte" wird es "Neue E-Mail kommt rein, KI klassifiziert sie, KI entwirft Antwort, ich bestaetige". Das Prinzip: Trigger, Aktion, Bedingung -- visuell zusammengeklickt, nicht programmiert. Mit KI-Nodes werden diese Workflows intelligent.

## Im Detail

### Ueberblick: Die wichtigsten Tools

| Tool | Anbieter | Kern-Features | Pricing | Best for |
|------|----------|---------------|---------|----------|
| n8n | n8n GmbH (Berlin) | OSS, self-hostbar, LLM-Nodes, 400+ Integrationen | Free (self-hosted) / ab $20/Monat Cloud | Self-Hosting, Datensouveraenitaet |
| Make.com | Celonis | Visuell, maechtig, einfacher Einstieg, grosse Bibliothek | Free (1000 Ops/Monat) / ab $9/Monat | Einfacher Einstieg, komplexe Logik |
| Zapier | Zapier | 7000+ App-Integrationen, AI Actions, einfachstes Setup | Free (100 Tasks/Monat) / ab $20/Monat | Maximale App-Abdeckung |
| Lindy | Lindy AI | No-Code KI-Agenten per natuerlicher Sprache | Free (mit Limits) / ab $50/Monat | KI-Agenten ohne Technik-Wissen |

### n8n -- OSS-Workflow-Powerhouse

**Was es kann:**

- Open Source: kompletter Quellcode einsehbar, self-hostbar (Docker, Kubernetes)
- LLM-Nodes: native Integration fuer OpenAI, Anthropic, Ollama und weitere
- 400+ App-Integrationen (Slack, Gmail, Notion, GitHub, etc.)
- Visueller Node-basierter Editor -- Workflows per Drag-and-Drop bauen
- JavaScript/Python-Code-Nodes fuer Custom-Logik
- AI Agent Node: baut autonome Agenten direkt in Workflows
- Deutscher Gruender (Berlin), aktive Community

**Use Cases:**

- E-Mail-Triage: eingehende Mails per LLM klassifizieren und weiterleiten
- Dokument-Verarbeitung: PDFs einlesen, per KI zusammenfassen, in Notion ablegen
- Social-Media-Automatisierung: Content generieren und zeitgesteuert posten
- Daten-Pipelines: APIs abfragen, Daten transformieren, in Datenbank schreiben

**Limitation:** Self-Hosting erfordert technisches Know-how (Docker, Server-Wartung). Cloud-Version ist einfacher, aber teurer als Self-Hosting.

### Make.com -- Der visuelle Allrounder

**Was es kann:**

- Visueller Szenario-Editor mit Drag-and-Drop (ex-Integromat)
- Starke Fehlerbehandlung: Retry, Fallback, Error-Routes
- Grosse Bibliothek an vorgefertigten Templates
- HTTP-Module fuer beliebige API-Anbindungen
- Data Stores fuer persistente Daten zwischen Runs
- 1000 kostenlose Operationen pro Monat

**Use Cases:**

- Komplexe Workflows mit vielen Verzweigungen und Bedingungen
- Lead-Anreicherung: neuer Kontakt in CRM, KI recherchiert Firma, fuellt Felder
- Reporting: Daten aus mehreren Quellen aggregieren und per KI zusammenfassen
- E-Commerce: Bestellungen verarbeiten, Kunden benachrichtigen

**Limitation:** Nicht Open Source. Kosten skalieren mit Operationsanzahl -- bei hohem Volumen kann es teuer werden.

### Zapier -- Der Integrations-Champion

**Was es kann:**

- 7000+ App-Integrationen -- mit Abstand die groesste Abdeckung
- AI Actions: natuerlichsprachliche Befehle fuer Aktionen
- Einfachstes Setup: "Wenn X passiert, dann mache Y" in Minuten
- Tables: einfache Datenbank direkt in Zapier
- Chatbots und Interfaces fuer Endnutzer
- Riesige Community und Template-Bibliothek

**Use Cases:**

- Standard-Integrationen zwischen bekannten Apps (Gmail, Slack, Salesforce, etc.)
- Einfache Automatisierungen ohne technisches Wissen
- Teams, die schnell starten wollen ohne Setup-Aufwand

**Limitation:** Teuerste Option bei hohem Volumen. Weniger Flexibilitaet fuer komplexe Logik als Make oder n8n. Kein Self-Hosting.

### Lindy -- KI-Agenten per Sprache

**Was es kann:**

- Erstelle KI-Agenten durch natuerlichsprachliche Beschreibung ("Pruefe meine E-Mails und fasse die wichtigen zusammen")
- Kein visueller Workflow-Builder noetig -- Lindy versteht Aufgaben-Beschreibungen
- Multi-Agent-Orchestrierung: mehrere Agenten arbeiten zusammen
- Integration mit gaengigen Apps (E-Mail, Kalender, CRM)

**Use Cases:**

- Persoenliche Assistenten fuer wiederkehrende Aufgaben
- E-Mail-Management: Sortieren, Zusammenfassen, Entwuerfe erstellen
- Meeting-Vorbereitung: Agenda erstellen, Teilnehmer recherchieren

**Limitation:** Weniger Kontrolle als bei expliziten Workflow-Buildern. Bei komplexen, mehrstufigen Prozessen kann die natuerlichsprachliche Definition ungenau sein.

### Wann welches Tool?

- **Self-Hosting, OSS, volle Kontrolle:** n8n -- kostenlos self-hostbar, LLM-Nodes eingebaut
- **Einfach starten, komplexe Logik:** Make.com -- bester Kompromiss aus Einfachheit und Power
- **Maximale App-Integrationen:** Zapier -- 7000+ Apps, nichts hat mehr Integrationen
- **KI-Agenten ohne Technik:** Lindy -- beschreibe die Aufgabe, der Agent erledigt sie
- **Budget-Tipp:** n8n self-hosted ist komplett kostenlos. Make.com und Zapier haben nutzbare Free-Tiers fuer erste Experimente.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ | [n8n](https://n8n.io) | OSS Workflow-Automatisierung |
| 🛠️ | [Make.com](https://make.com) | Visueller Szenario-Builder |
| 🛠️ | [Zapier](https://zapier.com) | 7000+ App-Integrationen |
| 🛠️ | [Lindy](https://lindy.ai) | No-Code KI-Agenten |
| 📺 | [n8n YouTube](https://youtube.com/@n8n-io) | Tutorials und Use Cases |

## Teste dein Verstaendnis

- [ ] Baue einen einfachen Workflow mit KI-Schritt: z.B. "Neuer RSS-Feed-Eintrag, KI fasst zusammen, Ergebnis in Slack posten". Nutze dafuer n8n (self-hosted oder Cloud) oder Make.com (Free-Tier).
- [ ] Vergleiche den Aufwand: Wie lange brauchst du fuer denselben Workflow in n8n vs. Make.com vs. Zapier?
- [ ] Ueberlege: Welchen wiederkehrenden Prozess in deinem Alltag koenntest du mit einem KI-Workflow automatisieren?
