export default function About() {
  return (
    <div className="flex flex-col items-center m-8">
      <h1 className="font-nationalparkbold text-[40px] font-semibold mb-14 bg-black text-white p-4 rounded-xl max-w-md md:max-w-xl w-full text-center shadow-lg">
        À PROPOS
      </h1>
      <div className="border-2 border-black mx-auto max-w-md md:max-w-xl w-full rounded-xl p-8 shadow-lg text-md md:text-lg bg-white text-justify font-nunito">
        <p className="mb-4">
          <i>Noir et blanc</i> est un blog d'expression libre fictif que j'ai
          réalisé en parallèle de ma formation à la Wild Code School. Il m'a
          permis de mettre en application ce que j'ai vu et appris en cours -
          initier un projet React avec Node et Express, concevoir une base de
          données, mettre en place une authentification, hacher un mot de passe,
          stocker des données dans le localstorage, fetcher des données depuis
          une API, etc. Mais ce projet me permet aussi d'expérimenter de
          nouvelles choses comme coder une section commentaire ou créer un
          compteur de likes dynamique.
        </p>
        <p className="mb-4">
          La version que vous avez sous les yeux est une version fonctionnelle
          du blog pour un utilisateur lambda. À terme, je compte concevoir la
          partie admin dans laquelle l'auteur du blog pourra poster ses articles
          via un éditeur de texte et avec une fonctionnalité d'upload d'images.
          Il pourra aussi consulter la liste des utilisateurs, supprimer des
          commentaires et des profils, avoir le contrôle total sur ce qui se
          déroule sur le site.
        </p>
        <p className="mb-4">
          Remarque si vous testez le blog : la fonctionnalité like/unlike pour
          les commentaires avec changement d'état du bouton thumb up est gérée
          avec le localstorage, donc restez sur le même navigateur si vous
          testez cette fonctionnalité, sinon il risque d'y avoir des bugs. Je
          suis en train de voir pour envoyer l'état sur le serveur au lieu du
          localstorage, ce sera beaucoup mieux, mais en attendant...
        </p>
        <p className="">
          Enfin, n'hésitez pas à me faire remonter vos retours et critiques, car
          je suis là pour m'améliorer.
        </p>
      </div>
    </div>
  );
}
