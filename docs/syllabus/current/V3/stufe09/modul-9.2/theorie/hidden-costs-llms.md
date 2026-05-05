---
title: "Hidden Costs of LLMs"
module: "9.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Hidden Costs of LLMs

## Kernidee

Neben direkten API-Kosten entstehen bei LLM-basierten Systemen vier Kategorien versteckter Kosten, die im Business Case regelmäßig fehlen — und die zusammen oft mehr kosten als die sichtbaren Kosten.

## Im Detail

**Vier Kategorien versteckter LLM-Kosten:**

1. **Eval-Kosten** — bei jedem Modell-Wechsel, Prompt-Change oder Daten-Update muss das System re-evaluiert werden. Eval ist kein einmaliger Aufwand, sondern ein kontinuierlicher Prozess. 10-20% des Entwicklungsbudgets für Eval ist realistisch.

2. **Embedding-Re-Generierung bei RAG** — wenn das Embedding-Modell wechselt (wegen Qualitätsverbesserung oder Kostengründen), müssen alle Dokumente neu eingebettet werden. Bei großen Dokumentenbeständen: erheblicher Compute- und Zeitaufwand.

3. **Context-Caching-Setup** — Context-Caching (Vorabberechnung häufiger Prefixes) spart Kosten ab gewissem Volumen, erfordert aber Setup und Wartung. Lohnt sich nicht für alle Use-Cases.

4. **Fallback-Cost bei Provider-Ausfall** — wenn der primäre Provider einen Outage hat, braucht es einen Fallback (anderer Provider, Retry-Logik). Fallback-Infrastruktur hat eigene Kosten und Komplexität.

**Praxis-Tipp:** Alle vier Kategorien im TCO explizit ausweisen — auch wenn die Zahlen geschätzt sind. Transparenz über Unsicherheiten ist besser als implizite Null-Annahme.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Modul | [Modul 5.0: RAG-Grundlagen](../../modul-9.0/index.md) | Kontext für Embedding-Re-Generierung |

## Teste dein Verständnis

- [ ] Schätze die Eval-Kosten für ein System mit monatlichem Prompt-Update und 500 Testfällen.
- [ ] Warum ist ein Embedding-Modell-Wechsel bei einem RAG-System mit 50.000 Dokumenten ein erhebliches Risiko?
- [ ] Wann lohnt sich Context-Caching — und wann nicht?
