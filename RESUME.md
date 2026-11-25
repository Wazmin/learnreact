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

## 2026-11-25 — JSX, Virtual DOM et Composants

**Prochaine étape : https://handsonreact.com/docs/project-setup**

### Ce qui a été fait / vu
- Leçons suivies : **JSX** (`/docs/jsx`), **Virtual DOM** (`/docs/virtual-dom`),
  **Components** (`/docs/components`).
- Ajout de **Babel standalone** pour compiler le JSX directement dans le navigateur :
  - `npm install --save-dev @babel/standalone` (v8.1.3, dans `devDependencies`).
  - `index.html` charge `/node_modules/@babel/standalone/babel.min.js` avant `main.js`.
  - Le script `main.js` est maintenant en `type="text/babel"` (au lieu de
    `text/javascript`) pour que Babel le transforme.
- `main.js` réécrit en JSX avec des composants (l'ancien code `createElement` a été retiré).

### Concepts à retenir
- **JSX** : syntaxe proche du HTML qui est compilée en `React.createElement(...)`.
  On garde `className` au lieu de `class`. Un seul élément racine par `return`
  (d'où le `<div>` qui enveloppe), et parenthèses autour d'un JSX multi-lignes.
- **Virtual DOM** : React garde une représentation en mémoire de l'UI, compare
  (*diff*) l'ancienne et la nouvelle version, puis ne met à jour que ce qui a changé
  dans le vrai DOM.
- **Composants** : fonctions (ou classes) qui retournent des éléments React.
  - Le nom commence par une **majuscule** (`<App />`, `<HelloWorld />`), sinon React le
    prend pour une balise HTML.
  - **Composant fonction** : `function App() { return <div>...</div>; }`
  - **Composant classe** : `class X extends React.Component` avec une méthode `render()`.
  - Un composant est réutilisable : on peut l'utiliser plusieurs fois.
- Montage : `ReactDOM.createRoot(document.getElementById('root')).render(<App />)`.

### Code actuel (`main.js`)
```jsx
class HelloWorld extends React.Component {
  render() {
    return <div className="container">Hello Class Component</div>;
  }
}

function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### Points à retravailler / questions
- La leçon **Project Setup** va probablement passer à un vrai outil de projet
  (bundler / CLI) au lieu de Babel standalone dans le navigateur.

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
