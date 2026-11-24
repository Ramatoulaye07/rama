# Teranga Blog

Teranga Blog est un mini-blog multipage construit avec React et React Router.
On peut lire des articles, rechercher par titre, commenter, découvrir les
auteurs et garder ses articles préférés. Les données viennent de l'API
publique JSONPlaceholder. Les textes en latin sont des données d'essai.

## Lancer le projet

    npm install
    npm run dev

L'application s'ouvre sur http://localhost:5173.

## Fonctionnalités

- Navigation sans rechargement (logo, liens, page 404)
- Liste d'articles avec recherche par titre
- Détail d'un article avec commentaires et formulaire validé
- Favoris partagés entre toutes les pages, avec compteur dans la barre
- Liste des auteurs et fiche de chaque auteur avec ses articles
- Messages de chargement et d'erreur pour chaque requête

## Ce que j'ai appris

1. La clé d'une liste doit suivre la donnée, pas la position.J'utilise
   `article.id` comme `key` pour que React ne mélange pas les éléments quand
   la liste est filtrée ou modifiée.
2. `fetch` ne rejette pas la promesse sur une erreur 404.Il faut tester
   `reponse.ok` moi-même, sinon un article inexistant n'affiche aucune erreur.
3. L'état partagé se remonte au parent commun.Les favoris vivent dans
   `LayoutPrincipal` et les pages les reçoivent avec `useOutletContext`,
   ce qui les conserve quand on change de page.