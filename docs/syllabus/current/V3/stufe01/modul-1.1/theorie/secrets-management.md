---
title: "Secrets Management"
module: "1.1"
type: theorie
fast_track: false
effort: "10min"
stability: green
---

# Secrets Management

## Kernidee

Ein "Secret" ist alles, was nicht öffentlich sein darf: API-Keys, Passwörter, Tokens. Die goldene Regel: **Wenn du ein Secret aus Versehen auf GitHub pushst, ist es kompromittiert** — selbst wenn du es sofort löschst, wurde es bereits von Bots gescannt. Deshalb: von Anfang an richtig machen, nicht nachträglich reparieren.

## Im Detail

**Lokal:** `.env`-Datei + `.gitignore` — der Standard für Entwicklung.

```bash
# .env (nie committen!)
ANTHROPIC_API_KEY=sk-ant-api03-...
OPENAI_API_KEY=sk-proj-...

# .gitignore (immer committen!)
.env
.env.*
*.key
```

**Für Production (später relevant):** Cloud Secret Manager (AWS Secrets Manager, Google Secret Manager, Azure Key Vault). Hier werden Secrets verschlüsselt gespeichert und per API abgerufen — nicht als Datei auf dem Server.

**Wenn es passiert ist:** Secret sofort rotieren (neuen Key erstellen, alten deaktivieren). Den Git-Verlauf zu bereinigen reicht nicht — automatische Scanner haben es bereits gelesen.

**Proaktiver Schutz:**

- GitHub Secret Scanning (automatisch aktiviert für Public Repos)
- `git-secrets` Tool (pre-commit Hook, verhindert versehentliches Committen)

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Docs | [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning) | Automatische Erkennung |
| 🛠️ Tool | [git-secrets](https://github.com/awslabs/git-secrets) | Pre-commit Hook |
| 📖 Guide | [OWASP Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) | Best Practices |

## Teste dein Verständnis

- [ ] Warum reicht "Secret löschen + neuer Commit" nicht?
- [ ] Was steht in deiner `.gitignore`?
- [ ] Weißt du, was du tun musst, wenn ein Key geleakt ist?
