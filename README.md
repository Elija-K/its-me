# Minimaler Jekyll-Start für justsomeone.ch

## Lokal starten

```bash
bundle install
bundle exec jekyll serve
```

Danach `http://127.0.0.1:4000` öffnen.

## Struktur

```text
_config.yml                Website-Einstellungen
_layouts/default.html      gemeinsames HTML-Grundgerüst
_includes/navigation.html  gemeinsame Navigation
assets/css/style.css       gesamtes Design
index.md                   Startseite
ueber-mich.md              Über-mich-Seite
projekte.md                Projektseite
kontakt.md                 Kontaktseite
CNAME                      eigene Domain für GitHub Pages
Gemfile                    lokale Jekyll-Abhängigkeit
```

Für GitHub Pages genügt es, diese Dateien in das Repository zu legen und Pages für den gewünschten Branch zu aktivieren.
