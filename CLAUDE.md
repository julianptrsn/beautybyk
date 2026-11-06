# beautybyk.de – Hinweise für Änderungen

Statische Website für **Bèauty by K – Katharina Baumbach** (Wimpern & Brauen, Flensburg-Jarplund). Gehostet auf Netlify, automatisches Deployment bei jedem Push auf `main`. Kein Build-Schritt, Publish-Verzeichnis ist das Repo-Root.

## Dateien
- `index.html` – Startseite (Onepager), CSS und JS inline; Impressum/Datenschutz öffnen dort als Popup (`dialog.legal`)
- `wimpernverlaengerung-flensburg.html`, `wimpernlifting-flensburg.html`, `browlifting-flensburg.html`, `powder-brows-flensburg.html` – Behandlungsseiten (SEO), Styles aus `media/seite.css`, je mit JSON-LD (Service, FAQPage, BreadcrumbList)
- `llms.txt` – Kurzfassung für KI-Suchen (Preise/Fakten synchron halten)
- `impressum.html`, `datenschutz.html` – Rechtstexte, Styles aus `media/recht.css`
- `media/` – Fotos (WebP, max. 1400 px), Logos (SVG), `fonts/` (Italiana, Jost, lokal, OFL)
- `_redirects` – 301-Weiterleitungen der alten PHP-Adressen
- `robots.txt`, `sitemap.xml` – bei neuen Seiten `sitemap.xml` ergänzen und `lastmod` aktualisieren

## Marke
- Farben (CSS-Variablen in `index.html`, `media/seite.css` und `media/recht.css` synchron halten): Sand `#EFE7DD`, Creme `#F7F1EA`, Travertin `#CBB9A7`, Sandstein `#B8A18C`, Taupe `#75614F`, Mokka `#3A2C24`, Linie `#DDD2C5`
- Schriften: Italiana (Headlines), Jost 300/400/500 (Text). Logo-Schrift „Brown Sugar“ ist nicht als Webfont lizenziert.
- Tonalität: Du-Ansprache, warm, kurz, ohne Ausrufezeichen-Ketten, Ich-Form aus Katharinas Sicht.
- Viel Weißraum, Haarlinien statt Schatten, eckige Flächen.

## Regeln
- Keine externen Schriften, Skripte, Tracker oder Einbettungen (Google Fonts, Maps-iframes, Instagram-Embeds). Die Seite setzt keine Cookies und hat deshalb keinen Cookie-Banner – neue Dienste immer erst in `datenschutz.html` aufnehmen.
- Kontaktweg-Priorität: 1. Instagram-Direktnachricht (https://ig.me/m/beauty_by_katharina), 2. E-Mail/Formular. Buttons immer in dieser Reihenfolge.
- Kontaktformular läuft über Web3Forms (`W3F_KEY` im Skript am Ende von `index.html`). Empfänger: info@beautybyk.de.
- Preise stehen an mehreren Stellen: Startseite (Kacheln, `.looks-note`, `#preise`, Bildunterschriften, FAQ, JSON-LD `hasOfferCatalog`), die jeweilige Behandlungsseite (Keyfacts, Preis, FAQ, JSON-LD) und `llms.txt`. Bei Preisänderungen alle Stellen anpassen.
- Netlify kürzt Links automatisch (`/impressum` statt `impressum.html`) – JS darf sich nicht auf exakte `href`-Werte verlassen.
- Nur auf ausdrückliche Anweisung von Julian pushen (jeder Push = Netlify-Deploy).
- Neue Fotos: WebP, längste Seite max. 1400 px, mit `width`/`height`-Attributen und aussagekräftigem `alt`-Text.
- Nach Änderungen auf 390 px Breite prüfen: kein seitliches Scrollen.
- Nur Fakten verwenden, die Katharina bestätigt hat – keine erfundenen Aussagen, Bewertungen oder Zahlen.

## Fakten
- Adresse: Europastraße 49 A, 24976 Handewitt (OT Jarplund), direkt an der Stadtgrenze Flensburg
- Keine Telefonnummer (gibt es nicht mehr) · info@beautybyk.de · Instagram @beauty_by_katharina
- Termine nach Vereinbarung
- Seit 2017 Wimpern/Brauen, selbstständig seit 2019, Powder-Brows-Ausbildung 2020 bei Xixibeauty, Beratung auch auf Russisch
