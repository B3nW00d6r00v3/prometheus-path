---
title: "Was ein LLM grundsätzlich tut: Wahrscheinlichkeits-Vorhersage"
module: "2.1"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Was ein LLM grundsätzlich tut: Wahrscheinlichkeits-Vorhersage

## Kernidee

Stell dir die beste Autovervollständigung der Welt vor: Du tippst den Anfang eines Satzes, und das System berechnet das wahrscheinlichste nächste Wort. Dann nimmt es dieses Wort dazu und berechnet das nächste. Und so weiter, Wort für Wort. Ein LLM macht genau das — nur mit Milliarden gelernter Muster und über ganze Absätze, Seiten, sogar Bücher hinweg. Es "versteht" nichts im menschlichen Sinne — es berechnet Wahrscheinlichkeiten.

## Überblick

| Aspekt | Was du wissen musst |
|--------|-------------------|
| Grundfunktion | Vorhersage des nächsten Tokens basierend auf dem bisherigen Kontext |
| Parameter | GPT-4 hat ~1,8 Billionen Parameter, Llama 3 70B hat 70 Milliarden — diese Zahlen beschreiben die "Stellschrauben" im Netzwerk |
| Training | Monate auf tausenden GPUs, mit Billionen von Tokens aus dem Internet |
| Inferenz | Ein einziger API-Call erzeugt die Antwort Token für Token in Millisekunden |
| Emergenz | Ab einer gewissen Größe zeigen LLMs Fähigkeiten, die nicht explizit trainiert wurden (z.B. Übersetzen, Rechnen) |

## Im Detail

### Wie die Vorhersage funktioniert

Ein LLM bekommt eine Eingabe (deinen Prompt) und berechnet für jedes mögliche nächste Token eine Wahrscheinlichkeit. Bei GPT-4o gibt es etwa 100.000 mögliche Tokens im Vokabular. Das Modell berechnet für jedes einzelne eine Wahrscheinlichkeit — "der" hat vielleicht 12%, "die" hat 8%, "ein" hat 5%, und so weiter. Dann wird eines ausgewählt (wie genau, das erklärt die Seite zu Temperature).

Dieser Vorgang wiederholt sich für jedes Token der Antwort. Das Modell sieht immer den gesamten bisherigen Text (Prompt + bereits generierte Antwort) und berechnet das nächste Token. Deshalb wird die Antwort in Chat-Interfaces Wort für Wort "getippt" — das ist keine Animation, das ist der tatsächliche Generierungsprozess.

### Was "Milliarden Parameter" bedeutet

Parameter sind die gelernten Gewichte im neuronalen Netzwerk — wie Einstellungen an Milliarden von Reglern. Während des Trainings werden diese Regler so justiert, dass das Modell statistische Muster in Texten erkennt. Mehr Parameter bedeutet: mehr Muster, feinere Unterscheidungen, bessere Antworten — aber auch mehr Rechenpower und höhere Kosten.

Größenordnungen (Stand Mai 2026):

- **Klein:** 1-8B Parameter (Llama 3.2 3B, Gemma 3 4B) — laufen auf Laptops
- **Mittel:** 8-70B Parameter (Llama 4 Scout 17B, Qwen 3 72B) — brauchen starke GPUs
- **Groß:** 70B-600B+ Parameter (Llama 4 Behemoth, DeepSeek V4) — Cluster nötig
- **Frontier:** Architektur nicht veröffentlicht (GPT-4o, Claude Opus 4.7, Gemini 2.5 Ultra) — Schätzungen liegen bei 200B-1,8T

### Warum es wie "Verstehen" aussieht — aber keins ist

Wenn ein LLM auf "Was ist die Hauptstadt von Frankreich?" mit "Paris" antwortet, dann nicht, weil es "weiß", was eine Hauptstadt ist. Es hat in seinen Trainingsdaten milliardenfach den Zusammenhang "Hauptstadt + Frankreich → Paris" gesehen. Die Wahrscheinlichkeit für "Paris" als nächstes Token ist extrem hoch.

Das erklärt auch, warum LLMs bei seltenen oder neuen Fakten versagen: Wenn ein Zusammenhang in den Trainingsdaten kaum vorkommt, hat das Modell keine starke Wahrscheinlichkeit gelernt — und rät dann auf Basis ähnlicher Muster, oft falsch (→ Halluzinationen).

### Base Model vs. Chat Model

Ein "rohes" LLM (Base Model) kann nur eines: Text fortsetzen. Wenn du ihm "Was ist KI?" gibst, schreibt es vielleicht einen Wikipedia-Artikel weiter oder stellt weitere Fragen — es antwortet nicht im Dialog-Format. Erst durch zusätzliches Training (Instruction Tuning, RLHF) lernt ein Modell, auf Fragen zu antworten, Anweisungen zu befolgen und sich wie ein Assistent zu verhalten. ChatGPT, Claude und Gemini sind Chat-Modelle — sie wurden nach dem Basis-Training speziell für Konversation nachtrainiert.

### Die Rolle von RLHF (Reinforcement Learning from Human Feedback)

Nach dem Basis-Training wird das Modell von menschlichen Bewertern "erzogen": Sie bewerten Antworten als hilfreich/unhilfreich, sicher/unsicher. Das Modell lernt daraus, welche Art von Antworten bevorzugt wird. Das ist der Grund, warum Claude höflich antwortet, Disclamer gibt und ablehnt, Anleitungen für gefährliche Dinge zu geben — das wurde durch RLHF antrainiert, nicht durch die Grundarchitektur.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :movie_camera: | [3Blue1Brown — But what is a GPT? (26 Min)](https://www.youtube.com/watch?v=wjZofJX0v4M) | Visuelle Erklärung der Grundmechanik — Pflicht-Video |
| :movie_camera: | [3Blue1Brown — Attention in Transformers (27 Min)](https://www.youtube.com/watch?v=eMlx5fFNoYc) | Vertiefung: wie Attention funktioniert |
| :book: | [Jay Alammar — The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) | Beste visuelle Erklärung der Transformer-Architektur |
| :book: | [Stephen Wolfram — What Is ChatGPT Doing?](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/) | Tiefe, aber zugängliche Erklärung |
| :hammer_and_wrench: | [LLM Visualization (Brendan Bycroft)](https://bbycroft.net/llm) | Interaktive 3D-Visualisierung eines kleinen LLM |

## Teste dein Verständnis

- [ ] Erkläre in eigenen Worten, warum ein LLM auf dieselbe Frage unterschiedliche Antworten geben kann — was genau passiert bei der Token-Generierung?
- [ ] Was ist der Unterschied zwischen einem Base Model und einem Chat Model? Warum kannst du mit einem Base Model nicht "normal chatten"?
- [ ] Warum sagt man, ein LLM "versteht" nichts, obwohl es oft korrekte und sogar kreative Antworten gibt? Was wäre ein Gegenargument?
