---
title: "Idempotenz und Rollback"
module: "10.3"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Idempotenz und Rollback

## Kernidee

Bei kritischen Agent-Aktionen — einen Newsletter versenden, einen Datenbankdatensatz löschen, eine Zahlung auslösen — muss jede Aktion entweder idempotent sein (mehrfache Ausführung = gleicher Effekt) oder einen Rollback-Pfad haben. Ohne diese Garantien ist ein Production-Agent ein unkontrollierbares System.

## Im Detail

**Das Problem bei Agent-Aktionen:**

Agents operieren in mehrschrittigen Workflows. Wenn Schritt 3 von 5 fehlschlägt und der Agent neu startet, welche Schritte wurden schon ausgeführt? Wenn ein Retry-Mechanismus greift — hat Schritt 2 jetzt zweimal ausgeführt?

**Idempotenz — Definition und Umsetzung:**

Eine Operation ist idempotent, wenn sie mehrfach mit demselben Ergebnis ausgeführt werden kann.

**Natürlich idempotent:**
- `UPDATE user SET status='active' WHERE id=42` — mehrfach ausführbar, gleicher Effekt
- `PUT /api/users/42 {"status": "active"}` — REST PUT ist per Design idempotent

**Nicht idempotent (Problem):**
- `INSERT INTO orders ...` — mehrfach → mehrere Datensätze
- `POST /api/send-email` — mehrfach → mehrere E-Mails

**Idempotenz erzwingen:**
- **Idempotency Keys**: eindeutiger Key pro Aktion, Server prüft ob Key schon verarbeitet wurde
- **State-Check vor Aktion**: prüfe ob Aktion schon ausgeführt wurde: `if not already_done: execute()`
- **Upsert statt Insert**: `INSERT OR REPLACE`, `ON CONFLICT DO UPDATE`

**Rollback-Pattern:**

Für Aktionen, die nicht idempotent gemacht werden können:

```
Schritt 1: Aktion vorbereiten (reversibel)
Schritt 2: Validierung (alle Vorbedingungen erfüllt?)
Schritt 3: Aktion ausführen
Schritt 4: State aktualisieren (committed)
Schritt 5: Bei Fehler in Schritt 3-4: Compensation-Aktion ausführen
```

**Compensation-Aktionen:**
- Newsletter versendet, aber nachfolgende Datenbank-Aktualisierung schlägt fehl → Compensation: Fehler loggen, Alert, manueller Fix-Pfad
- Zahlung ausgelöst, aber Bestellung konnte nicht erstellt werden → Compensation: automatische Rückerstattung

**Saga-Pattern** (fortgeschrittene Alternative):
- Jede Aktion in einem Workflow hat eine definierte Compensation-Aktion
- Bei Fehler werden Compensations rückwärts ausgeführt
- Standard-Pattern aus Distributed Systems, anwendbar auf Agent-Workflows

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Artikel | [Saga Pattern](https://microservices.io/patterns/data/saga.html) | Distributed Systems Patterns |

## Teste dein Verständnis

- [ ] Was bedeutet Idempotenz und nenne ein Beispiel für eine nicht-idempotente Operation.
- [ ] Wie erzwingst du Idempotenz bei einer E-Mail-Versand-Aktion?
- [ ] Erkläre das Compensation-Aktions-Pattern an einem konkreten Beispiel.
