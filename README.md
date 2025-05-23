﻿# 📚 Monorepo CDA - Base de Travail pour la Formation Simplon

Ce dépôt fournit une **base vide et structurée** pour accueillir tous vos projets de la formation **Concepteur Développeur d'Applications (CDA)** chez Simplon.

---

## 📄 Objectif

Centraliser vos exercices et projets dans un seul dépôt, avec :

- Une structure standardisée (`projets/`)
- Un tableau de bord visuel généré dynamiquement
- Une documentation progressive en 3 étapes

---

## 📁 Structure du projet

```
monorepo-base/
├── index.html              # Tableau de bord principal
├── script.js               # Généré automatiquement
├── style.css               # Mise en forme
├── generate-dashboard.js   # Script Node.js
├── projets/                # Vos projets iront ici
└── docs/                   # Documentation
```

---

## 🚀 Lancer le projet

### 1. Cloner le dépôt

```bash
git clone https://github.com/Zadig2b/monorepo-base.git
cd monorepo-base
```

### 2. ⚠️ Relier à votre propre dépôt GitHub

> Ce dépôt est un **modèle de base**. Avant de commencer à travailler :

1. Supprimez le dossier `.git` pour détacher ce dépôt de l'original :

```bash
rm -rf .git
```

2. Initialisez un nouveau dépôt Git sur votre propre compte :

```bash
git init
git remote add origin git@github.com:<votre-user>/<votre-repo>.git
git add .
git commit -m "Initialisation depuis la base monorepo"
git push -u origin main
```

### 3. Générer le dashboard

Testez la génération de `script.js` et l'intégration d’un projet :

```bash
node generate-dashboard.js
# ou
npm run build:dashboard
```

---

## 🧪 Tester l'affichage local

Utilisez l’extension **Live Server** de VS Code :

- Ouvrez `index.html` à la racine
- Cliquez sur **Go Live**

Ou via la ligne de commande :

```bash
npx live-server
# ou
npx http-server
```

---

## 📚 Documentation

- [🧰 Étape 1 – Ajouter tes projets au monorepo](docs/ETAPE_1_MONOREPO.md)
- [⚙️ Étape 2 – Générer le dashboard](docs/ETAPE_2_DASHBOARD.md)
- [🪝 Étape 3 – Automatiser avec un Git hook](docs/ETAPE_3_HOOK_PRECOMMIT.md)

---

## 🎓 Contexte : Formation CDA Simplon

Technologies abordées :

- HTML/CSS/JavaScript
- Node.js
- React / Angular
- Java / Spring Boot
- Git / GitHub

## 📄 Licence

Ce projet est publié sous la licence [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

> 🛑 L’usage commercial ou la revente du contenu est strictement interdite sans autorisation écrite.

> ✅ Utilisation libre à des fins personnelles, éducatives ou non commerciales.
