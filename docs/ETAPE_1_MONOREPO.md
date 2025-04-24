# 🧰 Étape 1 — Créer un Monorepo Git avec Historique des Repos Individuels

Ce guide explique **comment centraliser plusieurs projets Git existants** dans un seul dépôt, tout en **conservant l’historique de chaque projet**. Cela permet de maintenir une base de code unifiée et facile à déployer (ex: via GitHub Pages).

---

## ✅ Prérequis

- Git installé
- Le dépôt git cloné
- Accès aux dépôts individuels à intégrer

---

## 🧱 Structure finale visée

```
monorepo-base/
├── projets/
│   ├── js1/
│   ├── js2/
│   └── ...
```

Chaque projet sera isolé dans un sous-dossier `projets/<nom>`.

---

### Ajouter un dépôt distant et importer son contenu dans un sous-dossier (ex: `projets/js1/`)

```bash
git remote add js1 git@github.com:<user>/js1.git
git fetch js1
git read-tree --prefix=projets/js1/ -u js1/main  #ou autre branche
git commit -m "Import du projet js1 dans projets/js1/"
```

> 🔁 Répète cette étape pour chaque projet (`js2`, `react-demo`, etc.)

Astuce: si tu as ouvert ce fichier via VS code, tu peux sélectionner le nom du repo à intégrer (ici "js1"), faire ctrl + F2, et taper le nouveau nom du repo que tu souhaites intégrer.
tu peux ainsi changer facilement le nom de ton repo à intégrer sans réécrice chaque commande à la main


---

## 🔍 Vérification de l’historique

Tu peux vérifier que l’historique a bien été conservé :

```bash
git log -- projets/js1/
# ou graphiquement :
git log --graph --oneline --all --decorate
```

---

## 🧹 Nettoyer un projet mal importé (optionnel)

Si besoin de réimporter proprement :

```bash
git rm -r --cached projets/js1
rm -rf projets/js1
git commit -m "Suppression du projet js1 pour réimport propre"
```

Puis recommence l’import.

---

## 💡 Conseil

Les anciens dépôts peuvent être **archivés ou supprimés** une fois que tout a été intégré avec succès.

---

## 🎉 Ton monorepo est prêt

Tu disposes maintenant d’un dépôt centralisé, propre, versionné avec l’historique complet de tous tes exercices ✅

---

## ➕ Étape suivante : créer un dashboard GitHub Pages

Passe à l’[étape 2 → Créer un tableau de bord automatique](ETAPE_2_DASHBOARD.md) pour accéder à chaque projet via un index visuel.
