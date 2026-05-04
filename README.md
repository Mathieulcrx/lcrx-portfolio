# LCRX Portfolio — Lacroix Mathieu

Portfolio vidéaste / photographe en React.

---

## Démarrage rapide

```bash
npm install
npm start
```

Ouvre http://localhost:3000 dans ton navigateur.

---

## Déployer en ligne (Vercel — gratuit)

1. Crée un compte sur https://vercel.com
2. Pousse ce dossier sur GitHub
3. Dans Vercel, clique "New Project" → importe ton repo
4. Clique "Deploy" — c'est tout !

---

## Ajouter tes photos & vidéos

### 1. Dépose tes fichiers dans `src/assets/`
Exemples :
```
src/assets/val-disere.jpg
src/assets/marathon.jpg
src/assets/athletes.mp4
```

### 2. Ouvre `src/data/projects.js`

Pour une **image** :
```js
// En haut du fichier, ajoute l'import :
import valImg from '../assets/val-disere.jpg';

// Dans le tableau, remplace :
image: null,
// par :
image: valImg,
```

Pour une **vidéo** :
```js
import athletesVid from '../assets/athletes.mp4';

// Dans le tableau :
video: athletesVid,
```

---

## Modifier le contenu texte

| Ce que tu veux changer | Fichier à ouvrir |
|---|---|
| Projets (titre, description, tag) | `src/data/projects.js` |
| Compétences & outils | `src/data/skills.js` |
| Texte "À propos" | `src/components/About.jsx` |
| Email / Instagram | `src/components/Contact.jsx` |
| Stats (années, projets...) | `src/components/About.jsx` |

---

## Structure du projet

```
src/
├── components/
│   ├── Navbar.jsx + Navbar.css
│   ├── Hero.jsx   + Hero.css
│   ├── About.jsx  + About.css
│   ├── Projects.jsx + Projects.css
│   ├── Skills.jsx + Skills.css
│   ├── Contact.jsx + Contact.css
│   └── Footer.jsx + Footer.css
├── data/
│   ├── projects.js   ← ✏️ tes projets ici
│   └── skills.js     ← ✏️ tes compétences ici
├── hooks/
│   └── useReveal.js
├── assets/           ← 📁 mets tes images/vidéos ici
├── App.jsx
├── index.js
└── index.css
```
