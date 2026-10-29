# Diego Chinni — Portfolio

Sito statico (HTML, CSS, JS) senza build: si apre direttamente `index.html`.

## Struttura

```
diego website/
├── index.html              Homepage con l'elenco dei progetti
├── viaggio.html            Galleria "Viaggio in Foto"
├── pages/                  Una pagina per progetto + cv.html
│   ├── bomby-bina.html
│   ├── chrysalis.html
│   ├── oltre-la-visione.html
│   ├── omissis.html
│   ├── tempo-in-pillole.html
│   ├── un-designer.html
│   ├── unverse.html
│   └── cv.html
├── css/style.css           Tutti gli stili (desktop + mobile)
├── js/
│   ├── main.js             Cursore, animazioni, reveal
│   └── project.js          Card dei progetti e sezioni su mobile
├── Images/                 SOLO le immagini usate dal sito (WebP)
│   ├── Generico/           Favicon, logo navbar, foto hero
│   └── <Progetto>/<Sezione>/...
├── CV/CV.pdf               CV scaricabile
└── Non necessari/          Originali e file non usati, divisi per progetto
                            (escluso da git: resta solo sul Mac)
```

## Regole per aggiungere contenuti

- Ogni immagine nuova va convertita in WebP e messa in `Images/<Progetto>/<Sezione>/`.
- I nomi di cartelle e file devono combaciare con i link anche nelle maiuscole: il sito online distingue `Generico` da `generico`.
- Niente `:` nei nomi dei file (usare `-`, es. `22-08-2025`).
- Gli originali ad alta risoluzione vanno in `Non necessari/<Progetto>/`.
- Il font The Seasons arriva dal kit Adobe Fonts `use.typekit.net/jur8rxn.css`: il dominio del sito pubblicato deve essere aggiunto al Web Project su fonts.adobe.com.
