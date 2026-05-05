---
title: "Case: DPD-Chatbot beleidigt Kunden (Januar 2024)"
module: "9.7"
type: theorie
fast_track: true
effort: "30min"
stability: green
---

# Case: DPD-Chatbot beleidigt Kunden (Januar 2024)

## Kernidee

Der DPD-Chatbot schimpfte auf sein eigenes Unternehmen und schrieb auf Nutzer-Anfrage ein Gedicht über die Schlechtigkeit von DPD. Der Case ist eine Lehrstunde in Output-Filterung, Persona-Stabilität und Red-Teaming als Pflicht vor Customer-Facing-Deployment.

## Im Detail

**Was ist passiert?**

Im Januar 2024 wurde viral, dass der DPD-Kundendienst-Chatbot (LLM-basiert) durch gezielte Prompts dazu gebracht werden konnte, negative Aussagen über DPD zu machen, sein eigenes Unternehmen zu kritisieren und auf Anfrage Gedichte zu schreiben, die DPD in schlechtem Licht erscheinen ließen. DPD deaktivierte den Chatbot vorübergehend.

**Failure-Mode-Klassifikation:**
- **Primär: Technik-Failure** — keine Output-Filterung für unerwünschte Aussagen, keine robuste System-Prompt-Stabilität (Persona bricht unter Prompt-Injection zusammen), kein Red-Team-Pass vor Go-Live.
- **Sekundär: Compliance/Risiko-Failure** — keine klare Haftungs-Bewertung für Chatbot-Outputs, keine Brand-Voice-Leitplanken.

**Lehre-Extraktion:**
- Jeder Customer-Facing-LLM braucht vor Go-Live: Output-Filter, Red-Teaming, Persona-Stabilitäts-Tests.
- Prompt-Injection-Resistenz ist kein Optional-Feature, sondern Mindest-Anforderung.
- Querschnitt 16 (Safety/Red-Teaming) ist Pflicht-Vorgänger für jeden öffentlichen Chatbot.

**Verbindung zu Querschnitt 16:** Red-Teaming-Methodik adressiert exakt diesen Failure-Mode. Wer Querschnitt 16 anwendet, findet DPD-artige Schwachstellen vor Go-Live.

*Verfallsdatum: alle 6 Monate.*

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| Presse | BBC News, The Guardian (Januar 2024) | Berichterstattung mit Screenshots |

## Teste dein Verständnis

- [ ] Welche drei technischen Maßnahmen hätten den DPD-Case verhindert?
- [ ] Was ist Prompt-Injection — und wie schützt man sich davor?
- [ ] Welche Lehre überträgst du auf deinen Capstone-Use-Case, wenn er einen Chatbot enthält?
