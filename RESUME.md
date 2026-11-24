# Résumé du cours React (https://handsonreact.com/)

> À relire avant chaque session. Chaque entrée est datée et résume ce qui a été fait
> depuis l'entrée précédente. Les plus récentes sont en **bas**.

---

## 2026-11-24 — Mise en place et bases (avant l'étape JSX)

**Prochaine étape : https://handsonreact.com/docs/jsx**

### Environnement du projet
- Dossier : `G:\React\demos`
- Dépendances : `react` et `react-dom` (v18.3.1), `serve` (serveur statique).
- Lancer le projet : `npm start` → `serve -s -p 5000` → http://localhost:5000
- Pas de bundler ni de build : React est chargé via les builds **UMD** depuis `node_modules`
  dans `index.html`, puis `main.js`.

### Structure
- `index.html` : contient `<div id="root"></div>` + les 3 scripts
  (`react.development.js`, `react-dom.development.js`, `main.js`).
- `main.js` : le code React.

### Concepts vus
- **DOM natif vs React** : en JS pur on fait `createElement` → `textContent` → `className`
  → `appendChild`. React remplace ça par une description déclarative.
- **`React.createElement(type, props, ...children)`** crée un *élément React*
  (un simple objet JS décrivant l'UI, pas un vrai noeud DOM).
  - Le type est une chaîne (`'div'`) pour une balise HTML.
  - Les props utilisent `className` (et non `class`).
  - Les enfants peuvent être passés via la prop `children` (tableau) ou en arguments
    supplémentaires.
- **`ReactDOM.createRoot(rootElement).render(element)`** : monte l'élément dans le DOM (React 18).
- `console.log(element)` permet d'inspecter l'objet élément React.

### Code actuel (`main.js`)
```js
const rootElement = document.getElementById('root');

const element = React.createElement('div', {
  className: 'container',
  children: ['Hello World', 'Goodbye World'],
});

ReactDOM.createRoot(rootElement).render(element);
```

### Pourquoi JSX (ce qui arrive ensuite)
`createElement` devient vite verbeux avec des structures imbriquées ; JSX est une
syntaxe qui se compile en appels à `createElement`.

---

<!--
Modèle pour la prochaine entrée (copier en bas du fichier) :

## AAAA-MM-JJ — Titre court

**Prochaine étape : <lien>**

### Ce qui a été fait / vu
- ...

### Concepts à retenir
- ...

### Points à retravailler / questions
- ...
-->
