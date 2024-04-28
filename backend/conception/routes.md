# ROUTES

## routes FRONT

| route        | Description                                      | status |
| ------------ | ------------------------------------------------ | ------ |
| /            | consulter la page d'accueil                      | ok     |
| /inscription | accéder à la page d'inscription                  |        |
| /connexion   | accéder à la page de connexion                   |        |
| /profil      | accéder à mes informations                       |        |
| /article/:id | accéder à un article                             | ok     |
| /archives    | accéder à la liste des articles classés par date |        |
| /about       | accéder à la bio de l'auteur et ses coordonnées  |        |

## routes BACK

| route                 | Verbe  | Description                                               | status |
| --------------------- | ------ | --------------------------------------------------------- | ------ |
| /users                | get    | récup la liste de tous les utilisateurs inscrits          | ok     |
| /user                 | post   | enregistrer un utilisateur                                | ok     |
| /user                 | patch  | mettre à jour les infos de user sans mdp                  | ok     |
| /user/update-password | patch  | mettre à jour mdp de user                                 | ok     |
| /user/:id             | delete | suppr un user                                             | ok     |
| /login                | post   | vérifie si user existe et récup token                     | ok     |
| /me                   | get    | récup les infos de user avec token                        | ok     |
| /logout               | get    | déconnecte user en générant token invalide                | ok     |
| /comment              | post   | poster un commentaire                                     | ok     |
| /comment/:id          | delete | suppr un commentaire                                      | ok     |
| /user/:id/comments    | get    | récupère tous les commentaires liés à un user             | ok     |
| /article/:id/comments | get    | récup les commentaires d'un article                       | ok     |
| /article              | post   | poster un article                                         | ok     |
| /article/:id          | get    | récup un article par son id                               | ok     |
| /articles/all         | get    | récup liste de tous les articles classés par ordre chrono | ok     |
| /article/:id          | delete | supprimer un article                                      | ok     |
| /article/:id          | put    | modifier un article                                       | ok     |
| /article?year=xxxx    | get    | filtrer les articles par année de publication             | annulé |
