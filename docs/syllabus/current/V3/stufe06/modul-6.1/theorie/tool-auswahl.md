---
title: "Tool-Auswahl: was wird ein Tool?"
module: "6.1"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Tool-Auswahl: was wird ein Tool?

## Kernidee

Nicht alles, was ein Agent tun könnte, sollte als Tool implementiert werden. Tools sind für deterministische, klar definierte Operationen gedacht — nicht für Reasoning, Kreativität oder komplexe Multi-Step-Logik. Die richtige Tool-Auswahl ist oft der Unterschied zwischen einem robusten und einem fragilen Agenten.

## Im Detail

**Was eignet sich als Tool (Ja-Liste):**
- **Web-Search**: deterministisch, klare Input/Output-Schnittstelle.
- **Datenbankabfragen**: SQL oder Vektorsuche — deterministische Ergebnisse.
- **Rechner / Code-Ausführung**: mathematische Operationen, Python-Berechnungen.
- **File-Read/Write**: Dateisystem-Operationen mit klar definierten Pfaden.
- **API-Calls**: HTTP-Requests zu externen Services mit definierten Schemas.
- **E-Mail / Kalender**: definierte Aktionen mit klaren Parametern.

**Was sich NICHT als Tool eignet (Nein-Liste):**
- **Kreative Aufgaben** — "schreibe einen Text" ist eine Reasoning-Aufgabe, kein Tool-Call.
- **Reasoning selbst** — "überlege, was als nächstes zu tun ist" macht der Agent selbst.
- **Zu komplexe Multi-Step-Operationen** — lieber als Sub-Agent auslagern.
- **Nicht-deterministische Entscheidungen** — das gehört ins System-Prompt, nicht in ein Tool.

**Faustregel:** Wenn du das Tool mit einem Unit-Test testen kannst (klar definierbarer Input → erwartbarer Output), ist es ein gutes Tool. Wenn nicht, ist es wahrscheinlich Reasoning-Logik.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Anthropic — Tool Use Overview](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview) | Tool Use Best Practices |
| 📖 Artikel | [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) | Tool-Auswahl-Prinzipien |

## Teste dein Verständnis

- [ ] Nenne drei Beispiele für gute Tools und begründe, warum sie sich eignen.
- [ ] Warum sollte „schreibe einen Text" kein Tool sein?
- [ ] Wie entscheidest du, ob eine Operation als Tool oder als Sub-Agent implementiert werden soll?
