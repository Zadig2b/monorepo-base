# ⚙️ Étape 2 — Créer un Tableau de Bord Automatique avec GitHub Pages

Après avoir structuré ton monorepo (voir [Étape 1](ETAPE_1_MONOREPO.md)), tu peux mettre en place un **tableau de bord visuel** qui permet d'accéder facilement à tous tes projets via GitHub Pages.

---

## 🧾 Objectif

Générer un fichier `script.js` à partir des sous-dossiers du répertoire `projets/`, et construire dynamiquement un `index.html` affichant chaque projet sous forme de carte Bootstrap cliquable.

---

## 📁 Structure attendue

Ton dépôt doit contenir :

```
monorepo/
├── index.html                # Tableau de bord principal
├── script.js                 # Généré automatiquement
├── style.css                 
├── generate-dashboard.js     # Script Node.js qui génère le dashboard
├── projets/
│   ├── js1/
│   │   └── index.html
│   ├── react-demo/
│   │   └── public/index.html
│   └── ...
```

---

## 🛠️ Étapes

### 1. Installer Node.js si ce n’est pas fait

➡️ [https://nodejs.org](https://nodejs.org)

### 2. Exécuter le script pour générer le fichier `script.js`

```bash
node generate-dashboard.js
```

Ou avec NPM :

```bash
npm run build:dashboard
```

---

## 🔁 Que fait le script ?

- Il scanne tous les sous-dossiers dans `projets/`
- Il vérifie que chacun contient `index.html` ou `public/index.html`
- Il génère dynamiquement un tableau `projects = [...]` dans `script.js`
- Ce tableau est utilisé par `index.html` pour créer une grille responsive de cartes Bootstrap

---

## 🖥️ Exemple de vignette générée

```js
{
  name: "Js1",
  folder: "js1",
  path: "projets/js1/index.html"
}
```

---

## 🧪 Tester localement

Utilise l’extension **Live Server** de VS Code :

- Ouvre `index.html` à la racine
- Clique sur **Go Live**

Ou via la ligne de commande :

```bash
npx live-server
# ou
npx http-server
```

---

## 🔗 Déploiement GitHub Pages

1. Pousse le dépôt sur GitHub
2. Va dans `Settings > Pages`
3. Configure la source sur la branche `main`, dossier `/` (root)
4. Accède à ton tableau de bord :
   ```
   https://<ton-user>.github.io/monorepo-base/
   ```

---

## ✅ Résultat

Tu obtiens un tableau de bord dynamique, que tu peux mettre à jour à chaque ajout de projet en exécutant le script generate-dashboard.js 🧠📦

---

## 🪝 Étape suivante : automatiser avec un Git hook

Pour se faciliter encore plus les choses, tu peux maintenant ajouter un hook Git `pre-commit` pour exécuter ce script automatiquement avant chaque commit → [Voir Étape 3](DOC_HOOK_PRE_COMMIT.md)