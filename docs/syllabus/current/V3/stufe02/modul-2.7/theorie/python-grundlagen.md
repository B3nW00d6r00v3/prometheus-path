---
title: "Python-Grundlagen kompakt"
module: "2.7"
type: theorie
fast_track: true
effort: "15min"
stability: green
expires: null
---

# Python-Grundlagen kompakt

## Kernidee

Python ist die Lingua Franca der KI-Welt -- nicht weil es die schnellste oder eleganteste Sprache ist, sondern weil jede KI-Library, jedes SDK, jedes Tutorial Python spricht. Du brauchst keine Python-Meisterschaft, aber du musst die Basics sicher beherrschen: Variablen, Listen, Dicts, Funktionen, Klassen-Basics. Der Rest kommt durchs Bauen.

## Im Detail

### Was ein KI-Anwender können muss

Du brauchst nicht "Python lernen" im Sinne eines Informatikstudiums. Du brauchst die 20% Python, die 80% der KI-Arbeit abdecken. Hier sind sie:

### Variablen und Datentypen

Python ist dynamisch typisiert -- eine Variable kann ihren Typ ändern. Aber mit Type Hints (nächstes Thema) dokumentierst du, welchen Typ du erwartest.

```python
# Die Typen, die du täglich brauchst
name: str = "Claude"
temperature: float = 0.7
max_tokens: int = 1024
verbose: bool = False
result: str | None = None  # kann String oder None sein
```

### Listen und Dicts -- Die Arbeitspferde

Listen und Dicts sind die Datenstrukturen, die du in jeder KI-Anwendung nutzt. API-Responses sind JSON (= Dicts + Listen), Prompts sind Strings in Listen, Ergebnisse sammelst du in Listen.

```python
# Liste: geordnete Sammlung
messages = [
    {"role": "system", "content": "Du bist ein hilfreicher Assistent."},
    {"role": "user", "content": "Erkläre Pydantic."},
]

# Dict: Schlüssel-Wert-Paare
config = {
    "model": "claude-sonnet-4-6-20250514",
    "max_tokens": 1024,
    "temperature": 0.7,
}

# Zugriff
print(config["model"])          # "claude-sonnet-4-6-20250514"
print(messages[0]["content"])   # "Du bist ein hilfreicher Assistent."

# Dict-Methoden, die du ständig brauchst
api_key = config.get("api_key", "nicht gesetzt")  # Default-Wert, kein KeyError
```

### Schleifen und Comprehensions

```python
# For-Schleife: Texte durch LLM verarbeiten
articles = ["Artikel 1...", "Artikel 2...", "Artikel 3..."]
summaries = []
for article in articles:
    summary = summarize(article)  # deine LLM-Funktion
    summaries.append(summary)

# List Comprehension: dasselbe in einer Zeile
summaries = [summarize(a) for a in articles]

# Dict Comprehension: Ergebnisse als Dict
results = {f"artikel_{i}": summarize(a) for i, a in enumerate(articles)}

# Filtern: nur lange Artikel zusammenfassen
long_articles = [a for a in articles if len(a) > 500]
```

### Funktionen

Funktionen sind wiederverwendbare Code-Blöcke. In KI-Arbeit schreibst du ständig Funktionen wie `call_llm()`, `parse_response()`, `format_prompt()`.

```python
def call_llm(
    prompt: str,
    model: str = "claude-sonnet-4-6-20250514",
    max_tokens: int = 1024,
    temperature: float = 0.7,
) -> str:
    """Ruft ein LLM auf und gibt die Antwort als String zurück."""
    # ... API-Call hier
    return response_text


# Aufruf mit Default-Werten
result = call_llm("Erkläre Pydantic.")

# Aufruf mit expliziten Werten
result = call_llm("Erkläre Pydantic.", model="claude-haiku-4-5-20250514", temperature=0.0)
```

### Klassen-Basics

Du musst keine komplexe OOP beherrschen, aber Klassen lesen können -- Pydantic-Modelle, SDK-Clients und Exceptions sind alle Klassen.

```python
# Einfache Klasse: Config-Objekt
class AppConfig:
    def __init__(self, model: str, max_tokens: int = 1024):
        self.model = model
        self.max_tokens = max_tokens

    def __repr__(self) -> str:
        return f"AppConfig(model={self.model!r}, max_tokens={self.max_tokens})"


config = AppConfig(model="claude-sonnet-4-6-20250514")
print(config.model)  # "claude-sonnet-4-6-20250514"
```

In der Praxis schreibst du selten eigene Klassen von Grund auf -- Pydantic-BaseModel (Modul 2.7.4) ist die bessere Alternative für Datenklassen.

### String-Formatting (f-Strings)

f-Strings sind dein Werkzeug für dynamische Prompts:

```python
user_name = "Ben"
topic = "Async Programming"

# f-String für Prompts
prompt = f"Hallo {user_name}, erkläre mir {topic} in 3 Sätzen."

# Mehrzeilige Prompts mit Triple-Quotes
system_prompt = f"""Du bist ein Python-Tutor.
Der Nutzer heißt {user_name}.
Erkläre Konzepte mit praktischen Beispielen.
Antworte auf Deutsch."""
```

### Error Handling

API-Calls schlagen fehl -- Rate Limits, Timeouts, ungültige Responses. Error Handling ist Pflicht.

```python
import httpx

try:
    response = call_llm("Erkläre Pydantic.")
    print(response)
except httpx.TimeoutException:
    print("API-Timeout -- versuche es später erneut.")
except httpx.HTTPStatusError as e:
    print(f"HTTP-Fehler: {e.response.status_code}")
except Exception as e:
    print(f"Unerwarteter Fehler: {e}")
```

### Was du NICHT sofort brauchst

- **Decorators** -- nützlich, aber für den Anfang nicht nötig
- **Metaclasses** -- fortgeschrittene OOP, brauchst du nie für KI-Arbeit
- **Generators** -- effizient, aber Comprehensions reichen erstmal
- **Multiple Inheritance** -- vermeiden, auch in professionellem Code
- **Design Patterns** -- lernst du organisch beim Bauen

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| :book: | [Helsinki Mooc.fi -- Python Programming MOOC](https://programming-25.mooc.fi) | Kostenlos, hochqualitativ, für Anfänger |
| :book: | [Real Python -- Python Basics](https://realpython.com/learning-paths/python-basics/) | Gut strukturierte Lernpfade |
| :book: | [Python Docs -- Tutorial](https://docs.python.org/3/tutorial/) | Offizielle Einführung |
| :hammer_and_wrench: | [Replit](https://replit.com) | Python im Browser testen, kein Setup |

## Teste dein Verständnis

- [ ] Schreibe eine Funktion `format_messages(system: str, user: str) -> list[dict]`, die eine Messages-Liste für einen LLM-API-Call zurückgibt.
- [ ] Wandle ein Dict `{"a": 1, "b": 2, "c": 3}` in eine Liste seiner Werte um -- mit einer Comprehension.
- [ ] Was passiert, wenn du `config["nicht_vorhanden"]` aufrufst -- und wie vermeidest du den Fehler?
