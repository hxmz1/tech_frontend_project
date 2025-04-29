# 🌟 BeQuotify - Extension de Motivation Quotidienne

**BeQuotify** est une extension de navigateur légère et élégante qui affiche une citation inspirante à chaque ouverture. Parfaite pour démarrer votre journée avec énergie, sagesse et motivation !

## 🚀 Fonctionnalités

- ✨ Affiche une citation motivante à chaque ouverture du popup.
- 🔁 Génère une nouvelle citation sur demande.
- 💾 Sauvegarde la dernière citation localement (localStorage).
- 🧠 Citations inspirantes depuis l’API publique [ZenQuotes](https://zenquotes.io/).
- 🎨 Interface propre et personnalisée avec un logo et une signature "Dev by Hamza ATAOUI".

## 🖼️ Aperçu

![Be Quotify](https://github.com/user-attachments/assets/1507cfbf-9554-4744-b00d-d4641c7c8351)


## 📦 Installation Manuelle

1. Clonez ou téléchargez ce dépôt.
2. Allez dans `chrome://extensions/` dans votre navigateur Chrome.
3. Activez le **Mode développeur** (coin supérieur droit).
4. Cliquez sur **"Charger l’extension non empaquetée"**.
5. Sélectionnez le dossier du projet.
6. L’extension est prête à l’emploi !

## 🛠️ Fichiers principaux

| Fichier        | Rôle |
|----------------|------|
| `manifest.json` | Déclare les permissions, scripts et paramètres de l'extension. |
| `popup.html`    | Interface utilisateur de l'extension. |
| `popup.js`      | Logique de récupération des citations et manipulation du DOM. |
| `icons/`        | Dossier contenant les icônes de l'extension. |

## 🔐 Permissions

L'extension utilise uniquement les permissions nécessaires :
- `storage` : Pour sauvegarder la dernière citation.
- `https://zenquotes.io/*` : Pour accéder à l’API de citations.

## 📄 À propos

Ce projet a été conçu par **Hamza ATAOUI** 3INGD pour apprendre à :
- Manipuler le DOM.
- Utiliser `fetch()` avec une API distante (AJAX).
- Travailler avec `localStorage`.
- Développer une extension de navigateur.

## ❤️ Crédit

- Citations fournies par l’API [ZenQuotes](https://zenquotes.io/).

---

**Licence** : Projet open-source libre de droits à usage personnel et éducatif.
