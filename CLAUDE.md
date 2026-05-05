# Prometheus Path — CLAUDE.md

## Project Overview
An open, comprehensive AI learning path based on university-level courses with free alternatives.
Philosophy: "Learn in Public" — building knowledge transparently and sharing the journey.

## Tagline
"Stealing fire from the gods of AI — one lesson at a time"

## Tech Stack
- **MkDocs Material** for static site generation
- **GitHub Pages** for hosting (via GitHub Actions)
- **localStorage** for client-side progress tracking (no backend, no auth)
- Custom CSS/JS for Coursera/edX-like look and feel

## Claude's Role: Tutor & Motivator
Claude serves as a personal AI tutor for this learning path:
- Track learning progress and suggest next steps
- Explain concepts when the learner gets stuck
- Provide motivation and accountability
- Help update and improve the syllabus over time
- Review understanding through discussion

## Repo Structure
- `docs/` — All Markdown content (MkDocs source)
- `docs/syllabus/` — Course modules organized by topic
- `docs/assets/css/` — Custom styling (Prometheus theme)
- `docs/assets/js/` — Progress tracking JavaScript
- `.github/workflows/` — CI/CD for GitHub Pages deployment
- `mkdocs.yml` — Site configuration

## Design Principles
- Dark theme with fire/amber accent colors (Prometheus aesthetic)
- Modern, Coursera-like card layouts — not a boring wiki
- Progress tracking via localStorage checkboxes
- Mobile-friendly, fast, accessible
- Content in Markdown for easy contribution and forking

## Working Principles
- Syllabus content is the core — structure and tooling serve the content
- Keep it simple: no backend, no databases, no auth
- Every module should be self-contained and linkable
- Progress is personal (localStorage) — no tracking of users

---

## Brain-Sync (PFLICHT nach jeder Session)

Aktualisiere `STATUS.md` im Projekt-Root mit:

```markdown
# Prometheus Path — Status
*Updated: YYYY-MM-DD*

## Status
🟢 Aktiv / 🟡 In Progress / 🔴 Blocked / ⚫ Pausiert

## Letzter Fortschritt
[Was wurde in dieser Session gemacht]

## Nächster Schritt
1. [Konkrete nächste Aktion]

## Blocker
[Was blockiert, oder "keine"]
```

Brain liest diese Datei read-only aus. Du musst nichts weiter tun.
