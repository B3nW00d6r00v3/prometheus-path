---
title: "LLM-Integration in No-Code-Workflows"
module: "2.6"
type: theorie
fast_track: true
effort: "10min"
stability: green
expires: null
---

# LLM-Integration in No-Code-Workflows

## Kernidee

Die meisten No-Code-Plattformen haben KI-Module eingebaut -- du klickst "OpenAI" oder "Anthropic" als Baustein in deinen Workflow und schickst Text durch. Kein Code noetig. Das ist wie ein LLM als Lego-Stein: du steckst es in deinen Workflow rein, wo du "intelligente Verarbeitung" brauchst.

## Im Detail

Die wichtigsten Plattformen haben native KI-Module:

- **Make.com** hat OpenAI-, Anthropic- und Perplexity-Module. Du ziehst sie in den Workflow, konfigurierst Prompt und Modell, fertig.
- **n8n** hat einen OpenAI-Node und einen generischen AI-Agent-Node. Ueber den HTTP-Request-Node kannst du jede beliebige API ansprechen.
- **Zapier** hat AI Actions und native OpenAI-Integration.

Plus: alle Plattformen haben **generische HTTP-Module** fuer jede beliebige API. Wenn ein Anbieter kein natives Modul hat, rufst du die API direkt per HTTP auf -- du brauchst nur die API-Dokumentation.

Typischer KI-Workflow-Baustein: Text rein -> LLM verarbeitet -> strukturiertes Ergebnis raus -> naechster Schritt verarbeitet das Ergebnis weiter.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [n8n AI Modul Docs](https://docs.n8n.io/advanced-ai/) | KI-Integration in n8n |
| :book: | [Make OpenAI Integration](https://www.make.com/en/integrations/openai-gpt-3) | OpenAI in Make.com |

## Teste dein Verstaendnis

- [ ] Weisst du, wie du ein LLM in einen No-Code-Workflow einbindest?
- [ ] Kennst du die Fallback-Option (HTTP-Modul) fuer Anbieter ohne natives Modul?
