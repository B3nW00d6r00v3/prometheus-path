---
title: "DSGVO-Basics für KI-Nutzer"
module: "2.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# DSGVO-Basics für KI-Nutzer

## Kernidee

Wenn du Text in ein Cloud-LLM tippst, verlassen diese Daten deinen Rechner und landen auf Servern in den USA (OpenAI, Anthropic) oder anderswo. Für private Nutzung ist das kein Problem. Sobald du aber Kundendaten, Mitarbeiter-Informationen oder andere personenbezogene Daten eingibst, greift die DSGVO — und die kennt kein Pardon. Fünf Regeln zum Mitnehmen, kein Jura-Studium nötig — nur Bewusstsein.

## Im Detail

### Was passiert mit deinen Daten?

Es gibt zwei verschiedene Phasen bei der KI-Nutzung, die du unterscheiden musst:

**Training:** Manche Anbieter nutzen deine Chat-Eingaben, um ihre Modelle zu verbessern. Das bedeutet: Was du eingibst, kann in zukünftige Modellversionen einfließen. Ob dein Anbieter das tut, hängt von den Nutzungsbedingungen ab:

- **OpenAI (ChatGPT Free/Plus):** Nutzt Chats standardmäßig zum Training. Opt-Out möglich über Settings → Data Controls → "Improve the model for everyone" deaktivieren. API-Nutzung wird nicht zum Training verwendet.
- **Anthropic (Claude Free/Pro):** Nutzt Chats standardmäßig zum Training bei der Free-Version. Pro-Nutzer können per Opt-Out widersprechen. API-Nutzung wird nicht zum Training verwendet.
- **Google (Gemini):** Nutzt Chats in der Free-Version zum Training. Gemini Advanced bietet Opt-Out. Workspace-Integration hat separate Richtlinien.

**Inference (Anwendung):** Deine Daten werden an den Server geschickt, dort verarbeitet und die Antwort zurückgesendet. Auch wenn die Daten nicht zum Training genutzt werden, liegen sie temporär auf fremden Servern — oft in den USA.

### Die fünf DSGVO-Regeln für KI-Nutzer

**Regel 1: Keine personenbezogenen Daten in Cloud-LLMs ohne Rechtsgrundlage**

Personenbezogene Daten sind alles, was eine Person identifizierbar macht: Name, E-Mail, Adresse, Geburtsdatum, Gesundheitsdaten, IP-Adressen. Gibst du die in ein Cloud-LLM ein, ist das eine Datenverarbeitung — und die braucht eine Rechtsgrundlage nach Art. 6 DSGVO.

*Praxis-Beispiel:* Du willst eine Kunden-E-Mail umformulieren und kopierst sie in ChatGPT — inklusive Name, E-Mail und Vertragsnummer. Das ist eine Übermittlung personenbezogener Daten an einen US-Anbieter. Ohne passende Rechtsgrundlage ein DSGVO-Verstoß.

**Regel 2: Firmen brauchen Auftragsverarbeitungs-Verträge (AVV)**

Wenn dein Arbeitgeber KI-Tools im Geschäftsbetrieb nutzt, muss ein AVV (Auftragsverarbeitungsvertrag nach Art. 28 DSGVO) mit dem Anbieter bestehen. OpenAI, Anthropic und Google bieten Enterprise-Tarife mit AVV an — die Consumer-Versionen reichen für geschäftliche Nutzung mit personenbezogenen Daten nicht aus.

**Regel 3: Lokale Modelle sind DSGVO-freundlicher**

Wenn du ein Modell via Ollama lokal auf deinem Rechner laufen lässt, verlassen die Daten nie deinen Computer. Keine Datenübermittlung = keine DSGVO-relevante Verarbeitung durch Dritte. Für sensible Daten ist das der sicherste Weg.

**Regel 4: Recht auf Löschung gilt auch für Vektordatenbanken**

Wenn du ein RAG-System baust, das Kundendaten in einer Vektordatenbank (Pinecone, Weaviate, ChromaDB) speichert, musst du auf Lösch-Anfragen reagieren können. "Die Daten sind embedded, ich kann sie nicht rausziehen" ist keine gültige Ausrede.

**Regel 5: Dokumentation wird zunehmend Pflicht**

Der EU AI Act fordert zunehmend Transparenz und Dokumentation bei KI-Nutzung. Welche Modelle setzt du ein? Für welche Zwecke? Welche Daten fließen ein? Eine interne KI-Policy ist für Unternehmen ab 2026 de facto Pflicht.

### Für deinen Lern-Pfad: Pragmatische Regeln

- **Private Nutzung:** Für dein eigenes Lernen kannst du Cloud-LLMs frei nutzen — solange du keine Daten anderer Personen eingibst.
- **Berufliche Nutzung:** Kläre mit deinem Arbeitgeber die KI-Policy. Gibt es zugelassene Tools? Gibt es ein AVV?
- **Sensible Daten:** Im Zweifel lokal arbeiten (Ollama) oder Daten anonymisieren, bevor du sie in ein Cloud-LLM gibst.
- **Opt-Out nutzen:** Bei jedem Cloud-LLM, das du nutzt, prüfe die Datenschutz-Einstellungen und deaktiviere Training auf deinen Daten, wenn möglich.

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [BfDI — KI und Datenschutz](https://www.bfdi.bund.de) | Bundesbeauftragter, Deutsch |
| :book: | [HmbBfDI — Diskussionspapier KI](https://datenschutz-hamburg.de) | Hamburger Datenschutzbehörde |
| :book: | [OpenAI — Enterprise Privacy](https://openai.com/enterprise-privacy) | Datenschutz-Übersicht OpenAI |
| :book: | [Anthropic — Privacy Policy](https://www.anthropic.com/privacy) | Datenschutz-Übersicht Anthropic |

## Teste dein Verständnis

- [ ] Kannst du die fünf DSGVO-Regeln für KI-Nutzer aus dem Kopf nennen?
- [ ] Weißt du, bei welchen Anbietern Opt-Out vom Training möglich ist und wo du es findest?
- [ ] Kannst du erklären, warum lokale Modelle DSGVO-technisch vorzuziehen sind?
- [ ] Verstehst du den Unterschied zwischen Training und Inference im Datenschutz-Kontext?
