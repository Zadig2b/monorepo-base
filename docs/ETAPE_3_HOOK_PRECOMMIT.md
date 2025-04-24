# 🪝 Étape 3 — Automatiser la génération du Dashboard avec un Git Hook

Après avoir mis en place un tableau de bord dynamique (voir [Étape 2](ETAPE_2_DASHBOARD.md)), tu peux automatiser sa mise à jour à chaque commit grâce à un **hook Git `pre-commit`**.

---

## 🎯 Objectif

Ce hook permet d’exécuter automatiquement `generate-dashboard.js` avant chaque `git commit`, pour que `script.js` soit toujours à jour.

---

## 📁 Où créer le hook

Le hook se place ici :

```
monorepo/
└── .git/
    └── hooks/
        └── pre-commit
```

> ⚠️ Le fichier `pre-commit` ne doit pas avoir d'extension `.txt`.

---

## 🛠 Mise en place (Windows / PowerShell)

### 1. Crée le fichier

```powershell
notepad .git/hooks/pre-commit
```

### 2. Colle ce contenu dans le fichier

```bash
#!/bin/sh
echo "📦 Génération automatique du dashboard..."
node generate-dashboard.js
git add script.js
```

### 3. Sauvegarde et ferme

Sur Windows, aucun `chmod` n’est requis. Assure-toi que le fichier n’a **pas d’extension** et commence bien par `#!/bin/sh`.

---

## 🧪 Tester le hook

Fais une modification quelconque, puis :

```bash
git commit -am "test hook"
```

Tu devrais voir apparaître :

```
📦 Génération automatique du dashboard...
✅ script.js généré avec X projets.
```

---

## 🚫 Désactiver temporairement le hook

Si tu veux bypasser le hook ponctuellement :

```bash
git commit --no-verify -m "commit sans hook"
```

---

## ✅ Résultat

Ton tableau de bord est toujours à jour sans avoir à y penser : tu gagnes en rigueur et en fiabilité ✨

---

## 🔙 Étapes précédentes

- [Étape 1 – Créer le monorepo](ETAPE_1_MONOREPO.md)
- [Étape 2 – Générer le dashboard](ETAPE_2_DASHBOARD.md)
