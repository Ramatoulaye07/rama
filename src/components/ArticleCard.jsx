// TODO(P101) : Étape 1 (chapitre 1) puis étape 2 (chapitre 2).
// Carte d'un article.
// Props attendues : article (objet avec id, title, body), et plus tard estFavori, onBasculerFavori.
export default function ArticleCard({ article, estFavori, onBasculerFavori }) {
  return (
    <article className="article-card">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <button
        className={estFavori ? "favori" : "non-favori"}
        onClick={onBasculerFavori}
      >
        {estFavori ? "Retirer des favoris" : "Ajouter aux favoris"}
      </button>
    </article>
  );
}
