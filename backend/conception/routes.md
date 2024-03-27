# ROUTES

## routes FRONT

| route        | Description                                      | status |
| ------------ | ------------------------------------------------ | ------ |
| /            | consulter la page d'accueil                      |        |
| /inscription | accéder à la page d'inscription                  |        |
| /connexion   | accéder à la page de connexion                   |        |
| /profil      | accéder à mes informations                       |        |
| /article     | accéder à un article                             |        |
| /archives    | accéder à la liste des articles classés par date |        |
| /about       | accéder à la bio de l'auteur et ses coordonnées  |        |

## routes BACK

| route                 | Verbe  | Description                                               | status |
| --------------------- | ------ | --------------------------------------------------------- | ------ |
| /user                 | post   | enregister un utilisateur                                 |        |
| /user                 | patch  | mettre à jour les infos de user sans mdp                  |        |
| /user/:id             | delete | suppr un user                                             |        |
| /user/update-password | patch  | mettre à jour mdp de user                                 |        |
| /user/:id/comments    | get    | récupère tous les commentaires liés à un user             |        |
| /login                | post   | vérifie si user existe et récup token                     |        |
| /me                   | get    | récup les infos de user avec token                        |        |
| /logout               | get    | déco user en générant token invalide                      |        |
| /comment              | post   | poster un commentaire                                     |        |
| /comment              | delete | suppr un commentaire                                      |        |
| /article              | post   | poster un article                                         |        |
| /article/:id          | get    | récup un article par son id                               |        |
| /articles/all         | get    | récup liste de tous les articles classés par ordre chrono |        |
| /article/:id          | delete | supprimer un article                                      |        |
| /article/:id          | put    | modifier un article                                       |        |
| /article/:id/comments | get    | récup les commentaires d'un article                       |        |
| /article?year=xxxx    | get    | filtrer les articles par année de publication             |        |
