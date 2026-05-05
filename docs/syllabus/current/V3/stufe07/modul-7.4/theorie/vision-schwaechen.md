---
title: "Vision-Schwächen"
module: "7.4"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Vision-Schwächen

## Kernidee

Vision-LLMs haben systematische blinde Flecken. Diese zu kennen verhindert Fehler in Production: präzise räumliche Aufgaben, exaktes Counting, sehr feine Details und kontextuelle Realität sind die häufigsten Schwachstellen.

## Im Detail

**Systematische Schwachstellen 2026:**

**1. Präzises Counting:** Vision-LLMs sind bei mehr als ~5 Objekten unzuverlässig. "Wie viele Äpfel sind im Bild?" → bei 12+ Äpfeln oft falsche Zahl. Für präzises Counting: Object Detection (YOLO) oder spezialisierte Counting-Modelle.

**2. Exakte räumliche Positionen:** "Was ist exakt 3 cm vom Rand entfernt?" oder "Welches Objekt ist das dritte von links?" — Vision-LLMs beschreiben Bilder semantisch, keine exakten Koordinaten. Für Koordinaten: klassische CV.

**3. Sehr feine Details:** Mikroskopie, medizinische Histologie, Satellitenbilder — ohne domänen-spezifisches Fine-Tuning schlechte Performance.

**4. Gesichter und Personen:** Aus Safety-Gründen refused oder eingeschränkt. Personenidentifikation wird meist abgelehnt. Für biometrische Aufgaben: spezialisierte Systeme.

**5. Kontextuelle Realität:** "Was ist außerhalb des Bildrahmens?" oder "Was wird als nächstes passieren?" — Vision-LLMs sehen nur das gegebene Bild.

**6. Konsistenz über Aufrufe:** Zwei identische Anfragen mit demselben Bild können unterschiedliche Beschreibungen ergeben (Stochastizität). Für deterministische Anwendungen: Temperatur auf 0 setzen.

**7. Halluzinationen in Vision:** LLMs können Objekte "sehen", die nicht im Bild sind — besonders bei ambiguösen Situationen. Kritische Anwendungen brauchen Verifikation.

**Konsequenz für Production:** Immer testen auf Edge-Cases. Schwachstellen dokumentieren. Fallback-Strategie definieren (klassische CV oder manuelle Überprüfung).

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📊 Benchmark | [MMBench](https://mmbench.opencompass.org.cn) | Systematischer Vision-Benchmark mit Schwachstellen-Analyse |
| 🌐 Docs | [Anthropic — Vision Limitations](https://docs.claude.com/en/docs/build-with-claude/vision) | Anthropic's eigene Dokumentation der Limits |

## Teste dein Verständnis

- [ ] Warum sind Vision-LLMs bei exaktem Counting >10 Objekte unzuverlässig?
- [ ] Was sind die Hauptgründe für Gesichts-Refusals bei Vision-LLMs?
- [ ] Welche Fallback-Strategie verwendest du, wenn ein Vision-LLM für einen Use-Case zu unzuverlässig ist?
- [ ] Wie kannst du Halluzinationen in Vision-Outputs erkennen und mitigieren?
