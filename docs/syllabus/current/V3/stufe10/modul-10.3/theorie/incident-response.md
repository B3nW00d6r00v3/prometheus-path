---
title: "Incident-Response für KI-Apps"
module: "10.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Incident-Response für KI-Apps

## Kernidee

KI-Anwendungen versagen auf neue Weisen: nicht nur Server-Ausfall, sondern auch qualitative Degradation (Eval-Score sinkt), Modell-Provider-Outage, oder Prompt-Injection-Angriffe. Ein guter Incident-Response-Plan deckt alle diese Szenarien ab — und ermöglicht schnelles Handeln ohne Panik.

## Im Detail

**Die fünf Säulen des Incident-Response-Plans:**

**1. Alerting — wann löst ein Alert aus?**

Alerts sind die Frühwarnung. Definiere Schwellenwerte für:
- **Eval-Score in Production** fällt unter Baseline-Schwellenwert (z.B. Faithfulness < 0.75)
- **API-Error-Rate** steigt über 5% (Modell-Provider-Probleme)
- **P95-Latenz** überschreitet 10 Sekunden
- **Cost pro Stunde** überschreitet definiertes Budget-Limit
- **Uptime** des eigenen Services unter 99% (UptimeRobot, Better Uptime)

**2. Kill-Switch — KI-Feature deaktivieren ohne App-Outage**

Jedes KI-Feature muss einen Kill-Switch haben:
```python
# Feature-Flag-Pattern
if feature_flags.get("ai_enabled", True):
    response = llm_call(prompt)
else:
    response = fallback_response()  # statischer Text oder klassische Logik
```

Kill-Switch kann remote über Environment-Variable oder Feature-Flag-Service aktiviert werden, ohne Deployment.

**3. Fallback-Modus — was tun bei Provider-Outage?**

LiteLLM und OpenRouter haben eingebaute Fallback-Ketten. Aber was wenn alle Frontier-Provider ausfallen?
- **Option A**: auf günstigeres, selbst-gehostetes Modell fallen zurück
- **Option B**: auf vereinfachte Logik ohne LLM fallen zurück (Keyword-Matching, statische Antworten)
- **Option C**: Nutzer informieren, Queue aufbauen, später verarbeiten

**4. Post-Mortem — strukturierte Lernkurve**

Jeder signifikante Incident bekommt ein Post-Mortem-Dokument:
- Was ist passiert? (Timeline)
- Warum ist es passiert? (Root Cause)
- Wie wurde es erkannt? (Detection)
- Wie wurde es behoben? (Remediation)
- Was ändern wir? (Action Items mit Owner und Deadline)

**5. Communication Plan — Nutzer informieren**

Bei sichtbaren Problemen:
- **Status-Page**: öffentliche Status-Seite (z.B. mit [Instatus](https://instatus.com) oder [Upptime](https://upptime.js.org))
- **In-App-Banner**: bei längerem Ausfall direkter Hinweis in der App
- **E-Mail**: bei kritischen, nutzerdaten-betreffenden Incidents

**Incident-Severity-Levels:**

| Level | Definition | Reaktionszeit |
|---|---|---|
| P0 (Critical) | Service komplett ausgefallen oder DSGVO-Incident | Sofort, alle verfügbaren Personen |
| P1 (High) | Eval-Score stark degradiert, >10% Nutzer betroffen | < 1 Stunde |
| P2 (Medium) | Einzelne Features nicht funktional, Work-Around vorhanden | < 4 Stunden |
| P3 (Low) | Kleine Qualitäts-Degradation, keine Nutzer-Auswirkung | Nächster Sprint |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🛠️ Tool | [UptimeRobot](https://uptimerobot.com) | Uptime-Monitoring, kostenloser Tier |
| 🛠️ Tool | [Better Uptime](https://betterstack.com) | Incident-Management + Status-Page |
| 📖 Vorlage | [Post-Mortem Template](https://github.com/dastergon/postmortem-templates) | Strukturierte Post-Mortems |

## Teste dein Verständnis

- [ ] Was sind die fünf Säulen eines guten Incident-Response-Plans für KI-Apps?
- [ ] Erkläre das Kill-Switch-Pattern und warum es kein Deployment brauchen darf.
- [ ] Was enthält ein gutes Post-Mortem-Dokument?
