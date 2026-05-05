---
title: "Confirmation-Pattern für destruktive Aktionen"
module: "6.5"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Confirmation-Pattern für destruktive Aktionen

## Kernidee

Computer-Use-Agents können irreversible Aktionen ausführen — E-Mails senden, Dateien löschen, Formulare mit finaler Absenden-Schaltfläche. Für diese Aktionen ist ein Confirmation-Step Pflicht: der Agent stoppt, zeigt den Screenshot mit der geplanten Aktion, und wartet auf explizite Bestätigung bevor er fortfährt.

## Im Detail

**Was eine "destruktive Aktion" ist:**
- **Finanziell:** Einkauf, Buchung, Überweisung.
- **Kommunikation:** E-Mail senden, Nachricht posten, Formular absenden.
- **Datei-System:** Datei löschen, Datei überschreiben.
- **Authentifizierung:** Passwort ändern, Account schließen.
- **Irreversibel:** alles, was nicht einfach rückgängig gemacht werden kann.

**Das Confirmation-Pattern:**

```python
if agent.is_destructive_action(next_action):
    # Agent stoppt
    confirmation = await user.confirm(
        action_description=next_action.describe(),
        screenshot=current_screenshot,
        prompt="Soll ich diese Aktion ausführen? [ja/nein/ändern]"
    )
    if confirmation == "ja":
        agent.execute(next_action)
    elif confirmation == "nein":
        agent.skip(next_action)
    elif confirmation == "ändern":
        agent.modify(next_action, user_input=await user.get_modification())
```

**Klassifikation destruktiver Aktionen:**
- Einfache Heuristik: Buttons mit Text "Senden", "Kaufen", "Löschen", "Bestätigen", "Absenden".
- LLM-as-Judge: beschreibe die geplante Aktion, frage ein zweites LLM: "Ist das destruktiv?"
- Whitelist: nur explizit definierte Aktionen ohne Confirmation erlaubt (z.B. "Scrollen ist erlaubt").

**Beta-Stadium 2026 — pragmatische Strategie:**
In der Praxis 2026 ist manuelles Confirmation die robusteste Option für sensible Use-Cases. Vollautomatisierte Policy-Engines (die automatisch entscheiden, was destruktiv ist) sind noch nicht ausgereift.

**Human-in-the-Loop als Fallback:**
Wenn unsicher, ob eine Aktion destruktiv ist: Human-in-the-Loop aktivieren. Besser einmal zu viel fragen als einmal zu wenig.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LangGraph — Human-in-the-Loop](https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/) | HITL-Pattern |
| 📖 Modul | [Modul 6.2 — Human-in-the-Loop](../../../modul-6.2/theorie/human-in-the-loop.md) | Allgemeines HITL-Pattern |

## Teste dein Verständnis

- [ ] Nenne vier Kategorien destruktiver Aktionen, die einen Confirmation-Step erfordern.
- [ ] Skizziere den Ablauf des Confirmation-Patterns in Pseudocode.
- [ ] Warum ist in der Beta-Phase 2026 manuelles Confirmation besser als automatisierte Policy-Engines?
