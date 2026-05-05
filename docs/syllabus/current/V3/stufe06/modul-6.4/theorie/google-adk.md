---
title: "Google ADK (Agent Development Kit)"
module: "6.4"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Google ADK (Agent Development Kit)

## Kernidee

Googles Agent Development Kit (ADK) ist neuer als Claude Agent SDK und OpenAI Agents SDK, integriert eng mit Vertex AI und bietet starke Multimodal- und Search-Grounding-Fähigkeiten. MCP-Support seit 2026 macht es interoperabel. Für Google-zentrische Stacks (Workspace, BigQuery, Cloud) ist ADK der natürliche Ausgangspunkt.

## Im Detail

**Was ADK von den anderen Vendor-SDKs unterscheidet:**

**Vertex AI Integration:**
- ADK läuft nativ auf Google Cloud.
- Direkte Integration mit BigQuery, Cloud Storage, Pub/Sub als Tool-Targets.
- Vertex AI Eval-Framework für Agent-Bewertung eingebaut.
- Wichtig für Enterprises, die already in Google Cloud sind.

**Multimodal-Stärken:**
- Gemini ist nativ multimodal — Bilder, Audio, Video als Agent-Input ohne Extra-Wrapper.
- Gut für Agents, die auf nicht-textuellen Daten arbeiten (Bild-Analyse, Audio-Transkription).

**Search-Grounding:**
- Agenten können direkt gegen Google Search grunden — kein separates Retrieval-Setup nötig für Web-Recherche.
- Grounding-Attribute: der Agent weiß, welche Aussagen durch Suchen abgesichert sind.

**MCP-Support (seit 2026):**
- ADK-Agents können MCP-Server als Tools nutzen.
- Deine MCP-Tool-Definitionen aus Modul 5.3 funktionieren also auch in ADK.

**Multi-Agent-Patterns:**
- ADK unterstützt Supervisor-Worker-Patterns nativ.
- Koordination zwischen Gemini-Modellen und anderen Backends (hybrid).

**Schwächen:**
- Jüngeres SDK, weniger Community-Ressourcen als LangGraph oder OpenAI SDK.
- Stärker Vertex-AI-zentrisch — außerhalb von Google Cloud weniger attraktiv.
- Lernkurve für Teams ohne Google Cloud Erfahrung.

*Verfallsdatum: Nov 2026 — aktiv in Entwicklung.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [Google ADK Docs](https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder) | Offizielle Dokumentation |
| 📖 Konzept | [Google Project Mariner](https://deepmind.google/technologies/project-mariner/) | Googles Browser-Agent |

## Teste dein Verständnis

- [ ] Für welche Unternehmens-Konstellation ist Google ADK besonders attraktiv — und warum?
- [ ] Was ist Search-Grounding — und warum ist es für Research-Agents wertvoll?
- [ ] Wie ermöglicht MCP-Support die Interoperabilität zwischen ADK und anderen SDKs?
