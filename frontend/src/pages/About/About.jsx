export default function About() {
  return (
    <div className="flex flex-col items-start m-8">
      <h1 className="text-3xl font-serif font-semibold mb-14 bg-black text-white p-4 rounded-xl max-w-md w-full text-center shadow-lg italic">
        À PROPOS
      </h1>
      <div className="border-2 border-black mx-auto max-w-md w-full rounded-xl p-8 shadow-lg text-justify">
        <p className="mb-2">
          Noir et blanc est un blog d'expression libre fictif réalisé que j'ai
          réalisé en parallèle de ma formation à la Wild Code School. Il m'a
          permis de mettre en application ce que j'ai vu et appris en cours -
          initier un projet React avec Node et Express, concevoir une base de
          donnée, mettre en place une authentification, hacher un mot de passe,
          stocker des données dans le localstorage, fetcher des données depuis
          une API, etc - mais ce projet me permet aussi d'expérimenter de
          nouvelles choses comme coder une section commentaire ou créer un
          compteur de like dynamique.
        </p>
        <p className="mb-2">
          La version que vous avez sous les yeux est une version fonctionnelle
          du blog pour un utilisateur lambda. A terme, je compte concevoir la
          partie admin dans laquelle l'auteur du blog pourra poster ses articles
          via un éditeur de texte avec une fonctionnalité upload d'images. Il
          pourra aussi consulter la liste des utilisateurs, supprimer des
          commentaires et des profils, avoir le contrôle total sur ce qui se
          déroule sur le site.
        </p>
        <p className="mb-2">
          Remarque si vous testez le blog : la fonctionnalité like/unlike pour
          les commentaires avec changement d'état du bouton thumb up est gérée
          avec le localstorage, donc restez sur le même navigateur si vous
          testez cette fonctionnalité, sinon il risque d'y avoir des bugs. Je
          suis en train de voir pour envoyer l'état sur le serveur au lieu du
          localstorage, ce sera beaucoup mieux, mais en attendant...
        </p>
        <p>
          Enfin n'hésitez pas à me faire remonter vos retours et critiques, car
          je suis là pour m'améliorer.
        </p>
      </div>
    </div>
  );
}
