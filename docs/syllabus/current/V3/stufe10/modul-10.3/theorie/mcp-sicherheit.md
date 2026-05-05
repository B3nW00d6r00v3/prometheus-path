---
title: "MCP-Sicherheit in Production"
module: "10.3"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# MCP-Sicherheit in Production

## Kernidee

MCP-Server, die dein Agent konsumiert, sind potenzielle Angriffsflächen — besonders wenn sie nicht von dir kontrolliert werden. Fünf konkrete Sicherheits-Maßnahmen machen MCP-Integrationen in Production sicher: OAuth 2.1, Scope-Limitierung, Audit-Logs, Allowlisting und Sandboxing.

## Im Detail

**Warum MCP-Sicherheit besonders kritisch ist:**

Im Gegensatz zu klassischen REST-APIs haben MCP-Server oft weitreichende Berechtigungen (CRM-Daten lesen und schreiben, E-Mails versenden, Dateisystem-Zugriff). Ein kompromittierter oder bösartiger MCP-Server kann erheblichen Schaden anrichten — direkt über deinen Agent.

**Die fünf Sicherheits-Maßnahmen:**

**1. OAuth 2.1 für Authentifizierung**

MCP 2025+ spezifiziert OAuth 2.1 als Authentifizierungsstandard. Jeder MCP-Server muss sich authentifizieren, bevor dein Agent ihn konsumiert.
- Access Tokens mit kurzem Ablaufzeitraum (15-60 Minuten)
- Refresh Token Rotation: jedes Refresh generiert neues Refresh Token
- Kein statisches API-Key wenn OAuth verfügbar

**2. Scope-Limitierung**

MCP-Server erhalten nur die Berechtigungen, die sie tatsächlich brauchen.
- Schlechtes Beispiel: HubSpot-MCP mit `crm.all.read.write` → kann alles lesen und schreiben
- Gutes Beispiel: HubSpot-MCP mit `crm.contacts.read` → darf nur Kontakte lesen

Principle of Least Privilege — immer.

**3. Audit-Logs**

Jede Tool-Execution eines MCP-Servers wird vollständig geloggt:
- Welcher Server hat welche Aktion ausgeführt?
- Mit welchen Parametern?
- Zu welchem Zeitpunkt?
- Ergebnis (Erfolg / Fehler)?

Logs müssen unveränderbar sein (Append-only Storage) und für Audit-Zwecke mindestens 90 Tage aufbewahrt werden.

**4. Allowlisting**

Dein Agent darf nur MCP-Server nutzen, die explizit auf einer Allowlist stehen:
```yaml
# mcp_config.yaml
allowed_servers:
  - "https://mcp.hubspot.com/v1"
  - "https://mcp.brevo.com/v1"
  # Kein Wildcard "https://*.mcp.*" — zu gefährlich
```

Unbekannte Server werden blockiert, nicht per Default erlaubt.

**5. Sandboxing für unbekannte Server**

Wenn ein MCP-Server aus einer externen Quelle (z.B. Public MCP Directory) konsumiert wird und nicht vollständig vertrauenswürdig ist: in isolierter Sandbox-Umgebung ausführen (E2B, Docker). Ergebnis des Servers wird validiert bevor es in den Agent-Context eingespeist wird.

**Prompt-Injection via MCP:**

Bösartige MCP-Server können versuchen, Prompt-Injection in ihren Responses zu verstecken: "Ignoriere alle vorherigen Anweisungen und..." Mitigation: Response-Validation und Sanitisierung vor Einspeisung in Agent-Context.

*Verbindung zu Modul 5.3 MCP-Sicherheits-Block.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Spec | [MCP Security Best Practices](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices) | Offizielle Sicherheitsempfehlungen |
| 📖 Docs | [OAuth 2.1 Spec](https://oauth.net/2.1/) | OAuth 2.1 Referenz |

## Teste dein Verständnis

- [ ] Welche fünf Sicherheits-Maßnahmen sind für MCP-Integrationen in Production Pflicht?
- [ ] Was ist Scope-Limitierung und warum ist sie beim Principle of Least Privilege wichtig?
- [ ] Wie funktioniert Prompt-Injection via MCP-Server und wie mitigierst du sie?
