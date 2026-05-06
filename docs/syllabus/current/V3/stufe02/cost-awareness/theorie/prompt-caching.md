---
title: "Prompt Caching halbiert Cost bei wiederholten Prefixen"
module: "cost"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Prompt Caching halbiert Cost bei wiederholten Prefixen

## Kernidee

Wenn du denselben System-Prompt oder dasselbe Dokument immer wieder mit verschiedenen Fragen an ein LLM sendest, bezahlst du normalerweise jedes Mal den vollen Input-Preis. Prompt Caching merkt sich den wiederkehrenden Teil und berechnet ihn beim zweiten Mal mit bis zu 90% Rabatt. Wie ein Bibliotheksausweis: Einmal registrieren, dann immer wieder günstig ausleihen.

## Überblick: Caching-Angebote der Provider

| Anbieter | Feature-Name | Cache-Rabatt | Cache-Dauer | Min. Cache-Größe |
|----------|-------------|-------------|-------------|-----------------|
| Anthropic | Prompt Caching | 90% (nur 10% des Input-Preises) | 5 Minuten (verlängerbar) | 1.024 Tokens |
| OpenAI | Automatic Caching | 50% | Automatisch | 1.024 Tokens |
| Google | Context Caching | 75% | 1 Stunde (konfigurierbar) | 32.768 Tokens |

*Stand Mai 2026. OpenAI cached automatisch, Anthropic und Google erfordern explizite Cache-Markierung.*

## Im Detail

### Wie Prompt Caching funktioniert

Ohne Caching wird bei jedem API-Call der komplette Input verarbeitet — auch wenn 90% identisch zum vorherigen Call sind. Das ist wie jedes Mal ein ganzes Buch zu lesen, obwohl du nur die letzte Seite geändert hast.

Mit Caching:

1. **Erster Call:** Der Provider verarbeitet den gesamten Input und speichert den markierten Prefix im Cache. Du zahlst den vollen Preis + einen kleinen Cache-Write-Aufschlag.
2. **Folge-Calls:** Der gecachte Prefix wird wiederverwendet. Du zahlst nur den reduzierten Cache-Read-Preis für den Prefix und den vollen Preis für den neuen Teil.

```
Erster Call:
┌──────────────────────────────────┬────────────────┐
│ System-Prompt + Dokument (Cache) │ User-Frage     │
│ 10.000 Tokens → voll bezahlt    │ 100 Tokens     │
└──────────────────────────────────┴────────────────┘

Zweiter Call:
┌──────────────────────────────────┬────────────────┐
│ System-Prompt + Dokument (Cache) │ Neue Frage     │
│ 10.000 Tokens → 90% Rabatt      │ 100 Tokens     │
└──────────────────────────────────┴────────────────┘
```

### Rechenbeispiel: 20 Fragen an ein Dokument

Du hast einen 50-Seiten-Report (20.000 Tokens) und stellst 20 verschiedene Fragen dazu (je 100 Tokens Input, 500 Tokens Output):

**Ohne Caching (Claude Sonnet $3/$15 pro 1M):**

- Input: 20 × 20.100 Tokens = 402.000 Tokens → $1,21
- Output: 20 × 500 Tokens = 10.000 Tokens → $0,15
- **Gesamt: $1,36**

**Mit Caching (Anthropic: 90% Rabatt auf Cache-Hits):**

- Erster Call: 20.100 Tokens voll → $0,060
- 19 Folge-Calls: 20.000 × 0,10 + 100 voll = 2.100 "effektive" Tokens je Call
- Cache-Reads: 19 × 20.000 × $0,30/1M = $0,114
- Neue Tokens: 19 × 100 × $3/1M = $0,006
- Output: wie oben $0,15
- **Gesamt: ≈ $0,33**

**Ersparnis: ~75%** bei 20 Fragen an dasselbe Dokument.

### Wann Caching sich lohnt

Prompt Caching lohnt sich, wenn:

- **Dein System-Prompt lang ist** (>1.000 Tokens) und bei vielen Calls identisch bleibt
- **Du iterativ an einem Dokument arbeitest** (verschiedene Fragen zum selben Text)
- **Du einen Chatbot baust** mit langem System-Prompt, der bei jeder Nutzer-Nachricht mitgeschickt wird
- **RAG-Systeme:** Der Kontext-Prefix bleibt oft teilweise identisch

Prompt Caching lohnt sich nicht, wenn:

- Jeder Call einen komplett anderen Input hat
- Der Input sehr kurz ist (unter 1.024 Tokens)
- Du nur wenige Calls machst (der Cache-Write kostet extra)

### Caching bei den einzelnen Anbietern

**Anthropic (Claude):**
- Explizit: Du markierst den zu cachenden Teil mit `cache_control`
- 90% Rabatt auf Cache-Reads, 25% Aufschlag auf Cache-Writes
- Cache lebt 5 Minuten, wird bei erneutem Zugriff verlängert
- Minimum: 1.024 Tokens für den Cache-Block

**OpenAI (GPT):**
- Automatisch: Identische Prefixe werden automatisch erkannt und gecacht
- 50% Rabatt, kein Write-Aufschlag
- Kein manuelles Management nötig
- Funktioniert ab 1.024 Token identischem Prefix

**Google (Gemini):**
- Explizit: `CachedContent`-Objekt erstellen
- 75% Rabatt, plus Speicher-Gebühr ($1,00/1M Tokens pro Stunde)
- Cache-Dauer konfigurierbar (Standard: 1 Stunde)
- Minimum: 32.768 Tokens — nur für große Kontexte sinnvoll

### Für Stufe 2: Nur verstehen, nicht implementieren

Prompt Caching ist ein API-Feature. In Chat-Interfaces (ChatGPT, Claude.ai) wird es teilweise automatisch angewendet, ohne dass du etwas tun musst. Für Stufe 2 reicht es, das Konzept zu verstehen — die Implementierung kommt in Stufe 5, wenn du eigene Anwendungen baust.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Anthropic Prompt Caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) | Feature-Dokumentation mit Code-Beispielen |
| :book: | [OpenAI Prompt Caching](https://platform.openai.com/docs/guides/prompt-caching) | Automatisches Caching erklärt |
| :book: | [Google Context Caching](https://ai.google.dev/gemini-api/docs/caching) | Googles Variante mit Speicher-Gebühr |

## Teste dein Verständnis

- [ ] Erkläre in eigenen Worten, warum Prompt Caching bei iterativer Arbeit an einem Dokument viel Geld spart, aber bei einmaligen Anfragen nicht.
- [ ] Du baust einen Chatbot mit einem 5.000-Token System-Prompt. Der Chatbot bekommt 200 Nachrichten pro Tag. Wie viel sparst du pro Tag durch Caching bei Claude Sonnet (90% Rabatt)?
- [ ] Warum hat Google ein Minimum von 32.768 Tokens für Context Caching — und was sagt das über den Use Case, für den es gedacht ist?
