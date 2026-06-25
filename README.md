# Diego Chinni Portfolio — Guida completa

## Struttura file

```
diego-portfolio/
├── index.html                  ← Homepage
├── about.html                  ← About
├── viaggio.html                ← Galleria "Viaggio in Foto"
├── css/style.css               ← Tutti gli stili
├── js/
│   ├── main.js                 ← Animazioni, cursore, reveal
│   └── project.js              ← Sticky card + scroll sync
├── pages/
│   ├── un-designer.html
│   ├── oltre-la-visione.html
│   ├── chrysalis.html
│   ├── tempo-in-pillole.html
│   ├── unverse.html
│   ├── bomby-bina.html         ⚠ Testo da completare
│   └── omissis.html            ⚠ Ruolo da completare
└── assets/
    └── images/
        ├── diego-hero.jpg          ← Foto hero homepage
        ├── un-designer/
        │   ├── 01-still-apertura.jpg
        │   ├── 02-set.jpg
        │   ├── 03-scena-lavoro.jpg
        │   ├── 04-dettaglio.jpg
        │   └── 05-scena-finale.jpg
        ├── oltre-la-visione/
        │   ├── 01-copertina.jpg
        │   ├── 02-sezione-diego.jpg
        │   ├── 03-spread.jpg
        │   ├── 04-dettaglio-tipo.jpg
        │   ├── 05-still-life.jpg
        │   └── 06-rilegatura.jpg
        ├── chrysalis/
        │   ├── 01-concept-mood.jpg
        │   ├── 02-ricerca.jpg
        │   ├── 03-artefatto.jpg
        │   ├── 04-sistema-wearable.jpg
        │   └── 05-esposizione.jpg
        ├── tempo-in-pillole/
        │   ├── 01-key-visual.jpg
        │   ├── 02-packaging.jpg
        │   ├── 03-video-podcast.jpg
        │   ├── 04-materiali.jpg
        │   └── 05-presentazione.jpg
        ├── unverse/
        │   ├── 01-sito-overview.jpg
        │   ├── 02-mood-01.jpg
        │   ├── 03-mood-02.jpg
        │   ├── 04-artefatti.jpg
        │   └── 05-dettaglio-ui.jpg
        ├── bomby-bina/
        │   ├── 01-principale.jpg
        │   ├── 02-personaggi.jpg
        │   ├── 03-applicazione.jpg
        │   └── 04-contesto-parco.jpg
        └── omissis/
            ├── 01-concept.jpg
            ├── 02-documenti.jpg
            ├── 03-installazione.jpg
            ├── 04-interfaccia.jpg
            └── 05-presentazione.jpg
```

---

## Come aggiungere le foto

### Foto hero (index.html)
Trova questo blocco in `index.html` e sostituiscilo:
```html
<!-- PRIMA (placeholder) -->
<div class="hero-photo-placeholder" id="heroPhoto">...</div>

<!-- DOPO (con la tua foto) -->
<img src="assets/images/diego-hero.jpg" alt="Diego Chinni" id="heroPhoto"
     style="width:100%;height:100%;object-fit:cover;object-position:center top;">
```

### Foto nei progetti
Ogni slot foto ha un commento che indica il nome file esatto.
Sostituisci il `<div class="gallery-photo-placeholder">` con `<img>`:
```html
<!-- PRIMA -->
<div class="gallery-photo landscape">
  <div class="gallery-photo-placeholder">01 · Still apertura<br>...</div>
</div>

<!-- DOPO -->
<div class="gallery-photo landscape">
  <img src="../assets/images/un-designer/01-still-apertura.jpg" alt="Still apertura">
</div>
```

### Classi proporzione foto
- `.landscape` → 16:9 (foto orizzontali, stills, screenshot)
- `.portrait`  → 3:4  (foto verticali, mockup)
- `.square`    → 1:1  (dettagli, texture)

---

## Sezioni da completare ⚠

### bomby-bina.html
Cerca i commenti `★ DA COMPLETARE` e riempi:
1. **Descrizione progetto** nella sezione 01 (card-section active)
2. **Il tuo ruolo** nella sezione 02
3. **Ruolo** nel card-footer

### omissis.html
Cerca i commenti `★ DA COMPLETARE` e riempi:
1. **Il tuo ruolo** nella sezione 02
2. **Ruolo** nel card-footer

---

## Cover preview in homepage
Ogni progetto in homepage ha un'anteprima al hover. Per attivarla:
```html
<!-- Trova in index.html il project-item giusto -->
<div class="project-preview">
  <!-- PRIMA -->
  <div class="preview-placeholder">Cover</div>
  <!-- DOPO -->
  <img src="assets/images/nome-progetto/01-principale.jpg" alt="">
</div>
```

---

## Come avviare in locale
```bash
python3 -m http.server 8080
# oppure
npx serve .
```
Poi apri: http://localhost:8080
