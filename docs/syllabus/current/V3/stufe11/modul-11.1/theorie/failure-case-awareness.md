---
title: "Failure-Case-Awareness als laufende Praxis"
module: "11.1"
type: theorie
fast_track: false
effort: "10min"
stability: yellow
---

# Failure-Case-Awareness als laufende Praxis

## Kernidee

Die Failure-Case-Library aus Modul 9.7 ist kein einmaliges Projekt — sie muss kontinuierlich gepflegt werden. KI-Systeme scheitern laufend, und die Muster dieser Fehler ändern sich mit den Systemen. Wer alle 6 Monate neue Failures sammelt, klassifiziert und auf die eigene Arbeit anwendet, entwickelt einen Instinkt für Risiken, den kein Kurs lehren kann.

## Im Detail

**Warum laufend?** KI-Failures 2024 unterscheiden sich von KI-Failures 2026. Neue Modelle bringen neue Failure-Muster (z.B. multimodale Halluzinationen, Tool-Use-Fehler, Agentic-AI-Seiteneffekte). Wer nur einmal eine Library anlegt, hat ein historisches Dokument, keine lebendige Ressource.

**Review-Rhythmus:** Alle 6 Monate:
1. Neue DE/EU-KI-Failures suchen (Quellen: Medien, Behörden-Berichte, eigene Beobachtungen)
2. Nach dem Schema aus 9.7 klassifizieren (Typ, Ursache, Kontext, Lernpunkt)
3. Relevanz für eigene aktuelle Projekte prüfen: könnte mir dieser Failure-Typ passieren?
4. Ggf. eigene Evaluierungs-Checks anpassen

**Verbindung zu Modul 9.7:** Das Querschnitts-Thema Eval (aus `13_querschnitt_eval.md`) ist die methodische Basis. Wer Eval ernst nimmt, fallen seltener auf Demo-Hype rein — und wer Failures sammelt, weiß, wonach er evalieren muss.

**Quellen für laufende Failure-Cases:**
- Medienberichte (SPIEGEL, SZ, FAZ, heise.de)
- EU AI Act Enforcement-Berichte (wenn verfügbar)
- AI Incident Database ([incidentdatabase.ai](https://incidentdatabase.ai))
- Academics: Alignment Forum, LessWrong (für frontier-relevante Failures)

> *Verfallsdatum: alle 6 Monate — Failure-Pattern ändern sich mit der Technologie.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🗄️ Datenbank | [AI Incident Database](https://incidentdatabase.ai) | Kuratierte KI-Failure-Sammlung |
| 📑 Querschnitt | `13_querschnitt_eval.md` | Methodische Basis für Failure-Analyse |
| 📑 Modul | `09_stufe9.md` Modul 9.7 | Ursprüngliche Failure-Case-Library |

## Teste dein Verständnis

- [ ] Ist dein Failure-Case-Kalender-Reminder (alle 6 Monate) eingerichtet?
- [ ] Kannst du aus dem letzten halben Jahr 2-3 neue KI-Failures benennen, die du gelernt hast?
- [ ] Hast du mindestens einen Failure-Typ identifiziert, der für deine eigenen Projekte relevant ist?
