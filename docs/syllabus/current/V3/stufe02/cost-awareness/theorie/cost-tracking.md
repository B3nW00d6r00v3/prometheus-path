---
title: "Cost-Tracking-Tools für Anfänger"
module: "cost"
type: theorie
fast_track: false
effort: "15min"
stability: live
expires: "2026-08"
---

# Cost-Tracking-Tools für Anfänger

## Kernidee

Jeder Cloud-Provider hat ein eingebautes Dashboard, das dir zeigt, was du ausgegeben hast. Setze dort ein hartes Limit, bevor du intensiv testest — wie ein Budget-Alarm auf deiner Kreditkarte. Für Stufe 2 reicht das eingebaute Dashboard völlig aus. Externe Tools wie Helicone sind erst ab Stufe 5 relevant, wenn du Production-Workloads über mehrere Provider verwaltest.

## Überblick: Provider-Dashboards

| Provider | Dashboard-URL | Budget-Limit | Alert-Funktion | Wie detailliert? |
|----------|--------------|-------------|---------------|-----------------|
| Anthropic | console.anthropic.com/settings/plans | Ja (hartes Limit) | E-Mail-Alerts | Pro Modell, pro Tag |
| OpenAI | platform.openai.com/usage | Ja (Soft + Hard Limit) | E-Mail-Alerts | Pro Modell, pro Tag, pro API-Key |
| Google | ai.google.dev (AI Studio) | Ja (Quota-Limits) | — | Pro Modell, pro Minute/Tag |
| Groq | console.groq.com/usage | Ja (Rate Limits) | — | Pro Modell |

## Im Detail

### Schritt 1: Budget-Limit setzen — sofort

Das Allerwichtigste, bevor du die API nutzt: **Setze ein hartes Budget-Limit.** Bei jedem Provider.

**Anthropic:**
1. Gehe zu [console.anthropic.com](https://console.anthropic.com)
2. Settings → Plans & Billing → Usage Limits
3. Setze ein "Monthly Spend Limit" (z.B. $5 oder $10 für Stufe 2)
4. Das Limit ist hart — bei Erreichen werden API-Calls abgelehnt

**OpenAI:**
1. Gehe zu [platform.openai.com](https://platform.openai.com)
2. Settings → Organization → Limits
3. Setze sowohl "Soft Limit" (Warnung per E-Mail) als auch "Hard Limit" (API-Stopp)
4. Empfehlung: Soft Limit bei $3, Hard Limit bei $5

**Google AI Studio:**
1. Kostenlos — kein Budget-Limit nötig
2. Rate Limits sind automatisch gesetzt (60/Min, 1.500/Tag im Free-Tier)
3. Bei Paid-Tier: Quota-Limits in der Google Cloud Console konfigurieren

### Schritt 2: Kosten verstehen — das Dashboard lesen

Alle Dashboards zeigen dir:

- **Tägliche Ausgaben:** Wie viel du heute, diese Woche, diesen Monat ausgegeben hast
- **Aufschlüsselung nach Modell:** Welches Modell wie viel gekostet hat
- **Token-Verbrauch:** Wie viele Input- und Output-Tokens du genutzt hast

**Typische Lernphase-Ausgaben (Stufe 2):**

| Nutzung | Geschätzte monatliche Kosten |
|---------|------------------------------|
| Nur Free-Tier Chat-Interfaces | $0 |
| Gelegentliche API-Tests (10/Tag) | $0,50-$2 |
| Intensives API-Experimentieren (50/Tag) | $3-$10 |
| Mit Frontier-Modellen (Opus, o3) | $10-$30 |

### Schritt 3: Überraschungen vermeiden

Die häufigsten Kostenfallen für Anfänger:

**1. Vergessene Schleifen**
Ein Script, das in einer Endlos-Schleife API-Calls macht, kann in Minuten dein Budget aufbrauchen. **Immer:** Hard Limit setzen + max_tokens in jedem Call begrenzen.

**2. Falsches Modell gewählt**
Ein Script, das Opus statt Haiku nutzt, kostet 19x mehr. Modellname im Code immer doppelt prüfen.

**3. Konversations-Akkumulation**
In Chat-APIs wird die gesamte Konversationshistorie bei jeder Nachricht mitgeschickt. 50 Nachrichten = 50× der kumulierte Input. Neue Konversation starten, wenn das Thema wechselt.

**4. Extended Thinking / Reasoning vergessen**
Reasoning-Tokens (o3, Claude Extended Thinking) werden als Output abgerechnet. Ein einziger Call kann 10.000+ Thinking-Tokens generieren → $0,15-$0,75 pro Call bei Frontier-Modellen.

### Externes Tracking: Ab Stufe 5

Für Stufe 2 sind die eingebauten Dashboards ausreichend. Wenn du in späteren Stufen mehrere Provider nutzt und Production-Workloads hast, werden externe Tools relevant:

| Tool | Typ | Kosten | Für wen |
|------|-----|--------|---------|
| [Helicone](https://helicone.ai) | OSS/SaaS | Free-Tier verfügbar | Entwickler mit Multi-Provider-Setup |
| [LangSmith](https://smith.langchain.com) | SaaS | Free-Tier verfügbar | LangChain-Nutzer |
| [Portkey](https://portkey.ai) | SaaS | Free-Tier verfügbar | Teams mit AI-Gateway-Bedarf |
| Eigenes Logging | Custom | Gratis | Wer volle Kontrolle will |

**Helicone** ist der Platzhirsch: Ein One-Line-Proxy vor deinem API-Call loggt automatisch Kosten, Latenz und Token-Verbrauch. Open Source und selbst-hostbar. Aber für Stufe 2 definitiv Overkill.

### Kostenlose Nutzung maximieren: Checkliste

- [ ] Accounts bei allen relevanten Providern erstellt (Google, Anthropic, OpenAI)
- [ ] Google AI Studio API-Key erstellt (komplett kostenlos)
- [ ] Startguthaben bei Anthropic und OpenAI aktiviert
- [ ] Hard Limits bei allen Paid-Providern gesetzt
- [ ] Ollama lokal installiert für unbegrenztes Experimentieren
- [ ] Bookmark auf die Dashboard-URLs in deinem Browser

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :hammer_and_wrench: | [Helicone](https://helicone.ai) | OSS Cost-Tracking (für später) |
| :book: | [Anthropic Console](https://console.anthropic.com) | Dashboard + Limit-Setting |
| :book: | [OpenAI Usage](https://platform.openai.com/usage) | Dashboard + Limit-Setting |
| :book: | [Google AI Studio](https://ai.google.dev) | Quota-Übersicht |
| :hammer_and_wrench: | [LangSmith](https://smith.langchain.com) | LangChain-Ökosystem-Tracking |

## Teste dein Verständnis

- [ ] Setze ein Hard Limit von $5 bei mindestens einem Provider. Mache einen Screenshot — das ist Teil deines Portfolio-Eintrags.
- [ ] Schaue in dein Dashboard bei einem Provider: Wie viele Tokens hast du bisher verbraucht? Welches Modell hat am meisten gekostet?
- [ ] Ein Kollege erzählt dir, dass er "$50 in einer Nacht verbraucht hat, weil sein Script durchgelaufen ist". Welche zwei Maßnahmen hätten das verhindert?
