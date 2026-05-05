---
title: "Human-in-the-Loop als Sicherheits-Mechanismus"
module: "6.2"
type: theorie
fast_track: true
effort: "10min"
stability: green
---

# Human-in-the-Loop als Sicherheits-Mechanismus

## Kernidee

Kritische Aktionen — E-Mails senden, Datenbankeinträge schreiben, Geldtransaktionen — brauchen Mensch-Bestätigung, bevor sie ausgeführt werden. Das Human-in-the-Loop-Pattern stoppt den Agent vor der destruktiven Aktion, zeigt was geplant ist, und wartet auf Freigabe.

## Im Detail

**Das HITL-Pattern:**

```
Agent plant Aktion: "Ich werde jetzt diese E-Mail senden."
    ↓
STOP — Agent pausiert.
Agent zeigt: Empfänger, Betreff, Text, geplante Aktion.
    ↓
User entscheidet:
  - "approve" → Aktion wird ausgeführt
  - "reject" → Aktion wird abgebrochen, Agent wird informiert
  - "modify" → Agent bekommt Feedback und passt an
```

**Wann HITL verpflichtend:**
- Irreduzible Aktionen (E-Mail senden, sicherheitsrelevante Operationen).
- Aktionen mit finanzieller Wirkung.
- Aktionen, die Daten dauerhaft verändern oder löschen.
- Erste Deployments eines neuen Agenten (bis Vertrauen aufgebaut ist).

**LangGraph-Integration:** HITL ist nativ über Checkpoints und Interrupts implementiert. Nach einem Checkpoint kann der Workflow pausiert werden, bis Mensch-Input kommt.

**In Beta-Phase (2026):** Oft manuelles Confirmation via Terminal oder UI-Prompt. In Production: automatisierte Policy-Engine mit Confidence-Thresholds.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [LangGraph — Human-in-the-Loop](https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/) | Native HITL in LangGraph |

## Teste dein Verständnis

- [ ] Nenne drei Aktionen, die immer HITL benötigen.
- [ ] Erkläre den HITL-Approval-Flow mit eigenen Worten.
- [ ] Wie unterscheidet sich HITL in Beta-Phase von einer Production-Policy-Engine?
