---
title: "Wann Reasoning sich lohnt"
module: "2.5"
type: theorie
fast_track: false
effort: "8min"
stability: live
expires: "2026-08"
---

# Wann Reasoning sich lohnt

## Kernidee

Reasoning-Modelle sind wie ein Spezialist: Bei seinem Fachgebiet unschlagbar, bei Routine-Aufgaben überqualifiziert und zu teuer. Mathematik, mehrstufiges Coding, formale Logik — da lohnt es sich. Kreatives Schreiben, einfache Zusammenfassung, Übersetzung — da nicht. Die 30-Sekunden-Regel hilft: Wenn du selbst länger als 30 Sekunden über die Aufgabe nachdenken müsstest, braucht es wahrscheinlich ein Reasoning-Modell.

## Im Detail

### Die Entscheidungs-Matrix

| Aufgaben-Typ | Reasoning-Modell? | Warum? |
|-------------|-------------------|--------|
| Mathematik und formale Logik | **Ja** | Mehrstufige Schlüsse, Beweise, Gleichungssysteme — hier liefern Reasoning-Modelle dramatisch bessere Ergebnisse |
| Mehrstufiges Coding und Debugging | **Ja** | Bug finden, der sich durch mehrere Schichten zieht. Architektur-Entscheidung mit Trade-offs |
| Komplexe Analyse mit Abwägungen | **Ja** | Pro/Contra, Vergleich von Optionen, Risikobewertung |
| Strategische Planung | **Ja** | Projektplanung, Technologie-Evaluierung, Marktanalyse |
| Kreatives Schreiben | **Nein** | Reasoning kann kreatives Schreiben "sterilisieren" — zu analytisch, zu strukturiert |
| Einfache Klassifikation | **Nein** | "Ist das Spam?" braucht kein tiefes Nachdenken |
| Zusammenfassung | **Nein** | Ein klassisches Modell fasst genauso gut zusammen |
| Übersetzung | **Nein** | Kein Reasoning nötig, reine Sprachkompetenz |
| Einfache Frage-Antwort | **Nein** | "Was ist die Hauptstadt von Frankreich?" braucht kein Reasoning |
| Datenextraktion | **Nein** | "Extrahiere alle Daten aus diesem Text" ist Pattern Matching, nicht Reasoning |

### Die 30-Sekunden-Regel

**Faustregel:** Wenn du das Ergebnis selbst in 30 Sekunden hinbekommen hättest, brauchst du kein Reasoning-Modell.

- "Fasse diesen Artikel in 3 Sätzen zusammen" → Kein Reasoning
- "Analysiere die Wechselwirkungen zwischen diesen fünf Medikamenten" → Reasoning
- "Übersetze diesen Satz ins Englische" → Kein Reasoning
- "Warum schlägt dieser Unit-Test auf CI fehl, aber nicht lokal?" → Reasoning

### Grenzfälle: Wo es darauf ankommt

Manche Aufgaben liegen in der Grauzone:

**Code-Generierung:** Einfacher CRUD-Code? Klassisches Modell reicht. Komplexer Algorithmus mit Edge Cases? Reasoning.

**Textanalyse:** Zusammenfassung? Klassisch. Argumentationsanalyse mit Bewertung der logischen Kohärenz? Reasoning.

**Recherche:** Faktensammlung? Perplexity (klassisch). Synthese aus widersprüchlichen Quellen? Reasoning.

### Der praktische Test

Wenn du unsicher bist, ob Reasoning sich lohnt, mach den A/B-Test:

1. Sende denselben Prompt an ein klassisches Modell (z.B. Sonnet ohne Thinking) und an ein Reasoning-Modell (z.B. Sonnet mit Extended Thinking)
2. Vergleiche die Ergebnisse
3. Wenn kein merklicher Qualitätsunterschied: Bleib beim klassischen Modell (günstiger, schneller)
4. Wenn signifikanter Unterschied: Reasoning lohnt sich für diesen Task-Typ

Dokumentiere dein Ergebnis — über die Zeit baust du dir eine persönliche "Reasoning ja/nein"-Heuristik auf.

### Reasoning ist kein Qualitäts-Schalter

Ein häufiges Missverständnis: "Reasoning-Modell = bessere Antwort." Das stimmt nicht pauschal. Reasoning-Modelle sind besser bei Aufgaben, die Reasoning erfordern. Bei Aufgaben, die kein Reasoning brauchen, sind sie nicht besser — manchmal sogar schlechter (weil sie "überdenken" und zu komplex antworten).

*Verfallsdatum: August 2026.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [OpenAI — Reasoning Models](https://platform.openai.com/docs/guides/reasoning) | Use-Case-Empfehlungen |
| :book: | [Anthropic — Extended Thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) | Wann Thinking bei Claude aktivieren |

## Teste dein Verständnis

- [ ] Kannst du fünf Aufgaben nennen, bei denen Reasoning-Modelle klar besser sind?
- [ ] Kannst du fünf Aufgaben nennen, bei denen ein klassisches LLM ausreicht?
- [ ] Verstehst du die 30-Sekunden-Regel und kannst sie anwenden?
- [ ] Hast du den A/B-Test zwischen klassischem und Reasoning-Modell selbst durchgeführt?
