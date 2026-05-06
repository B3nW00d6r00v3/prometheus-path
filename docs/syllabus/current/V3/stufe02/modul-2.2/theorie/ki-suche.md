---
title: "KI-gestuetzte Suche"
module: "2.2"
type: theorie
fast_track: false
effort: "20min"
stability: live
expires: "2026-11"
---

# KI-gestuetzte Suche

## Kernidee

Klassische Suchmaschinen geben dir Links. KI-Suchmaschinen geben dir Antworten -- mit Quellenangabe. Das ist der entscheidende Unterschied: Statt 10 blaue Links zu lesen, bekommst du eine Zusammenfassung, die auf echten Web-Quellen basiert und diese zitiert. Der Trade-off: Du gewinnst Geschwindigkeit, musst aber die Quellen trotzdem pruefen, weil das Modell halluzinieren kann.

## Im Detail

### Ueberblick: Die wichtigsten Tools

| Tool | Anbieter | Kern-Features | Pricing | Best for |
|------|----------|---------------|---------|----------|
| Perplexity | Perplexity AI | Web-Citations, Pro Search, Deep Research, Spaces | Free / $20/Monat Pro | Primaere KI-Recherche |
| ChatGPT mit Browsing | OpenAI | Web-Suche integriert, GPT-4o-basiert | Free / $20/Monat Plus | Recherche + Weiterverarbeitung |
| Gemini Deep Research | Google | Multi-Step-Reports, 1M Context, Workspace-Daten | Free / $20/Monat Advanced | Ausfuehrliche Research-Reports |
| You.com | You.com | Search + KI-Assistent, verschiedene Modi | Free / $20/Monat | Alternatives Interface |
| Exa | Exa AI | API-first, semantische Suche, Embedding-basiert | API pay-per-query | Entwickler, programmatische Suche |

### Perplexity -- Der Recherche-Standard

**Was es kann:**

- Jede Antwort mit nummerierten Web-Quellen belegt -- du siehst sofort, woher die Info kommt
- Pro Search: stellt Rueckfragen, um die Suche zu praezisieren, durchsucht dann gezielt
- Deep Research: mehrstufige Recherche, die dutzende Quellen analysiert und einen strukturierten Report liefert
- Spaces: geteilte Recherche-Sammlungen mit persistentem Kontext fuer Teams oder Projekte
- Academic Mode: bevorzugt wissenschaftliche Quellen (Papers, Journals)

**Use Cases:**

- Faktenbasierte Recherche mit verifizierbaren Quellen
- Technische Fragen ("Wie implementiere ich OAuth 2.0 mit FastAPI?")
- Markt- und Wettbewerbs-Recherche mit aktuellen Daten
- Akademische Recherche mit Paper-Referenzen

**Limitation:** Weniger gut fuer kreatives Schreiben oder Code-Generierung. Die Staerke ist Informationsbeschaffung, nicht Inhaltsproduktion.

### ChatGPT mit Browsing -- Recherche im Allrounder

**Was es kann:**

- Web-Suche als integrierter Modus in ChatGPT (automatisch oder manuell aktiviert)
- Kombiniert Recherche mit der vollen ChatGPT-Power (Code, Analyse, Zusammenfassung)
- Kann gefundene Informationen direkt weiterverarbeiten (Tabelle erstellen, uebersetzen, etc.)

**Use Cases:**

- Recherche mit anschliessender Weiterverarbeitung ("finde die Top-5 Frameworks und vergleiche sie in einer Tabelle")
- Alltaegliche Fragen, bei denen Aktualitaet wichtig ist
- Kombinierte Workflows: suchen + analysieren + produzieren

**Limitation:** Citations weniger prominent und weniger zuverlaessig als bei Perplexity. Manchmal unklar, welche Aussagen aus dem Web und welche aus dem Training stammen.

### Gemini Deep Research -- Der Report-Generator

**Was es kann:**

- Multi-Step-Recherche: plant eine Recherche-Strategie, durchsucht systematisch das Web
- Erstellt ausfuehrliche, strukturierte Reports (oft mehrere Seiten)
- 1M Context: kann die gesammelten Quellen komplett im Kontext halten
- Zugriff auf Google-Oekosystem-Daten (Scholar, YouTube, Maps, etc.)

**Use Cases:**

- Ausfuehrliche Marktanalysen oder Technologie-Vergleiche
- Akademische Literatur-Reviews
- Due-Diligence-Recherchen mit vielen Quellen

**Limitation:** Reports koennen oberflaechwlich wirken trotz Laenge. Tendenz zu "alles abdecken" statt tiefem Verstaendnis.

### You.com -- Die Alternative

**Was es kann:**

- Verschiedene Modi: Smart (schnell), Research (ausfuehrlich), Create (Content)
- Chat-Interface mit Web-Quellen
- Code-Modus fuer Entwickler-Fragen

**Use Cases:**

- Alternatives Interface, wenn Perplexity-Limits erreicht sind
- Nutzer, die verschiedene Such-Modi in einem Tool wollen

**Limitation:** Kleinere Nutzerbasis, weniger ausgereift als Perplexity. Updates kommen langsamer.

### Exa -- Semantische Suche fuer Entwickler

**Was es kann:**

- API-first: programmatisch durchsuchbar (kein Chat-Interface)
- Semantische Suche: findet Inhalte nach Bedeutung, nicht nur nach Keywords
- Embedding-basiert: versteht den Kontext deiner Anfrage
- Ideal fuer RAG-Pipelines und automatisierte Recherche

**Use Cases:**

- Automatische Recherche in Workflows (n8n, Make.com)
- RAG-Anwendungen, die aktuelle Web-Daten brauchen
- Programmatische Content-Discovery

**Limitation:** Kein Chat-Interface -- rein fuer Entwickler und Automatisierung. Braucht API-Kenntnisse.

### Wann welches Tool?

- **Standard-Recherche mit Quellen:** Perplexity -- beste Citations, zuverlaessigste Quellen-Integration
- **Recherche + Weiterverarbeitung:** ChatGPT mit Browsing -- finden und direkt weiterarbeiten
- **Ausfuehrliche Reports:** Gemini Deep Research -- mehrstufig, strukturiert, lang
- **Programmatische Suche:** Exa -- API-first fuer Entwickler und Automations-Workflows
- **Wichtig:** Keine KI-Suche ersetzt kritisches Pruefen der Quellen. Citations anklicken, Originale lesen.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ | [Perplexity](https://perplexity.ai) | KI-Suche mit Quellenangabe |
| 🛠️ | [ChatGPT](https://chat.openai.com) | Browsing-Modus integriert |
| 🛠️ | [Gemini](https://gemini.google.com) | Deep Research Feature |
| 🛠️ | [You.com](https://you.com) | Multi-Modus KI-Suche |
| 🛠️ | [Exa](https://exa.ai) | Semantische Such-API |

## Teste dein Verstaendnis

- [ ] Recherchiere dasselbe Thema mit Perplexity und einem normalen Chatbot -- wie unterscheidet sich die Quellen-Qualitaet?
- [ ] Nutze Perplexity Deep Research fuer eine komplexere Frage (z.B. "Welche OSS-Vektordatenbank passt fuer mein Projekt?"). Pruefe mindestens 3 der zitierten Quellen manuell.
- [ ] Versuche, eine falsche Behauptung in einer KI-Suche zu finden. Wie erkennst du Halluzinationen trotz Citations?
