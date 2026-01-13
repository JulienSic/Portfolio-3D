# Portfolio Vitrine 3D - Développeur Fullstack

Ce projet est un portfolio interactif et moderne conçu pour présenter un profil de développeur Fullstack, avec une emphase particulière sur la recherche d'une **alternance**.

Il combine une interface utilisateur épurée (Glassmorphism) avec une toile de fond 3D immersive mais sobre, optimisée pour la performance et l'esthétique "Tech".

## 🚀 Fonctionnalités

-   **Expérience 3D Immersive** : Arrière-plan interactif réalisé avec **Three.js** et **React Three Fiber**. Il présente des formes géométriques flottantes (Icosaèdres, Cubes) avec un rendu "Low Poly" / Flat Shading.
-   **Design Moderne** : Utilisation du **Glassmorphism** (effets de flou et de transparence) pour une interface élégante.
-   **Animations Fluides** : Transitions de pages et apparitions d'éléments gérées par **Framer Motion**.
-   **Responsive** : S'adapte parfaitement aux mobiles, tablettes et bureaux grâce à **Tailwind CSS**.
-   **Architecture Légère** : Utilise les **ES Modules** et **Import Maps** via CDN (esm.sh), éliminant le besoin d'un bundler complexe (comme Webpack) pour le développement simple.

## 🛠️ Stack Technique

*   **React 19** : Bibliothèque UI principale.
*   **Three.js / @react-three/fiber** : Moteur 3D pour le web.
*   **@react-three/drei** : Utilitaires pour simplifier la 3D (Formes, Environnement, Contrôles).
*   **Tailwind CSS** : Framework CSS utilitaire pour le styling rapide.
*   **Framer Motion** : Bibliothèque d'animation pour React.
*   **Lucide React** : Icônes vectorielles légères.
*   **TypeScript** : Pour la sécurité du typage et l'autocomplétion.

## 📦 Installation et Lancement

Ce projet fonctionne directement dans le navigateur grâce aux `importmap`, mais il doit être servi via un serveur HTTP local pour éviter les restrictions de sécurité CORS liées aux modules ES6.

### Pré-requis
Avoir un éditeur de code (VS Code recommandé) ou Node.js installé.

### Méthode 1 : Via VS Code (Recommandé & Le plus simple)
1.  Ouvrez le dossier du projet dans **VS Code**.
2.  Installez l'extension **Live Server** (par Ritwick Dey).
3.  Faites un clic droit sur le fichier `index.html`.
4.  Cliquez sur **"Open with Live Server"**.
5.  Le site s'ouvrira automatiquement dans votre navigateur (généralement sur `http://127.0.0.1:5500`).

### Méthode 2 : Via Node.js (npx)
Si vous avez Node.js installé, vous pouvez lancer un petit serveur statique :

1.  Ouvrez votre terminal dans le dossier du projet.
2.  Lancez la commande suivante :
    ```bash
    npx serve .
    ```
3.  Ouvrez l'URL indiquée (souvent `http://localhost:3000`) dans votre navigateur.

### Méthode 3 : Via Python
Si Python est installé sur votre machine :

1.  Ouvrez votre terminal dans le dossier.
2.  Lancez :
    ```bash
    python -m http.server
    ```
3.  Ouvrez `http://localhost:8000`.

## 📝 Personnalisation

Le contenu du site est séparé de la logique pour faciliter les modifications.

### Modifier les textes et les données
Ouvrez le fichier `constants.ts` pour modifier :
*   `NAV_LINKS` : Les liens du menu.
*   `SKILLS` : Vos compétences (Frontend, Backend, Tools).
*   `PROJECTS` : La liste de vos projets (Titres, descriptions, images, liens).
*   `CONTACT_INFO` : Votre email, téléphone, LinkedIn, etc.

### Modifier la Scène 3D
Ouvrez `components/Scene3D.tsx` pour ajuster :
*   Les formes géométriques (`GeometricShape`).
*   Les couleurs des lumières.
*   La vitesse de rotation.

### Modifier le style global
Le style est géré via Tailwind CSS directement dans les classes des composants (`className="..."`) et la configuration de base se trouve dans la balise `<script>` du fichier `index.html`.

---

*Projet généré et optimisé pour une performance maximale et une maintenance simplifiée.*
