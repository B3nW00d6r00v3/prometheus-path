---
title: "Cold-Start-Problem"
module: "8.4"
type: theorie
fast_track: true
effort: "15min"
stability: green
---

# Cold-Start-Problem

## Kernidee

Das Cold-Start-Problem ist die größte praktische Herausforderung bei Recommender Systems: neue User haben keine Bewertungshistorie, neue Items haben keine Bewertungen. Collaborative Filtering und Matrix Factorization versagen komplett — sie brauchen historische Daten, die nicht vorhanden sind. Lösungen kombinieren Content-Based Fallbacks, Popularity Defaults und aktives Onboarding.

## Im Detail

**Zwei Arten von Cold Start:**

**User Cold Start:** Neuer User registriert sich — keine einzige Bewertung, kein Klick-Verhalten.
**Item Cold Start:** Neues Produkt wird eingestellt — noch niemand hat es bewertet.

**Lösungsstrategien:**

**1. Content-Based Fallback (für Item Cold Start):**
- Neues Item hat keine Ratings, aber Item-Features (Beschreibung, Kategorie, Tags).
- Content-Based-Modell kann sofort Ähnlichkeiten berechnen.
- Sobald erste Ratings kommen, schrittweise auf CF umstellen.

**2. Popularity-Based Defaults (für User Cold Start):**
- Neuer User bekommt die beliebtesten Items empfohlen.
- Einfach, funktioniert überraschend gut als Baseline.
- Problem: keine Personalisierung, Popularity Bias verstärkt sich.

**3. Aktives Onboarding ("ich mag..."):**
- User beim ersten Login explizit befragen: "Welche Genres magst du?"
- Kurze Liste von Archetyp-Items zum Bewerten anbieten.
- Spotify macht das mit "wähle 3 Genres und 3 Künstler".
- Erzeugt sofort genug Signal für erste personalisierte Empfehlungen.

**4. Demographic/Context-Based:**
- Verwende demographische Informationen (Land, Alter, Gerät) für initiale Empfehlungen.
- Günstig wenn Geolokation bekannt: empfehle lokale Trends.

**5. Transfer Learning / Zero-Shot mit LLMs (2024-2026):**
- LLM kennt Wissen über Items aus Pretraining.
- Beschreibung des Users im Prompt reicht für erste Empfehlungen.
- Besonders gut für den absoluten Kaltstart.
```python
# Beispiel: LLM als Cold-Start-Recommender
prompt = """
Neuer User: interessiert sich für Krimis und historische Romane, hat Jane Austen geliebt.
Empfehle 5 Bücher aus dieser Liste:
{book_list}
Begründe jeden Vorschlag kurz.
"""
```

**6. Hybrid-Ansatz (Praxis-Standard):**
- Erkenne, ob User/Item kalt ist, wähle Strategie kontextbasiert.
- Überwache kontinuierlich: ab wie vielen Ratings ist CF besser als Fallback?

**Implementierung einer Hybrid-Entscheidungslogik:**
```python
def get_recommendations(user_id, n=10):
    user_rating_count = get_user_rating_count(user_id)

    if user_rating_count == 0:
        # Absoluter Cold Start → Popularity
        return get_popular_items(n=n)
    elif user_rating_count < 5:
        # Wenig Daten → Content-Based auf expliziten Präferenzen
        return get_content_based_recs(user_id, n=n)
    else:
        # Genug Daten → Collaborative Filtering
        return get_cf_recommendations(user_id, n=n)
```

## Ressourcen

| Typ | Link | Kommentar |
|-----|------|-----------|
| 📖 Paper | [Cold-Start Recommendations (Survey)](https://arxiv.org/abs/2204.09824) | Übersicht aller Strategien |
| 📖 Blog | [Spotify — Improving Recommendations for New Users](https://engineering.atspotify.com) | Praxis-Beispiel |

## Teste dein Verständnis

- [ ] Was sind die zwei Arten von Cold-Start-Problemen und wie unterscheiden sie sich?
- [ ] Warum ist Popularity-Based Recommendation eine schlechte langfristige Strategie, aber ein guter kurzfristiger Fallback?
- [ ] Wie löst aktives Onboarding das User-Cold-Start-Problem?
- [ ] Ab wann lohnt sich der Wechsel von Content-Based auf Collaborative Filtering?
