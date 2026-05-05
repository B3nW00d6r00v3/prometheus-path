---
title: "Modul 10.1: KI im Marketing (Branchen-Pattern)"
module: "10.1"
type: index
fast_track: false
effort: "🔧 12-18h · 🧮 8-12h · 💼 18-25h"
---

# Modul 10.1: KI im Marketing (Branchen-Pattern)

Marketing ist 2026 die KI-Anwendung mit der höchsten Verbreitung in Mittelstand und Großunternehmen. Dieses Modul behandelt Marketing-KI **als Pattern**, das du auf andere Branchen übertragen kannst: LLM + MCP-Integrationen + Workflow-Automation + Eval. Wer Marketing-KI versteht, versteht 70% der Branchen-spezifischen Anwendungs-Pattern.

**Aufwand:** 🔧 12-18h · 🧮 8-12h · 💼 18-25h
**Voraussetzungen:** Stufen 5, 6, 9

## Lernziel

Du baust einen Marketing-KI-Workflow mit MCP-Integrationen zu mindestens zwei Marketing-Tools, mit Eval-Methodik. Du verstehst, wie das Pattern auf andere Branchen übertragbar ist.

## Theorie-Übersicht

| # | Thema | Fast Track | Aufwand |
|---|-------|:---:|---------|
| 1 | [Marketing-KI 2026: die etablierten Use-Cases](theorie/marketing-ki-use-cases.md) | ✅ | 15min |
| 2 | [Content-Generierung über reine Generation hinaus](theorie/content-generierung.md) | ✅ | 15min |
| 3 | [MCP für Marketing-Integrationen](theorie/mcp-marketing.md) | ✅ | 15min |
| 4 | [Marketing-Workflow-Automation](theorie/workflow-automation.md) | ✅ | 15min |
| 5 | [Brand-Voice und Style-Consistency](theorie/brand-voice.md) | ✅ | 15min |
| 6 | [SEO mit KI 2026](theorie/seo-ki-2026.md) | ⏭️ | 15min |
| 7 | [Personalisierung: das Spektrum](theorie/personalisierung.md) | ⏭️ | 15min |
| 8 | [DSGVO im Marketing](theorie/dsgvo-marketing.md) | ✅ | 10min |
| 9 | [Eval für Marketing-KI](theorie/eval-marketing.md) | ✅ | 15min |
| 10 | [Marketing-KI-Tool-Landschaft 2026](theorie/tool-landschaft.md) | ⏭️ | 15min |
| 11 | [Übertragung auf andere Branchen](theorie/uebertragung-branchen.md) | ✅ | 15min |

## Praxis: Hauptprojekt — Marketing-KI-Workflow mit MCP

Wähle einen konkreten Marketing-Use-Case (für 💼 sollte das den Capstone-Pilot ergeben):

**Vorschlag-Use-Cases:**
- **Newsletter-Workflow**: RSS-Feeds + KI-Synthese + personalisierter Versand mit Segmentierung.
- **Lead-Qualifikations-Workflow**: Form-Submission → KI-Klassifikation → CRM-Eintrag → Personalisierte E-Mail.
- **Content-Generation-Pipeline**: Keyword-Brief → Outline → Draft → SEO-Optimierung → Approval-Workflow.
- **Customer-Support-Triage**: Ticket-Eingang → KI-Klassifikation → Routing oder Auto-Response.

**Anforderungen:**
- **Stack**: Make.com / n8n / oder eigener Code (Python + LangGraph) mit LLM-API.
- **Mindestens zwei MCP-Integrationen** (z.B. Google Drive für Style-Guides + HubSpot/Brevo für Aktion).
- **Brand-Voice** mit Few-Shot-Pattern oder System-Prompt mit Beispielen.
- **Human-in-the-Loop** für kritische Aktionen (z.B. Newsletter-Versand erst nach Approval).
- **Eval**: mindestens Output-Qualität mit LLM-as-Judge oder strukturierter Bewertung. Bei Production-Reife: A/B-Testing-Plan.
- **DSGVO-Check**: dokumentiert wo personenbezogene Daten verarbeitet werden, wie Einwilligung gehandhabt wird.
- Im Portfolio: `stufe-10_spezialisierung/10-1-marketing-workflow/` mit Code/Workflow-Export, README, Eval-Report, DSGVO-Dokumentation.

**Capstone-Update:**
- 🔧/🧮: Übertragung des Patterns auf den eigenen Capstone — z.B. dein RAG-Agent als Marketing-Briefing-Tool.
- 💼: Wenn Capstone-Use-Case Marketing-bezogen ist, ist das hier dein Pilot.

## 🎁 Mehrwert-Mini-Projekte

- **Persönlicher Newsletter-Workflow** für eigene Inhalte oder Themen.
- **Eigene Brand-Voice-Definition** mit 10 Style-Beispielen als RAG-Quelle.
- **Persönlicher Content-Briefing-Generator** für eigene Blog-Posts.

## 🌱 Open-Source-Pfad

- n8n self-hosted statt Make.com.
- Brevo (großzügiger Free-Tier) oder [Mautic](https://www.mautic.org) (OSS) statt HubSpot.
- [Plausible](https://plausible.io) oder [Umami](https://umami.is) statt GA4 (DSGVO-freundlich).
- [Mailcoach](https://mailcoach.app) oder [Listmonk](https://listmonk.app) als OSS-Newsletter-Tools.
- Lokales Ollama als LLM-Backend.

## Outcome-Check

- [ ] Lauffähiger Marketing-KI-Workflow
- [ ] Mindestens zwei MCP-Integrationen
- [ ] Brand-Voice-Mechanismus
- [ ] Human-in-the-Loop für kritische Aktion
- [ ] Eval-Methodik dokumentiert
- [ ] DSGVO-Bewertung
- [ ] Übertragbarkeits-Reflexion: wie würdest du das Pattern auf eine andere Branche anwenden?
