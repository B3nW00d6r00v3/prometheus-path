---
title: "Wann ist Experimentation sinnvoll?"
module: "8.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Wann ist Experimentation sinnvoll?

## Kernidee

A/B-Tests sind der Goldstandard für kausale Aussagen — aber sie sind nicht immer die richtige Methode. Controlled Experiments brauchen randomisierbare Treatment-Zuweisungen, ausreichende Samples und vertretbare Experiment-Dauer. Wenn diese Bedingungen nicht erfüllt sind, sind Causal-Inference-Methoden (Difference-in-Differences, Synthetic Control) die bessere Wahl.

## Im Detail

**Wann A/B-Tests funktionieren:**

- Du kannst User (oder andere Einheiten) zufällig in Gruppen aufteilen.
- Du erwartest genug Einheiten für statistische Power (mindestens ein paar hundert).
- Das Experiment kann in vertretbarer Zeit abgeschlossen werden.
- Das Treatment ist ethisch vertretbar (kein Schaden für eine Gruppe).
- Der gemessene Effekt ist kurz- bis mittelfristig sichtbar.

**Wann A/B-Tests problematisch sind:**

| Problem | Beispiel | Alternative |
|---------|---------|------------|
| Zu kleine Sample-Size | B2B-SaaS mit 50 Kunden | Observational Analysis |
| Zu langer Messzeithorizont | Churn-Reduktion (sichtbar erst in 6 Monaten) | Surrogate-Metriken |
| Ethisch problematisch | Schlechtere UX für Kontrollgruppe bei kritischer Funktion | Quasi-Experiment |
| Nicht randomisierbar | Regulatorische Anforderung: alle User gleich behandeln | Difference-in-Differences |
| Netzwerkeffekte | Social Networks (User beeinflussen sich gegenseitig) | Cluster-Randomisierung |

**Die zentrale Frage:**

> "Will ich einen kausalen Effekt messen oder eine Assoziation beschreiben?"

- **Kausal** (A/B-Test): "Ändert dieser neue Button-Text die Conversion Rate?"
- **Assoziativ** (Observational): "Kaufen User, die die FAQ-Seite besuchen, mehr?"

Konfundierung ist die Falle bei Observational Studies: User, die die FAQ besuchen, sind möglicherweise sowieso kaufwilliger — das FAQ bewirkt nicht den Kauf.

**Decision-Framework:**
```
1. Ist randomisierte Zuweisung möglich? → Nein: Quasi-Experiment
2. Ist die Sample-Size ausreichend? → Nein: Qualitative Methoden
3. Ist das Experiment ethisch? → Nein: Redesign oder Beobachtungsstudie
4. Alles ja: A/B-Test
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Buch | [Trustworthy Online Controlled Experiments](https://experimentguide.com) | Kohavi, Tang, Xu — Standardreferenz |
| 📖 Blog | [Microsoft ExP — When Experimentation Fails](https://exp-platform.com) | Praktische Grenzen |

## Teste dein Verständnis

- [ ] Nenne zwei Situationen, in denen A/B-Tests nicht geeignet sind.
- [ ] Was ist der Unterschied zwischen kausaler Aussage und Assoziation?
- [ ] Was sind Netzwerkeffekte und warum erschweren sie klassische A/B-Tests?
- [ ] Warum ist "User, die FAQ besuchen, kaufen mehr" keine kausale Aussage?
