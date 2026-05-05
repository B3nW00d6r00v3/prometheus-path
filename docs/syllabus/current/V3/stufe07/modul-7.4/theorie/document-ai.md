---
title: "Document AI mit Layout-Verständnis"
module: "7.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Document AI mit Layout-Verständnis

## Kernidee

Moderne multimodale Modelle (Claude, Gemini) verstehen PDFs mit Layout — Tabellen, Spalten, Bilder, Kopf- und Fußzeilen — nativ. Für Production-Volumina bleiben spezialisierte Document-AI-Services (AWS Textract, Azure Document Intelligence) relevant. Die Wahl hängt von Volumen, Komplexität und Cost ab.

## Im Detail

**Native PDF-Unterstützung der Frontier-Modelle:**

- **Claude (Anthropic):** Native PDF-Unterstützung inkl. Bilder im PDF. Sehr gut bei komplexen Tabellen, mehrspaltigem Layout, wissenschaftlichen Dokumenten.
- **Gemini (Google):** Native multimodale PDFs, sehr großer Context (2M Tokens → ganze PDF-Bibliotheken).
- **GPT-5 (OpenAI):** Native PDF-Analyse seit 2024.

**Was "Layout-Verständnis" bedeutet:**
- Tabellen mit zusammengeführten Zellen korrekt extrahieren.
- Mehrspaltige Layouts richtig lesen (Zeitung, Jahresbericht).
- Bilder im PDF beschreiben.
- Fußnoten und Referenzen korrekt zuordnen.
- Formular-Felder extrahieren.

**Spezialisierte Document-AI-Tools für Production-Volumina:**
- **AWS Textract** — OCR + Tabellen-Extraktion + Formular-Erkennung. Robust, skaliert auf Millionen Dokumente.
- **Azure Document Intelligence** — Microsoft's Äquivalent, gut in Office-Dokumenten.
- **Google Document AI** — integriert in Google Cloud.

**Wann was wählen:**

| Szenario | Empfehlung |
|----------|-----------|
| <1000 Dokumente/Monat, komplex | Claude/Gemini direkt |
| >100.000 Dokumente/Monat | AWS Textract oder Azure |
| Standardisierte Formulare | Spezialisierte Document-AI |
| Wissenschaftliche Paper | Claude (beste Tabellen-Extraktion) |
| Große PDF-Archive | Gemini (2M Token Context) |

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 🌐 Docs | [Anthropic — PDF Support](https://docs.claude.com/en/docs/build-with-claude/pdf-support) | Claude Native PDF |
| 🌐 Docs | [AWS Textract](https://aws.amazon.com/textract/) | Für Volumen-Anwendungen |
| 🌐 Docs | [Azure Document Intelligence](https://azure.microsoft.com/services/form-recognizer/) | Microsoft-Äquivalent |

## Teste dein Verständnis

- [ ] Was bedeutet "Layout-Verständnis" bei PDFs — was kann ein LLM, was klassisches OCR nicht kann?
- [ ] Wann ist ein spezialisierter Document-AI-Service besser als ein multimodales LLM?
- [ ] Welches Frontier-Modell hat den größten Context für lange PDF-Dokumente?
- [ ] Wie würdest du eine Rechnungs-Verarbeitungs-Pipeline für 10.000 Rechnungen/Monat aufbauen?
