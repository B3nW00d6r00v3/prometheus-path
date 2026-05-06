---
title: "LLM-Integration in No-Code-Workflows"
module: "2.6"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# LLM-Integration in No-Code-Workflows

## Kernidee

Die meisten No-Code-Plattformen haben KI-Module eingebaut -- du klickst "OpenAI" oder "Anthropic" als Baustein in deinen Workflow und schickst Text durch. Kein Code nötig. Das ist wie ein LLM als Lego-Stein: du steckst es in deinen Workflow rein, wo du "intelligente Verarbeitung" brauchst. Das Geheimnis liegt nicht im Tool, sondern im Prompt.

## Im Detail

### Wie KI-Module in No-Code funktionieren

Jede No-Code-Plattform bietet KI-Integration auf zwei Wegen:

**1. Native KI-Module (vorkonfiguriert)**

Die Plattform hat fertige Bausteine für populäre KI-Anbieter. Du konfigurierst:

- **API-Key:** Dein Schlüssel zum KI-Anbieter (einmal einrichten, für alle Workflows nutzen)
- **Modell:** Welches Modell soll antworten? (GPT-4o, Claude Sonnet, etc.)
- **Prompt:** Was soll die KI tun? (Der wichtigste Teil!)
- **Parameter:** Temperature, Max Tokens, System-Prompt

**2. Generische HTTP-Module (für jede API)**

Für Anbieter ohne natives Modul rufst du die API direkt per HTTP auf. Du brauchst die API-Dokumentation und konfigurierst URL, Headers (mit API-Key) und Body (mit deinem Prompt). Das klingt technisch, ist aber in der Praxis ein Copy-Paste aus der API-Doku.

### Plattform-Vergleich: KI-Module

| Plattform | Native KI-Module | HTTP-Fallback | AI-Agent-Support |
|-----------|-----------------|---------------|------------------|
| **Make.com** | OpenAI, Anthropic, Perplexity, Cohere | Ja (HTTP-Modul) | Nein (manuell baubar) |
| **n8n** | OpenAI, AI Agent Node | Ja (HTTP Request Node) | Ja (eingebauter AI Agent) |
| **Zapier** | OpenAI, AI Actions | Ja (Webhooks) | Begrenzt |

### Der Prompt ist alles

Das KI-Modul ist nur so gut wie dein Prompt. In No-Code-Workflows gelten dieselben Prompt-Engineering-Regeln wie überall -- aber mit einem Zusatz: dein Output muss maschinenlesbar sein, weil der nächste Workflow-Schritt ihn verarbeiten muss.

**Schlecht (für Workflows):**

```
Fasse diesen Text zusammen.
```

Das LLM antwortet in Freitext -- der nächste Workflow-Schritt weiß nicht, was damit anzufangen ist.

**Gut (für Workflows):**

```
Analysiere den folgenden Artikel und antworte ausschließlich im folgenden JSON-Format:
{
  "titel": "Titel des Artikels",
  "zusammenfassung": "2-3 Sätze",
  "kategorie": "tech" | "business" | "wissenschaft",
  "relevanz": 1-10
}

Artikel:
{{article_text}}
```

Strukturierter Output (JSON) lässt sich in den Folgeschritten sauber parsen und weiterverarbeiten.

### Typische KI-Workflow-Patterns

**Pattern 1: Einzel-Verarbeitung**

```
[Input] → [LLM] → [Output]
```

Einfachster Fall: Ein Text rein, KI verarbeitet, Ergebnis raus. Beispiel: E-Mail → KI fasst zusammen → Slack-Nachricht.

**Pattern 2: Batch-Verarbeitung**

```
[Liste von Inputs] → [Schleife: jeder Input → LLM] → [Gesammelte Outputs]
```

Mehrere Texte nacheinander durch die KI schicken. Beispiel: 10 RSS-Artikel → jeweils zusammenfassen → Newsletter-E-Mail mit allen Zusammenfassungen.

**Pattern 3: Klassifikation + Routing**

```
[Input] → [LLM klassifiziert] → [Router nach Kategorie] → [Verschiedene Pfade]
```

Die KI entscheidet, wohin der Workflow geht. Beispiel: Support-Ticket → KI kategorisiert (Bug, Feature, Frage) → je nach Kategorie anderes Team benachrichtigen.

**Pattern 4: Ketten-Verarbeitung (Chaining)**

```
[Input] → [LLM 1: Zusammenfassung] → [LLM 2: Übersetzung] → [Output]
```

Mehrere KI-Schritte hintereinander. Beispiel: Deutscher Artikel → KI fasst zusammen → KI übersetzt auf Englisch → Tweet-Thread generieren.

### Kosten im Blick behalten

KI-Module in Workflows verursachen API-Kosten pro Aufruf. Faustregel:

| Modell | ~Kosten pro 1.000 Tokens Input | Typische Workflow-Kosten |
|--------|-------------------------------|-------------------------|
| GPT-4o mini | $0.00015 | ~$0.001 pro Aufruf |
| GPT-4o | $0.0025 | ~$0.01 pro Aufruf |
| Claude Haiku | $0.00025 | ~$0.001 pro Aufruf |
| Claude Sonnet | $0.003 | ~$0.01 pro Aufruf |

Für einen täglichen Workflow mit 10 KI-Aufrufen zahlst du mit günstigen Modellen (GPT-4o mini, Haiku) weniger als $1 pro Monat. Mit starken Modellen (GPT-4o, Sonnet) ~$3-5 pro Monat.

**Tipp:** Für Workflows, die oft laufen (alle 15 Minuten, hunderte Male am Tag), nutze günstige Modelle. Reserviere starke Modelle für Aufgaben, die Qualität erfordern.

### Praxis: Dein erster KI-Workflow in Make.com

1. **Account erstellen** auf make.com (kostenlos)
2. **Neues Szenario** anlegen
3. **Trigger:** "Schedule" → alle 24 Stunden
4. **Aktion 1:** "HTTP" → GET-Request an einen RSS-Feed (z.B. `https://hnrss.org/frontpage`)
5. **Aktion 2:** "OpenAI" → Text Completion mit Prompt: "Fasse die Top-3-Artikel zusammen"
6. **Aktion 3:** "Email" → Ergebnis an dich selbst senden
7. **Aktivieren** -- fertig, dein täglicher KI-Newsletter läuft

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [n8n AI Modul Docs](https://docs.n8n.io/advanced-ai/) | KI-Integration in n8n |
| :book: | [Make OpenAI Integration](https://www.make.com/en/integrations/openai-gpt-3) | OpenAI in Make.com |
| :book: | [Anthropic API Pricing](https://anthropic.com/pricing) | Aktuelle Preise für Claude-Modelle |
| :book: | [OpenAI API Pricing](https://openai.com/api/pricing) | Aktuelle Preise für GPT-Modelle |

## Teste dein Verständnis

- [ ] Erkläre den Unterschied zwischen einem nativen KI-Modul und einem HTTP-Request an eine KI-API.
- [ ] Warum sollte der Output eines KI-Moduls in einem Workflow strukturiert (z.B. JSON) sein statt Freitext?
- [ ] Baue einen einfachen KI-Workflow: Trigger → Text an LLM → Ergebnis per E-Mail oder Slack. Nutze Make.com (Free-Tier) oder n8n.
