# Portfolio 3D

Ce projet est un portfolio interactif et moderne conçu pour présenter un profil de développeur Fullstack. Il combine une interface utilisateur épurée avec une toile de fond 3D immersive, construite avec Vite, React, et Three.js.

## Live Demo

[Insérer le lien de la démo en direct ici]

## Fonctionnalités

- **Expérience 3D Immersive** : Arrière-plan interactif réalisé avec **Three.js** et **React Three Fiber**.
- **Design Moderne** : Utilisation du **Glassmorphism** pour une interface élégante.
- **Animations Fluides** : Transitions et apparitions d'éléments gérées par **Framer Motion**.
- **Responsive** : S'adapte parfaitement aux mobiles, tablettes et ordinateurs de bureau grâce à **Tailwind CSS**.
- **Formulaire de Contact Fonctionnel** : Intégration d'**EmailJS** pour l'envoi de messages.

## Stack Technique

- **React** : Bibliothèque UI principale.
- **Vite** : Outil de build et serveur de développement.
- **Three.js / @react-three/fiber** : Moteur 3D pour le web.
- **@react-three/drei** : Utilitaires pour simplifier la 3D.
- **Tailwind CSS** : Framework CSS utilitaire.
- **Framer Motion** : Bibliothèque d'animation pour React.
- **Lucide React** : Icônes vectorielles légères.
- **TypeScript** : Pour un code plus sûr et une meilleure expérience de développement.
- **EmailJS** : Pour le formulaire de contact.

## Getting Started

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1.  Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-nom-d-utilisateur/votre-repo.git
    ```
2.  Naviguez dans le répertoire du projet :
    ```bash
    cd votre-repo
    ```
3.  Installez les dépendances :
    ```bash
    npm install
    ```

### Lancement du serveur de développement

Pour lancer le projet en mode développement, exécutez la commande suivante :
```bash
npm run dev
```
Le site sera accessible à l'adresse `http://localhost:5173`.

## Configuration

Pour que le formulaire de contact fonctionne, vous devez configurer vos identifiants EmailJS dans le fichier `components/Contact.tsx`.

1.  Créez un compte sur [EmailJS](https://www.emailjs.com).
2.  Récupérez votre **Service ID**, **Template ID**, et **User ID**.
3.  Ouvrez le fichier `components/Contact.tsx` et remplacez les placeholders :

    ```javascript
    emailjs.send(
      'VOTRE_SERVICE_ID', // Remplacez par votre Service ID
      'VOTRE_TEMPLATE_ID', // Remplacez par votre Template ID
      formData,
      'VOTRE_USER_ID' // Remplacez par votre User ID
    )
    ```

## Déploiement

Pour créer une version de production de votre application, exécutez :
```bash
npm run build
```
Cette commande générera un répertoire `dist` contenant les fichiers statiques de votre application, que vous pouvez déployer sur n'importe quel service d'hébergement.