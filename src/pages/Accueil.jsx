import { useState } from "react";
import ListeArticles from "../components/ListeArticles.jsx";
import BarreRecherche from "../components/BarreRecherche.jsx";
import ListeCommentaires from "../components/ListeCommentaires.jsx";
import CommentaireForm from "../components/CommentaireForm.jsx";
import { articlesDeTest, commentairesDeTest } from "../donnees-test.js";

// TODO(P502) : Étape 5.
// Page d'accueil : présentation et les derniers articles.
export default function Accueil() {
  const [favoris, setFavoris] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [commentaires, setCommentaires] = useState(commentairesDeTest);

  function basculerFavori(articleId) {
    setFavoris((favorisActuels) =>
      favorisActuels.includes(articleId) ? favorisActuels.filter((id) => id !== articleId) : [...favorisActuels, articleId]
    );
  }
  function ajouterCommentaire(nouveauCommentaire) {
    setCommentaires((commentairesActuels) => [...commentairesActuels, nouveauCommentaire]);
  }
  const articlesFiltres = articlesDeTest.filter((article) =>
    article.title.toLowerCase().includes(recherche.toLowerCase())
  );
  return (
    <>
      <h1>Bienvenue sur TerangaBlog !</h1>
      <p>{favoris.length} articles favoris</p>
      <BarreRecherche valeur={recherche} onChangement={(e) => setRecherche(e.target.value)} />
      <ListeArticles
        articles={articlesFiltres}
        favoris={favoris}
        onBasculerFavori={basculerFavori}
      />
      <h2>Commentaires</h2>
      <CommentaireForm onAjouter={ajouterCommentaire} />
      <ListeCommentaires commentaires={commentaires} />
    </>

  );
}
