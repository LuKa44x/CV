# CV · Luca Vicari

Il mio curriculum online: una pagina singola, responsive, con tema chiaro/scuro.
Costruito a mano con React e TypeScript, senza template.

**Sito online:** [Demo online](https://cv-snowy-five-17.vercel.app/)

## Tecnologie

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Bootstrap 5.3](https://getbootstrap.com) (solo CSS, senza il suo JavaScript) per griglia e utility
- CSS scritto a mano per identità visiva, tema e animazioni
- [Fontsource](https://fontsource.org) per il font (Hanken Grotesk), servito dal sito stesso
- Deploy su [Vercel](https://vercel.com)

## Funzionalità

- **Tema chiaro/scuro** con bottone. La scelta viene salvata nel browser e, alla prima visita, segue la preferenza del sistema.
- **Contenuti separati dall'interfaccia**: tutto il testo vive in un solo file tipizzato, quindi aggiornare il CV non richiede di toccare i componenti.
- **Striscia animata delle tecnologie** fatta solo in CSS, con pausa al passaggio del mouse.
- **Layout responsive** con la griglia di Bootstrap: le colonne di Formazione ed Esperienze si impilano sotto i 768px.
- **HTML semantico**: `header`, `main`, `section`, `article` e liste di definizioni (`dl`) per coppie etichetta-valore come Info e Contatti.

## Struttura

```
src/
├── components/
│   ├── EntryItems.tsx   # EntryItem (formazione, corsi, lavoro) ed EntryProjects
│   ├── Hero.tsx
│   ├── Section.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── cv.ts            # tutti i contenuti del CV
├── App.tsx              # composizione della pagina e stato del tema
├── App.css              # variabili, tema chiaro/scuro e stili
├── main.tsx
└── types.ts             # tipi dei dati (Entry, EntryProject, Cv, Mode...)
```

## Avvio in locale

Serve [Node.js](https://nodejs.org).

```bash
git clone https://github.com/LuKa44x/CV.git
cd CV
npm install
npm run dev
```

Altri comandi:

```bash
npm run build     # controllo dei tipi + build di produzione in dist/
npm run preview   # anteprima locale della build
```

## Come modificare i contenuti

Tutto il testo è in `src/data/cv.ts`. La forma dei dati è descritta in `src/types.ts`:
se manca un campo obbligatorio o ne sbaglio il tipo, TypeScript lo segnala prima della build.

## Scelte tecniche

- **Dati tipizzati.** Un'esperienza, un corso e una formazione condividono lo stesso tipo (`Entry`), con i campi non sempre presenti resi opzionali e mostrati solo se esistono.
- **Bootstrap personalizzato, non lasciato di default.** Le variabili di Bootstrap (`--bs-body-bg`, `--bs-link-color-rgb`...) sono collegate alle mie variabili CSS, quindi colori e font si cambiano in un punto solo.
- **Tema con `data-bs-theme`.** Lo stato del tema sta in React (`useState`), e un `useEffect` scrive l'attributo su `<html>` e salva la scelta in `localStorage`. Il CSS ridefinisce le variabili sotto `[data-bs-theme="dark"]`, quindi il resto degli stili non cambia.
- **Striscia delle tecnologie.** La lista è duplicata e la seconda copia è nascosta alle tecnologie assistive (`aria-hidden`). L'animazione sposta la striscia di metà della sua larghezza, cioè di una lista, così il ricominciare non si vede.

## Deploy

Il repository è collegato a Vercel: ogni push sul branch principale avvia la build e pubblica il sito.
